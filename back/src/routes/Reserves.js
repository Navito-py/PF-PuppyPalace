const { Router } = require ('express');
const { postReserve, getReserve, getReserveId, getAvailableReserves } = require("../controllers/Reserve.js");
const {isAuth} = require('../Utils/isAuth.js');

const router = Router();

router.post('/', isAuth, postReserve);
router.get('/', isAuth, getReserve);
router.get('/:id', isAuth, getReserveId);
router.get('/available/:clinicId', isAuth, getAvailableReserves);

module.exports = router;