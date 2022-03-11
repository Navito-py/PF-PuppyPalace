const {Router} = require ('express');
const { prueba } = require ( '../controllers/mercancia.js');
const  { notificacionprueba } = require ('../controllers/mercancia.js');

const router = Router();


router.post('/pruebamercado', prueba );

router.post("/notificacion", notificacionprueba )

module.exports = router;