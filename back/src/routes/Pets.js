const { Router } = require ('express');
const { getPets, postPet } = require('../controllers/Pets.js')
// Aca tengo que importarme

const router = Router();

router.get('/', getPets);
router.get('/:id', getPets);
router.post('/', postPet);

module.exports = router;