const mongoose = require('mongoose');

const NotesSchema = new Schema({
    title:{
        type: string,
        required: true
    },

    descrpition:{
        type: String,
        required: true
    },

    tag:{
        type: String
    },

    Date:{
        type: Date,
        default: Date.now
    },

});
module.exports = mongoose.model('notes', NotesSchema);