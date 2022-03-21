const { Router } = require ('express');
const { getClinics, getClinicsId } = require("../controllers/Clinics.js");
const { getClinicsReview } = require('../controllers/Review.js');

const router = Router();

router.get('/', getClinics);
router.get('/:id', getClinicsId);
router.get('/review/:id', getClinicsReview);

module.exports = router;