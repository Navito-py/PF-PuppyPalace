const { Router } = require ('express');
const { getClinics, getClinicsId } = require("../controllers/Clinics.js");

const router = Router();

router.get('/', getClinics);
router.get('/:id', getClinicsId);

module.exports = router;