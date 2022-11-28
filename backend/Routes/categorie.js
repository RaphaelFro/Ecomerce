const express = require('express');
const router = express.Router();

const categorieCtrl = require('../Controller/categorie');

router.post('/createCategorie', categorieCtrl.createCategorie);
router.get('/findCategorie', categorieCtrl.findCategorie);
router.get('/findAllCategories', categorieCtrl.findAllCategories);
router.modify('/updateCategories', categorieCtrl.updateCategories)
router.delete('/deleteCategorie', categorieCtrl.deleteCategorie);

module.exports = router;