const reviewService = require('../services/review-service');

async function postReview(req, res, next) {
  try {
    const {productId, authorId, authorName, rating, text} = req.body;
    await reviewService.postReview(productId, authorId, authorName, rating, text);
    return res.json({'message': 'Review posted successfully'});
  } catch (e) {
    next(e);
  }
}

async function deleteReview(req, res, next) {
  try {
    const {productId, reviewId} = req.body;
    await reviewService.deleteReview(productId, reviewId);
    return res.json({'message': 'Review deleted successfully'});
  } catch (e) {
    next(e);
  }
}

module.exports = {postReview, deleteReview};
