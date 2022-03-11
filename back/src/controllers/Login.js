const {User, Pet, Vaccine}= require ('../db.js');
const {sign} =require('jsonwebtoken');
const {hash, compare} = require('bcryptjs');
const {createAccessToken, 
    createRefreshToken, 
    sendAccessToken,
    sendRefreshToken,
} = require('../Utils/Tokens.js');
////////////////////////////////////////////////////////////////////////////////////////////
// FUNCIONES

const login = async (req , res , next) =>{
    try{
        const {

            userName,
            password,

        }
        =req.body;

        const user = await User.findOne({
            where:{
                userName,

            }
        });
        if(!user) return res.status(404).send({error: "usuario no encontrado"});
        if(user.password !== password) return res.status(401).send({error: "contraseña incorrecta"});
        if(user.password === password){
        const accessToken = createAccessToken(user.id);
        const refreshToken = createRefreshToken(user.id);
        // Pongo el refreshToken en la DB
        await User.update({refreshToken: refreshToken}, {
            where: {
                userName: user.userName
            }
        })
        // Envío el refreshToken como una cookie y el accessToken como una response al client
        sendRefreshToken(res, refreshToken);
        sendAccessToken(req, res, accessToken);
    };

    }catch (error){
    next(error)
    }

}
module.exports = {login}