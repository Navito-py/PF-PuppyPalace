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
const mercado = require("./Mercancia.js")
const Admin = require ('./Admin.js');
const {isAuthAdmin} = require('../Utils/isAuth.js');

const router = Router();

router.use('/user', Users);
router.use ('/clinics', Clinics);
router.use("/mercado", mercado)
router.use('/admin',isAuthAdmin, Admin);

module.exports = router;