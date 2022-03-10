const {Router} = require ('express');
const Login = require ('./Login.js');
const Register = require ('./Register.js');
const Pets = require ('./Pets.js');
const Logout = require ('./Logout.js');
const Profile = require ('./Profile.js');
const {isAuth} = require('../Utils/isAuth.js');

const router = Router();


router.use('/login', Login);
router.use('/register', Register);
router.use('/pets', Pets);
router.use('/logout', Logout);
router.use('/profile', isAuth , Profile);

module.exports = router;

//- /user  POST---> /login
//          GET---> /login
//          POST---> /register
//          POST --> /pets
//          GET -->  /pets  