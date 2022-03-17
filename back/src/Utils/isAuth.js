const {verify} = require ('jsonwebtoken');
const { User }= require ('../db')

const isAuth = (req, res, next)=> {
    const authorization = req.headers['authorization'];
   
   
    if (!authorization) throw new Error ('No estás loggeado');
// Le quito el bearer y me quedo con el token
    const token = authorization.split(' ')[1];
// nos aseguramos de que es un tken legítimo
    const {userId} = verify(token, process.env.ACCESS_TOKEN_SECRET);
    
    //return  userId;
    next()
};

const isAuthUser = (req, res, next)=> {
    const authorization = req.headers['authorization'];
   
    if (!authorization) throw new Error ('No estás loggeado');
// Le quito el bearer y me quedo con el token
    const token = authorization.split(' ')[1];
// nos aseguramos de que es un tken legítimo
    const {userId} = verify(token, process.env.ACCESS_TOKEN_SECRET);
    
    return  userId;
    
};
const isAuthAdmin = async (req, res, next)=> {
    const authorization = req.headers['authorization'];
   
   
    if (!authorization) throw new Error ('No estás loggeado');
// Le quito el bearer y me quedo con el token
    const token = authorization.split(' ')[1];
// nos aseguramos de que es un tken legítimo
    const {userId} = verify(token, process.env.ACCESS_TOKEN_SECRET);
//Buscamos el usuario y nos fijamos si es administrador
    const user = await User.findByPk(userId);
    if(user && user.isAdmin){
        next()
    } else {
        res.send('Usted no tiene permisos de administrador.')
    }
    
    
};

module.exports = { //Esta se importa en el archivo de la ruta que quiero proteger
    isAuth,
    isAuthUser,
    isAuthAdmin
}