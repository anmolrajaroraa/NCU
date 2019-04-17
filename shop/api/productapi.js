const express = require('express');
const route = express.Router();
route.get('/api/product', (request, response) => {
    const json = request.body;
    const productCrud = require('../db/helpers/productoperations');
    productCrud.get(response);
})

module.exports = route;