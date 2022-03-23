const { Router } = require ('express');
const { postReserve, getReserve, getReserveId, getAvailableReserves, getReserveFromUser } = require("../controllers/Reserve.js");
const {isAuth} = require('../Utils/isAuth.js');

const router = Router();

router.get('/', isAuth, getReserveFromUser);
router.post('/:id', isAuth, postReserve);
router.get('/', isAuth, getReserve);
router.get('/:id', isAuth, getReserveId);
router.get('/available/:clinicId', isAuth, getAvailableReserves);

module.exports = router;