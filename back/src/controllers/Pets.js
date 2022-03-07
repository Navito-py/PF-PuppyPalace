//Importaciones
const axios = require('axios');
const { Pet, Vaccine } = require('../db.js');
const router = require('../routes/Clinics.js');


// -------------------------------------- MIDDLEWARES -------------------------------------- \\

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


// ----------------------------------------- RUTAS ------------------------------------------ \\
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
        gender,
        type,
        breed,
        age,
        height,
        weight,
        image,
        history,
        status
    } = req.body

// -------------------------- FORMULARIO DE CREACIÓN Y VALIDACIONES -------------------------- \\
    try {
        if (name, gender, type, breed, age, height, weight, image, history, status) {
            let newPet = await Pet.create({
                name: typeof name === "string" && name,
                gender: (gender === "Female" || gender === "Male") && gender,
                type: (type === "Dog" || type === "Cat") && type,
                breed: typeof breed === "string" && breed,
                age: typeof age === "number" && age,
                height: typeof height === "number" && height,
                weight: typeof weight === "number" && weight,
                image: typeof image === "string" && image,
                history: typeof history === "string" && history,
                status: (status === "Alive" || status === "Deceased" || status === "Lost") && status
            })
            res.status(201).json(newPet)
        } else {
            res.status(401).send({error: "Complete el formulario correctamente"})
        }
    } catch (error) {
        console.log(error)
        res.status(400).send(error)
    }
}

module.exports = {
    getPets,
    postPet
}