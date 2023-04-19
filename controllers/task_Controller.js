const Task=require('../models/task');
const Task = require("../models/user");

module.exports.task = async function(req,res){

    const { task,description}=req.body;
    try {

        const newTask=new Task({
           task,
            description
        });
        await newTask.save();
        return res.status(200).json(newTask);

    }catch (err){
        if (err){
            console.log('internal error ');
            return res.status(500).json({message:' internal server error while adding task'});
    }

}
}
