module.exports = function () {
    const mongoose = require('mongoose');
    mongoose.connect("mongodb://heroku_d5p8fkm7:psa94a3sk2eajvp314s1b6qq1p@ds133632.mlab.com:33632/heroku_d5p8fkm7", { useNewUrlParser: true });

    //mongodb://heroku_d5p8fkm7:psa94a3sk2eajvp314s1b6qq1p@ds133632.mlab.com:33632/heroku_d5p8fkm7
    //mongodb://localhost:27017/testdb
    //mongodb://sappy:spssbbpp10@ds219181.mlab.com:19181/sappy
}