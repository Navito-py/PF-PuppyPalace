const {verify} = require ('jsonwebtoken');

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

module.exports = { //Esta se importa en el archivo de la ruta que quiero proteger
    isAuth,
    isAuthUser
}