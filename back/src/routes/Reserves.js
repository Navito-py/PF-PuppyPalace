const { Router } = require ('express');
const { postReserve, getReserve, getReserveId } = require("../controllers/Reserve.js");
const {isAuth} = require('../Utils/isAuth.js');

const router = Router();

router.post('/', isAuth, postReserve);
router.get('/', isAuth, getReserve);
router.get('/:id', isAuth, getReserveId);

module.exports = router;