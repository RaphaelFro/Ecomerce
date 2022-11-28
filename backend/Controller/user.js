const bcrypt = require('bcrypt');
const jwt = require('jsonwebtoken');

const User = require('../Model/user');

exports.signup = (req, res, next) => {
    bcrypt.hash(req.body.password, 10)
        .then(hash => {
            const user = new User({
                name: req.body.name,
                firstname: req.body.firstname,
                email: req.body.email,
                password: hash,
                phone: req.body.phone
            });
            user.save()
                .then(() => res.status(201).json({ message: 'User created!' }))
                .catch(error => res.status(400).json({ error }));
        })
        .catch(error => res.status(500).json({ error }));
};

exports.login = (req, res, next) => {
    User.findOne({ email: req.body.email })
        .then(user => {
            if (!user) {
                return res.status(401).json({ error: 'User not find !' });
            }
            bcrypt.compare(req.body.password, user.password)
                .then(valid => {
                    if (!valid) {
                        return res.status(401).json({ error: 'Password is not correct !' });
                    }
                    if (user.is_admin) {
                        res.status(200).json({
                            userId: user._id,
                            token: jwt.sign(
                                { userId: user._id },
                                'RANDOM_TOKEN_ADMIN',
                                { expiresIn: '24h' }
                            )
                        })
                    }
                    res.status(200).json({
                        userId: user._id,
                        token: jwt.sign(
                            { userId: user._id },
                            'RANDOM_TOKEN_SECRET',
                            { expiresIn: '24h' }
                        )
                    });
                })
                .catch(error => res.status(500).json({ error }));
        })
        .catch(error => res.status(500).json({ error }));
};

//find all users
exports.getAllUsers = (req, res) => {
    try {
        User.find()
            .then((user) => {
                res.status(201).json(user);
            })
            .catch(error => res.status(404).json({ error }));
    } catch (error) {
        res.status(404).json({ message: error.message });
    }
};

//find one user by id
exports.getOneUser = (req, res) => {
    try {
        User.findOne()
            .then((user) => {
                res.status(201).json(user);
            })
    } catch (error) {
        res.status(404).json({ message: error.message });
    }
};

//update a user by id
exports.update = (req, res) => {
    if (!req.body) {
        res.status(400).send({
            message: 'Data to update can not be empty!'
        });
    }

    const id = req.params.id;

    User.findByIdAndUpdate(id, req.body, {
        useFindAndModify: false
    })
        .then(data => {
            if (!data) {
                res.status(404).send({
                    message: 'User not found'
                });
            } else {
                res.send({ message: 'User updated successfully' })
            }
        }).catch(err => {
            res.status(500).send({
                message: err.message
            });
        });
};

//delete a user by id
exports.delete = (req, res) => {
    User.findbyIdAndRemove(req.params.id)
        .then(data => {
            if (!data) {
                res.status(404).send({
                    message: 'User not found'
                });
            }
        }).catch(err => {
            res.status(500).send({
                message: err.message
            });
        });
};