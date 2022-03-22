const {Router} = require ('express');

const  { createPayment, executePayment } = require ('../controllers/PayPalController.js');

const router = Router();


router.post('/create', createPayment );
router.get('/execute-payment', executePayment);



module.exports = router;