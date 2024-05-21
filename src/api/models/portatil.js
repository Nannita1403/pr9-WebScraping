const { timeStamp } = require("console");
const mongoose= require("mongoose");

const portatilSchema = new mongoose.Schema({
    title: {type: String, require: true},
    img: {type: String, require: true},
    price:{type: Number, require: true}
}, {
    timeStamp: true,
    collection: "portatiles"
});

const Portatil = mongoose.model("portatiles", portatilSchema,"portatiles");
module.exports = Portatil;