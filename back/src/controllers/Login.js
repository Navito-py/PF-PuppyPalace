const {User, Pet, Vaccine}= require ('../db.js');

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

        if(user.password === password) return res.status(200).send(user);

    }catch (error){
    next(error)
    }

}
module.exports = {login}