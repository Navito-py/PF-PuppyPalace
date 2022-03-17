const { Router } = require ('express');
const { postClinic, modifyClinic, deleteClinic } = require("../controllers/Clinics.js");

const router = Router();

router.post('/create', postClinic);
router.put('/update/:id', modifyClinic);
router.delete('/delete/:id', deleteClinic);

module.exports = router;