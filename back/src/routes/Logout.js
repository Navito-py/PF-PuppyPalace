const {Router} = require ('express');
const {logout} = require ('../controllers/Logout.js');

const router = Router();

router.post('/', logout);

module.exports = router; 