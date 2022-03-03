//Importaciones
const axios = require('axios');
const { Pet, Vaccine } = require('../db.js');
const router = require('../routes/Clinics.js');

////////////////////////////////////////////////////////////////////////////////////////////
// Middlewares:
    // Searching Pets
    
const petsDb = async () => {
    return await Pet.findAll({
        include: {
            model: Vaccine,
            attributes: ["name", "date"],
            through: {
                attributes: [],
            }
        }
    });
};

//////////////////////////////////////////////////////////////////////////////////////////////
//RUTAS
    // GET

const getPets = async (req, res) => {
    try {
        let pets = await petsDb();
        res.status(200).json(pets)
    } catch (error) {
        res.status(400).send(error)
    }
}

    // POST

const postPet = async (req, res) => {
    let {
        name,
        type,
        breed,
        age,
        height,
        weight,
        image,
        history,
        status
    } = req.body

    try {
        let newPet = await Pet.create({
            name,
            type,
            breed,
            age,
            height,
            weight,
            image,
            history,
            status
        })
        res.status(201).json(newPet)
    } catch (error) {
        console.log(error)
        res.status(400).send(error)
    }
}

module.exports = {
    getPets,
    postPet
}