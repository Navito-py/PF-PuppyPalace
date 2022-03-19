//Importaciones
// const {Sequelize} = require("sequelize");
// const axios = require("axios");
const {Clinic, Reserve} = require("../db.js");
const {Op, Sequelize} = require("sequelize");
const e = require("express");

//////////////////////////////////////////////////////////////////////////////////////////
// Acá van las FUNCIONES

const clinicsDB = async () => {
    return await Clinic.findAll({include:{model: Reserve}}); //me trae todo, no le especifico una sola cosa, porque quiero me traiga todos los datos

}

const idSearch = async(id) => {
    try {

        const clinic = await Clinic.findByPk(id,{include: {
            model: Reserve,
        }})

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

const postClinic = async (req, res, next) => {
    const {name, 
        address,
        province, 
        city,
        activeHours,
        email,
        phone,
        image,
        emergency,
        hospitalization    
     } = req.body;
        try {
            const clinic = await Clinic.findOne({
                where:{
                    name:name,
                    phone: phone
                }});
            if (clinic){
               return res.send('La clínica ya existe');
            };
            if(name && address && province && city && activeHours && phone){
                const newClinic = await Clinic.create({
                    name: typeof name === 'string' && name,
                    address: typeof address === 'string' && address,
                    province: (province === 'Santa Fe' || province ==='Mendoza' || province === 'Córdoba' || province === 'Cordoba') && province,
                    city: (city === 'Rosario' || city === 'Córdoba' || city === 'Cordoba' || city === 'Mendoza' ) && city,
                    activeHours: typeof activeHours === 'string' && activeHours,
                    email: typeof email === 'string'&& email.split('@').length === 2 && email.split('.')[1].length === 3 &&email,
                    phone: typeof phone === 'string' && phone,
                    image: typeof image === 'string' && image,
                    emergency: typeof emergency === 'boolean' && emergency,
                    hospitalization: typeof hospitalization === 'boolean' && hospitalization
                });

                res.json({success: 'La clínica ha sido creada'});
            }else {
                res.json({error: 'Complete los campos obligatorios'});
            }


        } catch (error) {

            next(error)

        }
};
const modifyClinic = async (req, res, next) => {
    const {id} = req.params;
    const { name, phone, image, address, activeHours, email, emergency ,hospitalization } = req.body;
try{
    const clinic = await Clinic.update({
        name:typeof name === 'string' && name, 
        address: typeof address === 'string' && address,
        activeHours: typeof activeHours === 'string' && activeHours,
        email: email && typeof email === 'string'&& email.split('@').length === 2 && email.split('.')[1].length === 3 &&email,
        phone: typeof phone === 'string' && phone,
        image: image && typeof image === 'string' && image,
        emergency: typeof emergency === 'boolean' && emergency,
        hospitalization: typeof hospitalization === 'boolean' && hospitalization
    },
    {where:
        {id}
    });

     res.json({success: `${clinic} La clínica fue modificada. Iván hacé el pull lpmqtrp!`})
    


}catch (e){
 next(e)
}
}

const deleteClinic = async (req, res, next) => {
    const {id} = req.params;
   try{

    await Clinic.destroy({where: {id}});
    res.json({success: 'Clínica eliminada'});

   } catch (e){
       next(e);
   }
};
const postReserve = async (req, res) => {
    let {
        ammount,
        date,
        hourly,
        description,
        city,
        userId,
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
                userId,
                clinicId
            })
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
  getClinics,
  postClinic,
  getClinicsId,
  postReserve,
  modifyClinic,
  deleteClinic
  }