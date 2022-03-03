//Importaciones
// const {Sequelize} = require("sequelize");
// const axios = require("axios");
const {Clinic} = require("../db.js");

//////////////////////////////////////////////////////////////////////////////////////////
// Acá van las FUNCIONES

const clinicsDB = async () => {
    return await Clinic.findAll(); //me trae todo, no le especifico una sola cosa, porque quiero me traiga todos los datos
}





////////////////////////////////////////////////////////////////////////////////////////
// Acá van las RUTAS

const getClinics = async (req, res) => {
    try {
        const allClinics = await clinicsDB();

        res.status(200).json(allClinics);

    } catch (error) {

      console.log(error);
    }
}

const postClinics = async (req, res) => {
    const clinica = req.body;
        try {
            let c = await Clinic.findAll();
            if (c.length > 0) {return res.json(c)} 

            let newClinics = await Clinic.bulkCreate(clinica)

            res.status(201).json(newClinics);

        } catch (error) {

            console.log(error);

        }
}

module.exports = {
 getClinics, postClinics
}