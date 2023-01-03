const fs = require('fs');
const path = require('path');

class PromoService {
  getCarouselImageNames() {
    let fileNames = fs.readdirSync(path.resolve(__dirname, '..', 'public', 'img', 'promo'));
    fileNames = fileNames.filter(f => f.includes('.jpg')).map(f => f.replace('.jpg', ''));
    return fileNames;
  }
}

module.exports = new PromoService();
