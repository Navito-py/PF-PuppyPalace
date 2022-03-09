const { Router } = require ('express');
const { getPets, postPet, getPetsId } = require('../controllers/Pets.js')
// Aca tengo que importarme

const router = Router();

router.get('/', getPets);
router.get('/:id', getPetsId);
router.post('/', postPet);

module.exports = router;