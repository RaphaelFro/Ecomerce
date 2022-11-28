const fs = require('fs');
const Product = require('../Model/product');

exports.createProduct = (req, res, next) => {
    const productObject = JSON.parse(req.body.product);
    const product = new Product({
        ...productObject,
        imageUrl: `${req.protocol}://${req.get("host")}/images/${req.file.filename}`,
    });
    product
        .save()
        .then(() => res.status(201).json({ message: "Product created successful with all muscles !" }))
        .catch(error => res.status(400).json({ error }));
};

exports.findProduct = (req, res) => {
    try {
        Product.findOne()
            .then((product) => {
                res.status(201).json(product);
            })
    } catch (error) {
        res.status(404).json({ message: error.message });
    }
};

exports.findAllProducts = (req, res) => {
    try {
        Product.find()
            .then((product) => {
                res.status(201).json(product);
            })
            .catch(error => res.status(404).json({ error }));
    } catch (error) {
        res.status(404).json({ message: error.message });
    }
};

exports.updateProducts = (req, res) => {
    if (!req.body) {
        res.status(400).send({
            message: 'Data to update can not be empty!'
        });
    }

    const id = req.params.id;

    Product.findByIdAndUpdate(id, req.body, {
        useFindANdModify: false
    })
        .then(data => {
            if (!data) {
                res.status(404).send({
                    message: 'Product not found'
                });
            } else {
                res.send({ message: 'Product updated successfully' })
            }
        }).catch(err => {
            res.status(500).send({
                message: err.message
            });
        });
};

exports.deleteProduct = (req, res) => {
    Product.findbyIdAndRemove(req.params.id)
        .then(data => {
            if (!data) {
                res.status(404).send({
                    message: 'Popo not found'
                });
            }
        }).catch(err => {
            res.status(500).send({
                message: err.message
            });
        });
}