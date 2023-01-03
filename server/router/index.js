const {Router} = require('express');
const router = Router();
const authMiddleware = require('../middlewares/auth-middleware');
const {register, login, logout, refresh} = require('../controllers/auth-controller.js');
const {editUserInfo, changePassword} = require('../controllers/user-controller');
const {getProducts, getProduct} = require('../controllers/product-controller');
const {deleteReview, postReview} = require('../controllers/review-controller');
const {getOrders, createOrder} = require('../controllers/order-controller');
const {getCarouselImageNames} = require('../controllers/promo-controller');
const {registerValidator, loginValidator} = require('../validators/auth-validator');
const {editUserInfoValidator, changePasswordValidator} = require('../validators/user-validator');

router.post('/auth/register', registerValidator, register);
router.post('/auth/login', loginValidator, login);
router.delete('/auth/logout', logout);
router.get('/auth/refresh', refresh);

router.put('/user/contacts', authMiddleware, editUserInfoValidator, editUserInfo);
router.put('/user/password', authMiddleware, changePasswordValidator, changePassword);

router.get('/products', getProducts);
router.get('/products/:type-:model-:memory-:color', getProduct);

router.post('/review', postReview);
router.delete('/review/:id', authMiddleware, deleteReview);

router.get('/orders', authMiddleware, getOrders);
router.post('/order', authMiddleware, createOrder);

router.get('/promo/carousel-img', getCarouselImageNames);

module.exports = router;
