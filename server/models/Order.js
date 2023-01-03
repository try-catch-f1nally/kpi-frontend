const {Schema, model} = require('mongoose');

const Order = new Schema({
  userId: {type: Schema.Types.ObjectId, required: true},
  number: {type: Number, required: true, unique: true},
  date: {type: Date, default: Date.now},
  products: [{
    image: {type: String, required: true},
    name: {type: String, required: true},
    article: {type: String, required: true},
    price: {type: Number, required: true},
    amount: {type: Number, required: true}
  }],
  totalSum: {type: Number, required: true},
  status: {type: String, default: 'Pending dispatch'},
  payment: {type: String, required: true},
  recipient: {
    fullName: {type: String, required: true},
    phone: {type: String, required: true}
  },
  delivery: {
    service: {type: String, required: true},
    method: {type: String, required: true},
    city: {type: String, required: true},
    department: {type: Number},
    address: {type: String},
    waybill: {type: String}
  }
});

module.exports = model('Order', Order);
