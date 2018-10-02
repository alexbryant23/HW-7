const mongoose = require('mongoose');


const Schema = mongoose.Schema;

const ListSchema = new Schema({
    ListName: {
        type: String,
        requred: "You must include a task item"
       
    }

})

const List = mongoose.model("List", ListSchema);


module.exports = List;