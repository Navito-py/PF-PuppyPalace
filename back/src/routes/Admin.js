const {Router} = require('express');
const AdminClinics = require ('./AdminClinics.js')

const router= Router();

router.use('/clinics', AdminClinics);
//router.use('/users', AdminUsers);

module.exports = router;


