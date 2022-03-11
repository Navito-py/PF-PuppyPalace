const {Router} = require ('express');
const {getProfile} = require ('../controllers/Profile.js');

const router = Router();

router.get('/', getProfile)

module.exports = router; 