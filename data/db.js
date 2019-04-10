module.exports = function () {
    const mongoose = require('mongoose');
    mongoose.connect("mongodb://sappy:spssbbpp10@ds219181.mlab.com:19181/sappy", { useNewUrlParser: true });

    //mongodb://localhost:27017/testdb
    //mongodb://sappy:spssbbpp10@ds219181.mlab.com:19181/sappy
}