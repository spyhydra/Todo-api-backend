const mongoose=require('mongoose');

const taskSchema= new mongoose.Schema({

    content:{
        type:String,
        require:true
    },

    description:{
        type:String,
        require:true,
    },

    status: {
        type: String,
        enum : ['completed','none'],
        default: 'pending'
    },

},{
    timestamps:true
})


const Task=mongoose.model('Task',userSchema)

module.exports=Task;