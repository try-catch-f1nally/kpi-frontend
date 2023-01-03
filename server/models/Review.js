const {Schema, model} = require('mongoose');

const Review = new Schema({
  authorId: {type: String},
  authorName: {type: String, required: true},
  rating: {type: Number, required: true},
  comment: {type: String, required: true},
  date: {type: Date, default: new Date()}
});

module.exports = model('Review', Review);
