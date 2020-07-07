const mongoose = require('mongoose');

mongoose.connect(process.env.DB_URL , { useNewUrlParser: true });

mongoose.connection.on('connected', function() {
  console.log('Mongoose connected');
});

require('../models/user')
require('../models/post')
