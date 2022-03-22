const { Router } = require('express');
const { getReview, getReviewId, postReview, modReview, killReview } = require('../controllers/Review.js');
const {isAuth} = require('../Utils/isAuth.js');

const router = Router();

router.get('/', getReview);
router.get('/:id', getReviewId);
router.post('/:id', isAuth, postReview);
router.put('/:id', isAuth, modReview);
router.delete('/:id', isAuth, killReview);

module.exports = router