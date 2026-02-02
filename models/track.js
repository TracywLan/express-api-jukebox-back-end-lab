const mongoose = require('mongoose')

const trackSchema = new mongoose.Schema({
    title:{
        type:String,
        required: true
    },
    artist:{
        type:String,
        required: true
    },
    album:{
        type:String,
        required: true
    },
    length: {
        type:Number,
        require: true

    }
})

module.exports = mongoose.model('Track', trackSchema);