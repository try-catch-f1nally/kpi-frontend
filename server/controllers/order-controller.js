const orderService = require('../services/order-service');

async function getOrders(req, res, next) {
  try {
    const orders = await orderService.getOrders(req.user.id);
    return res.json({orders});
  } catch (e) {
    next(e);
  }
}

async function createOrder(req, res, next) {
  try {
    const {products, totalSum, payment, delivery, recipient} = req.body;
    await orderService.createOrder(req.user.id, products, totalSum, payment, delivery, recipient);
    return res.json({'message': 'Order created successfully'});
  } catch (e) {
    next(e);
  }
}

module.exports = {getOrders, createOrder};
