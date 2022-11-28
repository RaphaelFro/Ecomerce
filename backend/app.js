const express = require('express');
const { access } = require('fs');
const mongoose = require('mongoose');
const path = require('path');
const userRoutes = require('./Routes/user');

mongoose 
    .connect("mongodb+srv://bricebrettinger:Jumeaux67070815@ecommerce.v2lwq.mongodb.net/?retryWrites=true&w=majority", { useNewUrlParser: true, useUnifiedTopology: true })
    .then (()=> console.log('MongoDB is connected'))
    .catch (()=> console.log('MongoDB is not connected'));

const app = express();

app.use((req, res, next) => {
    res.setHeader('Access-Control-Allow-Origin', '*');
    res.setHeader(
        'Access-Control-Allow-Headers',
        'Origin, X-Requested-With, Content, Accept, Content-Type, Authorization'
    );
    res.setHeader(
        'Acess-Control-Allow-Methods',
        "GET, POST, PUT, DELETE, PATCH, OPTIONS"
    );
    next();
});

app.use(express.json());

app.use('/api/auth', userRoutes);

app.use('./image', express.static(path.join(__dirname, 'images')));

module.exports = app;
