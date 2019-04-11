const express = require('express');
const route = express.Router();
route.get('/api/subcategory', (request, response) => {
    const json = request.body;
    const subcategoryCrud = require('../db/helpers/subcategoryoperations');
    subcategoryCrud.get(response);
})

module.exports = route;