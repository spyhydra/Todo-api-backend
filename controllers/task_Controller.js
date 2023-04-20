
const Task = require("../models/task");

module.exports.task = async function(req,res){

    const { task,description,status}=req.body;
    try {

        const newTask=new Task({
           task,
            description,
            status
        });
        await newTask.save();
        return res.status(200).json(newTask);

    }catch (err){
        if (err){
            console.log('internal error ', err);
            return res.status(500).json({message:' internal server error while adding task'});
    }

}
}
