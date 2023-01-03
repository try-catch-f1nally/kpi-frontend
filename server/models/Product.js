const {Schema, model, Types} = require('mongoose');
require('./Review');

const Product = new Schema({
  productType: {type: String, required: true},
  images: [String],
  name: {type: String, required: true},
  price: {type: Number, required: true},
  oldPrice: {type: Number},
  model: {type: String, required: true},
  memory: {type: Number, required: true},
  color: {type: String, required: true},
  availableMemories: [Number],
  availableColors: [String],
  article: {type: Number, required: true},
  rating: {type: Number, default: 0},
  saleStartDate: {type: Date, required: true},
  videoLink: {type: String, required: true},
  characteristics: [[String, String]],
  reviews: [{type: Types.ObjectId, ref: 'Review'}]
});

module.exports = model('Product', Product);
