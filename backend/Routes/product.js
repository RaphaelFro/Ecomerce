const express = require('express');
const router = express.Router();

const auth = require('../Middleware/auth');

const productCtrl = require('../Controller/product');

router.post('/createProduct', auth, productCtrl.createProduct);
router.get('/findProduct', auth, productCtrl.findProduct);
router.get('/findAllProducts', auth, productCtrl.findAllProducts);
router.modify('/updateProducts', auth, productCtrl.updateProducts);
router.delete('/deleteProduct', auth, productCtrl.deleteProduct);

module.exports = router;