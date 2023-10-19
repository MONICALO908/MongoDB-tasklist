
const mongoose = require('mongoose');

const taskSchema = new mongoose.Schema({
    description: {
        type: String,
        required: true,
    },
    title: {
        type: String,
        required: true,
    },
    completed:{
        type:Boolean,
        required:true
    }
});

const TaskModel = mongoose.model('tasks', taskSchema);

module.exports = TaskModel;
