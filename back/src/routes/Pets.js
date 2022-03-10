const { Router } = require ('express');
const { getPets, postPet, getPetsId } = require('../controllers/Pets.js')
const { isAuth } = require('../Utils/isAuth.js');
// Aca tengo que importarme

const router = Router();

router.get('/',isAuth, getPets);
router.get('/:id', getPetsId);
router.post('/', isAuth, postPet);

module.exports = router;