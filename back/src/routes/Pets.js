const { Router } = require ('express');
const { getPets, postPet, getPetsId, modPet, killPet } = require('../controllers/Pets.js')
const { isAuth } = require('../Utils/isAuth.js');
// Aca tengo que importarme

const router = Router();

router.get('/', getPets);
router.get('/:id', getPetsId);
router.post('/', isAuth, postPet);
router.put('/:id', isAuth, modPet);
router.delete('/:id', isAuth, killPet);

module.exports = router;