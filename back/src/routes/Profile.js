const {Router} = require ('express');
const { getProfile, modProfile, killProfile } = require ('../controllers/Profile.js');

const router = Router();

router.get('/', getProfile)
router.put('/:id', modProfile);
router.delete('/:id', killProfile);

module.exports = router; 