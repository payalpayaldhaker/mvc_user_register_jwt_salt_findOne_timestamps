const mongoose = require('mongoose');
require('dotenv').config();

mongoose.connect('mongodb://localhost:27017')
.then(d=>console.log('connectd'))
.catch(e=>console.log('dissonnected',e))

exports.mongoose= mongoose