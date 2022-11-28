const Categorie = require('../Model/categorie');

exports.createCategorie = (res, req, next) => {
    const categorie = new Categorie({
        name: req.body.name
    });
    categorie
        .save()
        .then(() => res.status(201).json({ message: "Categorie created successfully" }))
        .catch(error => res.status(400).json({ error }));
}

exports.findCategorie = (req, res) => {
    try {
        Categorie.findOne()
            .then((categorie) => {
                res.status(201).json(categorie);
            })
    } catch (error) {
        res.status(404).json({ message: error.message });
    }
};

exports.findAllCategories = (req, res) => {
    try {
        Categorie.find()
            .then((categorie) => {
                res.status(201).json(categorie);
            })
    } catch (error) {
        res.status(404).json({ message: error.message });
    }
};

exports.updateCategories = (req, res) => {
    if (!req.body) {
        res.status(400).send({
            message: 'Data to update can not be empty!'
        });
    }

    const id = req.params.id;

    Categorie.findByIdAndUpdate(id, req.body, {
        useFindAndModify: false
    })
        .then(data => {
            if (!data) {
                res.status(404).send({
                    message: err.message
                });
            } else {
                res.send({ message: 'Categorie updated successfully!' })
            }
        }).catch(err => {
            res.status(500).send({
                message: err.message
            });
        });
}

exports.deleteCategorie = (req, res) => {
    Categorie.findByIdAndRemove(req.params.id)
        .then(data => {
            if(!data) {
                res.status(404).send({
                    message: 'Categorie not found'
                });
            }
        }).catch(err => {
            res.status(500).send({
                message: err.message
            });
        });
}