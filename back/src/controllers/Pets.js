//Importaciones
const axios = require('axios');
const { User, Pet, Vaccine } = require('../db.js');
const router = require('../routes/Clinics.js');
const {isAuthUser} = require ('../Utils/isAuth.js')

// -------------------------------------- MIDDLEWARES -------------------------------------- \\

    // Searching Pets
    
const petsDb = async () => {
    return await Pet.findAll({
        // include: {
        //     model: Vaccine,
        //     attributes: ["name", "date"],
        //     through: {
        //         attributes: [],
        //     }
      
        // }
        include:[{model: Vaccine}, {model: User}] 
    } 
    );
};

const idSearch = async(id) => {
    try {
        const pet = await Pet.findByPk(id, {include:{
            model: User,
        }
        })
        return pet;
    } catch (error) {
        return res.status(404).send(error)
    }
}

const getPetsId = async (req, res) => {
    try {
        const id = req.params.id;
        const idPet = await idSearch(id)
        if(!idPet) {
            res.status(404).send("No hay mascota con ese ID")
        }
        res.status(200).json(idPet)
    } catch (error) {
        res.status(404).send(error)
    }
}


// ----------------------------------------- RUTAS ------------------------------------------ \\
// GET


const getPets = async (req, res, next) => {
    try {
        let pets = await petsDb();
        res.status(200).json(pets)
    } catch (error) {
        res.status(400).send(error)
    }
}

    //--------------------- POST --------------------- \\

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
            const userId = isAuthUser(req);

            const user = await User.findByPk(userId, {include:{model: Pet}});
        
            const pets = [...user.pets, newPet];
           
            
            await user.setPets(pets);
            await newPet.setUser(user);

            res.status(201).json(newPet)
        } else {
            res.status(401).send({error: "Complete el formulario correctamente"})
        }
    } catch (error) {
        console.log(error)
        res.status(400).send(error)
    }
}

//  --------------------- PUT --------------------- \\

const modPet = async (req, res) => {
    let { id } = req.params
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
    
    try {
        const modifiedPet = await Pet.update({
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
        },
        {
            where: { id }
        })
        res.status(200).json(modifiedPet)
    } catch (e) {
        console.log(e)
        res.status(400).send(e)
    }
}

const killPet = async (req, res) => {
    let { id } = req.params
    await Pet.destroy({
        where: { id }
    })
    res.status(200).send("Successfully destroyed Pet")
}


module.exports = {
    getPets,
    postPet,
    getPetsId,
    modPet,
    killPet
}