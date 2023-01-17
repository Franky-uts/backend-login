const mongoose = require('mongoose')

const userSchema = mongoose.Schema({
    name: {
        type:String,
        require: true, 
        min: 3,
        max: 255
    },
    lastname: {
        type:String,
        require: true, 
        min: 3,
        max: 255
    },
    email:{
        type:String,
        require: true, 
        min: 3,
        max: 255
    },
    password:{
        type:String,
        require: true, 
        minLength: 3,
    },
    date:{
        type:Date,
        default:Date.now
    }
})

module.exports = mongoose.model('User',userSchema)