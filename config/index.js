var mongoose = require("mongoose");
var URL = "mongodb://lascrape:Juliank2!@ds363996.mlab.com:63996/heroku_dtzs9gdg";
var connection = mongoose.connect(URL, { useNewUrlParser: true }).then(() => {
    console.log("successfully connected");
})

module.exports.connection = connection