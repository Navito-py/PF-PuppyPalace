const { Router } = require ('express');
const { postClinic } = require("../controllers/Clinics.js");

const router = Router();

router.post('/create', postClinic);

module.exports = router;