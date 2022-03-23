const { Reserve, User, Clinic, clinic_reserve, user_reserve } = require("../db.js");
const { isAuthUser } = require('../Utils/isAuth.js');
const moment = require('moment');
const { transporter } = require('./NodeMailer');

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
const getReserveFromUser = async (req, res, next) => {
    const userId = await isAuthUser(req);
    console.log(userId)
    try{
        let reservesFromUser = await user_reserve.findAll({where:{
            userId: userId
        }});
        let reservesIds = reservesFromUser.map(r => r.reserveId);

        let reserves = []
        
        for(let i=0; i<reservesIds.length; i++){
            let detail = await Reserve.findByPk(reservesIds[i]);
            let clinicReserve = await clinic_reserve.findOne({where:{
                reserveId: reservesIds[i]
            }});
            console.log(clinicReserve)
            let clinic = await Clinic.findByPk(clinicReserve.clinicId);
            reserves.push({detail: detail, clinic: clinic.name});    
        };
        
        res.json (reserves);
    } catch (e){
        next(e)
    }

}
const getAvailableReserves = async (req, res, next) => {
    const {clinicId} = req.params;
    
    try{
        let reserves = await clinic_reserve.findAll({where:{
            clinicId: clinicId
        }});
        
        let reservesDetails = [];
        let reserve ={};
        for(let i=0; i<reserves.length; i++){
            reserve = await Reserve.findByPk(reserves[i].reserveId)
            reservesDetails.push(reserve);    
        };
        let reservesDates = reservesDetails.map(r => r.date.concat(' ').concat(r.hourly));
        
        res.json({dates: reservesDates});
    }catch(e){
        next()
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
};
    
const postReserve = async (req, res) => {
    let {id} = req.params
    let {
        ammount,
        date,
        hourly,
        description,
        clinicId
    } = req.body;

    // const dateReserve = moment('MMM Do YYYY').locale('pt-br').format('L');
    // console.log(dateReserve);
    // const houlyReserve = date.slice(15,17);
    // console.log(houlyReserve);

    try{
        if( ammount, date, hourly, description ) {
            let newReserve = await Reserve.create({
                ammount,
                date,
                hourly,
                description,
                clinicId: id
            })
            
            const userId = isAuthUser(req);
            const user = await User.findByPk(userId);
            
            const clinic = await Clinic.findByPk(id);
            
            await user.addReserve(newReserve)
            await newReserve.setUser(user)

            await clinic.addReserve(newReserve)
            await newReserve.setClinic(clinic);

            await transporter.sendMail({
                from: '"Reserva de Consulta Veterinaria" <vipets.soyhenry@gmail.com>', // sender address
                to: user.email, // list of receivers
                subject: "VIPets: Reserva Clinica Veterinaria", // Subject line
                text: `Tu reserva para el día: ${newReserve.date} y horario: ${newReserve.hourly}, con un costo pago de: ${newReserve.ammount}, bajo la Descripción: ${newReserve.description}, Clinica: ${clinic.name}, ${clinic.address}` // plain text body
                });

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
  getReserveId, 
  getAvailableReserves,
  getReserveFromUser
  }