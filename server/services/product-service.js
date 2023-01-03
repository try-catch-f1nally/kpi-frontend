const Product = require('../models/Product');

class ProductService {
  async getProduct(type, model, memory, color) {
    return Product.findOne({productType: type, model, memory, color}).populate('reviews').exec();
  }

  async getProducts(productType, model, memory, color, sort = 'new', search, page = 1, limit = 8) {
    const filter = {};
    if (productType) filter.productType = {$in: productType};
    if (model) filter.model = {$in: model};
    if (memory) filter.memory = {$in: memory};
    if (color) filter.color = {$in: color};

    const sortFilter = {};
    if (sort === 'rating') sortFilter.rating = -1;
    else if (sort === 'price') sortFilter.price = -1;
    else if (sort === '-price') sortFilter.price = 1;
    else if (sort === 'new') sortFilter.saleStartDate = -1;

    let products = await Product
      .find(filter, {
        images: 1, name: 1, price: 1, model: 1, memory: 1, color: 1, rating: 1,
        availableMemories: 1, availableColors: 1, article: 1, productType: 1
      })
      .sort(sortFilter)
      .populate('reviews')
      .exec();

    if (search && search.length) {
      products = this.filterProductsByName(products, search.toLowerCase().split(' '));
    }
    return products.slice((page - 1) * limit, page * limit);
  }

  filterProductsByName(products, keywords) {
    const map = new Map();
    for (let product of products) {
      let matches = 0;
      for (let keyword of keywords) {
        if (product.name.toLowerCase().includes(keyword)) {
          matches++;
        }
      }
      if (matches > 0) {
        map.set(product, matches);
      }
    }
    const sortedMap = new Map([...map].sort((a, b) => b[1] - a[1]));
    return Array.from(sortedMap.keys());
  }
}

module.exports = new ProductService();
