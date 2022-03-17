const { Reserve, User, Clinic, clinic_reserve } = require("../db.js");
const { isAuthUser } = require('../Utils/isAuth.js');
const moment = require('moment');
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
        }
        res.json(reservesDetails);
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
console.log(moment().locale('es').format('L'));
console.log(moment('Mar 2 2030', 'MMM Do YYYY').locale('es-mx').format('L'))
const postReserve = async (req, res) => {
    let {
        ammount,
        date,
        hourly,
        description,
        city,
        //userId,
        clinicId
    } = req.body;

    const dateReserve = moment(date.slice(4,15),'MMM Do YYYY').locale('es-mx').format('L');
    console.log(dateReserve);
    const houlyReserve = hourly.slice(15,17);
    console.log(houlyReserve);
    try{
        if( ammount, date, hourly, description, city ) {
            let newReserve = await Reserve.create({
                ammount,
                date: dateReserve > moment().locale('es-mx').format('L') && dateReserve,
                hourly: parseInt(houlyReserve)> 8 && parseInt(houlyReserve)<16 && houlyReserve,
                description,
                city,
                //userId,
                clinicId
            })
            
            const userId = isAuthUser(req);
            const user = await User.findByPk(userId);
            
            const clinic = await Clinic.findByPk(clinicId);
            
            await user.addReserve(newReserve)
            await newReserve.setUser(user)

            await clinic.addReserve(newReserve)
            //await newReserve.addClinic(clinic)
            await newReserve.setClinic(clinic);
            //await clinic.setReserve(newReserve);

            res.status(201).json(newReserve)
            console.log(user)
            console.log(clinic)
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
  getAvailableReserves
  }