var mongoose = require("mongoose");
var Schema = mongoose.Schema;

var lascrapper = new Schema({
    title: {
        type: String,
    },
    body: {
        type: String,
    }
});

var Note = mongoose.model("Note", lascrapper);
module.exports = Note;