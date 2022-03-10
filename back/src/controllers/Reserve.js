const { Reserve, User, Clinic } = require("../db.js");
const { isAuthUser } = require('../Utils/isAuth.js');

// ---------------------------- Funciones ---------------------------- \\

const reserveId = async(id) => {
    try {
        const idReserve = await Reserve.findByPk(id)
        return idReserve;
    } catch (error) {
        return res.status(404).send(error)
    }
}

// ------------------------------ Rutas ------------------------------ \\

const getReserve = async (req, res) => {
    try {
        const reserve = await Reserve.findAll();
        return res.status(200).json(reserve)
    } catch (error) {
        res.status(400).send(error)
    }
}

const getReserveId = async (req, res) => {
    try {
        const id = req.params.id;
        const idDetails = await reserveId(id)
        if(!idDetails) {
            return res.status(404).send("No hay reservas con este id")
        }
        res.status(200).json(idDetails)
    } catch (error) {
        res.status(404).send(error)
    }
}

const postReserve = async (req, res) => {
    let {
        ammount,
        date,
        hourly,
        description,
        city,
        clinicId
    } = req.body;
  
    try{
        if( ammount, date, hourly, description, city ) {
            let newReserve = await Reserve.create({
                ammount,
                date,
                hourly,
                description,
                city,
                clinicId
            })
            
            const userId = isAuthUser(req);
            console.log("USERID" + userId)
            const user = await User.findByPk(userId);
            console.log(user)

            const clinic = await Clinic.findByPk(clinicId);

            await user.setReserve(newReserve)
            await clinic.setReserve(newReserve)

            res.status(201).json(newReserve)
        } else {
            res.status(401).send({error: "Por favor complete todos los campos"})
        }
    } catch (error) {
        console.log(error)
        res.status(400).send(error)
    }
  }
  
  module.exports = {
  postReserve,
  getReserve,
  getReserveId
  }