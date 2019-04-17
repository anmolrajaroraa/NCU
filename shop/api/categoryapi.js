const express = require('express');
const route = express.Router();
route.get('/api/category', (request, response) => {
    const json = request.body;
    const categoryCrud = require('../db/helpers/categoryoperations');
    categoryCrud.get(response);
})

module.exports = route;