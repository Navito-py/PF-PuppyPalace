//Importaciones
// const {Sequelize} = require("sequelize");
// const axios = require("axios");
const {Clinic} = require("../db.js");
const {Op, Sequelize} = require("sequelize")

//////////////////////////////////////////////////////////////////////////////////////////
// Acá van las FUNCIONES

const clinicsDB = async () => {
    return await Clinic.findAll(); //me trae todo, no le especifico una sola cosa, porque quiero me traiga todos los datos
}

const idSearch = async(id) => {
    try {
        const clinic = await Clinic.findByPk(id)
        return clinic;
    } catch (error) {
        return res.status(404).send(error)
    }
}

////////////////////////////////////////////////////////////////////////////////////////
// Acá van las RUTAS

const getClinics = async (req, res) => {
    let { name } = req.query;
    try {
        if(name){
            const clinic = await Clinic.findAll({ where: {
                name:{
                    [Op.match]: Sequelize.fn('to_tsquery', name)
                }
            }});
            if (clinic) return res.status(200).json(clinic);
            return res.status(404).send("No hay clinicas con ese nombre")
        } else {
            const allClinics = await clinicsDB();
            return res.status(200).json(allClinics)
        }
    } catch (error) {

      console.log(error);
    }
}

const getClinicsId = async (req, res) => {
    try {
        const id = req.params.id;
        const idDetails = await idSearch(id)
        if(!idDetails) {
            return res.status(404).send("No hay clinica con este id")
        }
        res.status(200).json(idDetails)
    } catch (error) {
        res.status(404).send(error)
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
 getClinics, postClinics, getClinicsId
}