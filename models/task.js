const mongoose = require('mongoose');

var enu = {
    values: ['pending', 'completed', 'none']
    , message: 'Status is required.'
}


const taskSchema = new mongoose.Schema({

    task: {
        type: String,
        require: true
    },

    description: {
        type: String,
        require: true,
    },

    status: {
        type: String,
        enum: enu,
        default: 'pending',
        trim: true,
        require: true
    },

}, {
    timestamps: true
})


const Task = mongoose.model('Task', taskSchema)

module.exports = Task;