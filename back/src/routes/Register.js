const {Router} = require ('express');
const {createUser} = require ('../controllers/Register.js');

const router = Router();

router.post('/', createUser)

module.exports = router;