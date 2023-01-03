const promoService = require('../services/promo-service');

function getCarouselImageNames(req, res, next) {
  try {
    const fileNames = promoService.getCarouselImageNames();
    res.json(fileNames);
  } catch (e) {
    next(e);
  }
}

module.exports = {getCarouselImageNames};
