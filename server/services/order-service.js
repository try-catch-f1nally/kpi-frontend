const Order = require('../models/Order');

class OrderService {
  async getOrders(userId) {
    return Order.find({userId}).sort({date: -1});
  }

  async createOrder(userId, products, totalSum, payment, delivery, recipient) {
    const number = await Order.find().count() + 1;
    await Order.create({userId, number, products, totalSum, payment, recipient, delivery});
  }
}

module.exports = new OrderService();
