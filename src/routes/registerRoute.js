const express = require('express');
const { registerController } = require('../contollers/registerControler');
const registerRoute = express.Router();

registerRoute.post('/register',registerController);

exports.registerRoute = registerRoute
