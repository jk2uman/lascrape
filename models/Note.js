var mongoose = require("mongoose");
var Schema = mongoose.Schema;

var lascraper = new Schema({
    title: {
        type: String,
    },
    body: {
        type: String,
    }
});

var Note = mongoose.model("Note", lascraper);
module.exports = Note;