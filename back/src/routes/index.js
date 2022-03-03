// Routes: 
// - /clinics GET--->  trae todas las clínicas SILVI
//            POST ---> guardar clínicas     SILVI
// - /user  POST---> /login //LAUTI
//          GET---> /login
//          POST---> /register  //VALE
//          POST --> /pets LUCHINCHAPELOTAS
//          GET -->  /pets          
const {Router} = require ('express');
const Clinics = require ('./Clinics.js');
const Users = require ('./Users.js');


const router = Router();

router.use('/user', Users);
router.use ('/clinics', Clinics);

module.exports = router;