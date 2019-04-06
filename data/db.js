module.exports = function () {
    const mongoose = require('mongoose');
    mongoose.connect("mongodb://localhost:27017/white-board", { useNewUrlParser: true });
}