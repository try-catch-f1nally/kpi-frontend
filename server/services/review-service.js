const Product = require('../models/Product');

class ReviewService {
  async postReview(productId, authorId, authorName, rating, text) {
    const product = await Product.findById(productId);
    product.reviews.push({
      authorId,
      authorName,
      date: new Date(),
      rating,
      text
    });
    await product.save();
    await this._recalculateRating(product);
  }

  async deleteReview(productId, reviewId) {
    const product = await Product.findById(productId);
    product.reviews = product.reviews.filter(review => review._id.toString() !== reviewId);
    await product.save();
    await this._recalculateRating(product);
  }

  async _recalculateRating(product) {
    const average = product.reviews.length ?
      product.reviews
        .map(element => element.rating)
        .reduce((sum, res) => sum + res, 0) / product.reviews.length
      : 0;
    product.rating = +average.toFixed(2);
    await product.save();
  }
}

module.exports = new ReviewService();
