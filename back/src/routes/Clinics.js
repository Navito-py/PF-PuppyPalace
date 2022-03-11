const { Router } = require ('express');
const { getClinics, postClinics, getClinicsId, postReserve, getReserve } = require("../controllers/Clinics.js");

const router = Router();

router.get('/', getClinics);
router.get('/:id', getClinicsId);
router.post('/', postClinics );
router.post('/reserve', postReserve);

module.exports = router;