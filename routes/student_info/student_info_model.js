const mongoose = require('mongoose')
const Schema = mongoose.Schema



const studentInfoSchema = new Schema({
        _id: mongoose.Schema.Types.ObjectId,
    name: {
        type: String,
        required: true,
        unique: true,
        minLength: 8,
        trim: true,
        timestamps: true,
    },
    age: {
        type: Number,
        required: true,
        unique: false,
        trim: true,
    },
    grade: {
        type: String,
        required: true,
        unique: false,
        trim: true

    },
    address: {
        type: String,
        required: true,
        unique: false,
        trim: true,
    },
    date: {
        type: Date,
        required: true
    }
})

const Student = mongoose.model('Student', studentInfoSchema)

module.exports = Student
