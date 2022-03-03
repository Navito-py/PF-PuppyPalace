const {Router} = require ('express');
const {getClinics} = require("../controllers/Clinics.js");
const {postClinics} = require("../controllers/Clinics.js");

const router = Router();

router.get('/', getClinics);
router.post('/', postClinics );

module.exports = router;