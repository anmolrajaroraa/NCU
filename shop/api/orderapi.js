const express = require('express');
const route = express.Router();
route.post('/api/order', (request, response) => {
    const json = request.body;
    console.log(json.orders);
    const orderCrud = require('../db/helpers/orderoperations');
    orderCrud.add(json.orders, response);
})
route.get('/api/order', (request, response) => {
    console.log('In api');
    const json = request.body;
    const orderCrud = require('../db/helpers/orderoperations');
    orderCrud.get(response);
})

module.exports = route;