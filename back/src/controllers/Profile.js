const {User, Pet, Vaccine, Reserve} = require ('../db.js');
const {isAuthUser} = require('../Utils/isAuth.js');

const getProfile = async (req, res, next) => {
    const userId = isAuthUser(req);

    const user = await User.findByPk(userId, {
        include:[{model: Pet}, {model: Reserve}] 
    });
    res.json(user);
}

//  --------------------- PUT --------------------- \\

const modProfile = async (req, res) => {
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
    } = req.body;
    
    try {
        const modifiedProfile = await User.update({
            userName: typeof userName === 'string' && userName,
                name: typeof name ==='string' && name,
                lastName: typeof lastName === 'string' && lastName,
                email: typeof email === 'string'&& email.split('@').length === 2 && email.split('.')[1].length === 3 &&email,
                password: password.length > 8 && password.length<20 && password,
                phone: typeof parsedphone === 'number' && phone.length === 10 && parsedphone,
                address:typeof address === 'string' && address,
                province:(province === 'Mendoza' || province === 'Santa Fe' || province === 'Córdoba' || province === 'Cordoba') && province,
                city:(city === 'Mendoza' || city === 'Rosario' || city === 'Córdoba') && city,
                image: image !== ""? image:'https://upload.wikimedia.org/wikipedia/commons/thumb/9/98/OOjs_UI_icon_userAvatar.svg/2048px-OOjs_UI_icon_userAvatar.svg.png'
        },
        {
            where: { id }
        });
        res.status(200).json(modifiedProfile);
    } catch (e) {
        console.log(e)
        res.status(400).send(e);
    };
};

const killProfile = async (req, res) => {
    let { id } = req.params
    await User.destroy({
        where: { id }
    })
    res.status(200).send("Successfully destroyed User");
} ;


module.exports = {
    getProfile,
    modProfile,
    killProfile
}