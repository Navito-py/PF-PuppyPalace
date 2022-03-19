const {User, Pet, Vaccine}= require ('../db.js');

const createUser = async (req, res, next) => {
    try{
        const { userName, 
                name, 
                lastName, 
                email, 
                password, 
                phone, 
                address, 
                province, 
                city, 
                image       }=req.body;
        const parsedphone = parseInt(phone);
        const user = await User.findOne(({
            where: {
                userName: userName
            }
        }));
        
        if (user){
           return  res.send({error: 'El usuario ya existe, intente loggearse'})
            //res.redirect('/login')
        }
        if (userName && name && lastName && email && password && phone && province && city){
            const newUser = await User.create({
                userName: typeof userName === 'string' && userName,
                name: typeof name ==='string' && name,
                lastName: typeof lastName === 'string' && lastName,
                email: typeof email === 'string'&& email.split('@').length === 2 && email.split('.')[1].length === 3 &&email,
                password: password.length > 8 && password.length<20 && password,
                phone: typeof parsedphone === 'number' && phone.length === 10 && parsedphone,
                address: typeof address === 'string' && address,
                province: (province === 'Mendoza' || province === 'Santa Fe' || province === 'Córdoba' || province === 'Cordoba') && province,
                city: (city === 'Mendoza' || city === 'Rosario' || city === 'Córdoba' || city === 'Cordoba') && city,
                image: image !== ""? image:'https://upload.wikimedia.org/wikipedia/commons/thumb/9/98/OOjs_UI_icon_userAvatar.svg/2048px-OOjs_UI_icon_userAvatar.svg.png'
            })
            res.json(newUser);
        } else {
            res.send({error: 'Complete el formulario correctamente.'});
        };            

    }catch(e){
        next(e)
    }
};

module.exports = {
    createUser,
}