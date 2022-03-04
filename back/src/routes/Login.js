const {Router} = require ('express');
const {login} = require ('../controllers/Login.js');

const router = Router();

router.post('/', login)

module.exports = router; 