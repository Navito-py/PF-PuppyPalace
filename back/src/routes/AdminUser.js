const { Router } = require ('express');
const { admindModProfile , adminKillUser, admindGetProfile } = require("../controllers/UserAdmins.js");

const router = Router();

router.get('/', admindGetProfile)
router.get('/:id', /* RUTA ID */)
router.put('/:id', admindModProfile);
router.delete('/:id', adminKillUser);

module.exports = router;