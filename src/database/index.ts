const mongoose = require('mongoose');

mongoose.connect('mongodb://localhost/ApiRestCurriculo', {useMongoCliente: true});
mongoose.Promise = global.Promise;


module.exports = mongoose;