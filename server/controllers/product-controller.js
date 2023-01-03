const productService = require('../services/product-service');
const ApiError = require('../exceptions/api-error');

async function getProducts(req, res, next) {
  try {
    let {productType, model, memory, color, sort, search, page, limit} = req.query;
    if (typeof model === 'string') model = [model];
    if (typeof memory === 'string') memory = [memory];
    if (typeof color === 'string') color = [color];
    if (memory) memory = memory.map(Number);

    const products = await productService.getProducts(productType, model, memory, color, sort, search, page, limit);
    return res.json(products);
  } catch (e) {
    next(e);
  }
}

async function getProduct(req, res, next) {
  try {
    const {type, model, memory, color} = req.params;
    const product = await productService.getProduct(type, model, memory, color);
    if (!product) {
      return ApiError.BadRequest('No product found');
    }
    return res.json(product);
  } catch (e) {
    next(e);
  }
}

module.exports = {getProducts, getProduct};
