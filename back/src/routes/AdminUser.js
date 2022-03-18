const { Router } = require ('express');
const { admindModProfile , adminKillUser, admindGetProfile, adminGetProfileId } = require("../controllers/UserAdmins.js");

const router = Router();

router.get('/', admindGetProfile)
router.get('/:id', adminGetProfileId)
router.put('/:id', admindModProfile);
router.delete('/:id', adminKillUser);

module.exports = router;