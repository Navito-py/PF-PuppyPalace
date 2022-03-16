const {User, Pet, Vaccine, Reserve} = require ('../db.js');
const {isAuthUser} = require('../Utils/isAuth.js');

const admindGetProfile = async (req, res, next) => {
    //const user = isAuthUser(req);

    const user = await User.findAll( {
        include:[{model: Pet}, {model: Reserve}] 
    });
    res.json(user);
}

//---------------------------------------------PUT----------------------------------------------------

const admindModProfile = async (req, res) => {
    let { id } = req.params;
    let {
        name,
        lastName,
        email,
        password,
        phone,
        address,
        province,
        city,
        image,
        isAdmin,
        banned,
    } = req.body;
    
    try {
        const adminModifiedProfile = await User.update({
            userName: typeof userName === 'string' && userName,
                name: typeof name ==='string' && name,
                lastName: typeof lastName === 'string' && lastName,
                email,//: typeof email === 'string'&& email.split('@').length === 2 && email.split('.')[1].length === 3 &&email,
                password,//: password.length > 8 && password.length<20 && password,
                phone,//: typeof parsedphone === 'number' && phone.length === 10 && parsedphone,
                address:typeof address === 'string' && address,
                province:(province === 'Mendoza' || province === 'Santa Fe' || province === 'Córdoba') && province,
                city:(city === 'Mendoza' || city === 'Rosario' || city === 'Córdoba') && city,
                image: image !== ""? image:'https://upload.wikimedia.org/wikipedia/commons/thumb/9/98/OOjs_UI_icon_userAvatar.svg/2048px-OOjs_UI_icon_userAvatar.svg.png',
                isAdmin,
                banned
        },
        {
            where: { id }
        });
        res.status(200).json(adminModifiedProfile);
    } catch (e) {
        console.log(e)
        res.status(400).send(e);
    };
};

const adminKillUser = async (req, res) => {
    let { id } = req.params
    await User.destroy({
        where: { id }
    })
    res.status(200).send("fuiste eliminado por gato");
} ;


module.exports = {
    admindGetProfile,
    admindModProfile,
    adminKillUser,
}