const { Router } = require ('express');
const { modReview, killReview } = require('../controllers/Review.js');

const router = Router();

router.delete('/:id', killReview);

module.exports = router;