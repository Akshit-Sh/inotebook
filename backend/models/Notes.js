const mongoose = require('mongoose');

const NotesSchema = new Schema({
    title:{
        type: string,
        required: true
    },

    descrpition:{
        type: string,
        required: true
    },

    tag:{
        type: string
    },

    Date:{
        type: Date,
        default: Date.now
    },

});
module.exports = mongoose.model('notes', NotesSchema);