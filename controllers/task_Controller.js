const Task = require("../models/task");

module.exports.task = async function (req, res) {

    const {task, description, complete} = req.body;
    try {

        const newTask = new Task({
            task, description, complete
        });
        await newTask.save();
        return res.status(200).json(newTask);

    } catch (err) {
        if (err) {
            console.log('internal error ', err);
            return res.status(500).json({message: ' internal server error while adding task'});
        }

    }
}

//updating status
module.exports.update = async function (req, res) {
    const {complete} = req.body;

    try {
        const result = await Task.findByIdAndUpdate(req.params.id, {
            $set: {
                complete: complete
            }
        }, {
            new: true
        });
        return res.status(200).json({result})

    } catch (err) {
        if (err) {
            console.log(err)
            return res.status(500).json({message: 'internal server issue coming in updating'});
        }
    }

}


module.exports.complete = async function (req, res) {

    var status = req.query.status;
    var result = await Task.find({complete: status});
    return res.status(200).json(result);

}

//deleting a task

module.exports.delete = function (req, res) {
    Task.findById(req.params.id, function (err, task) {
        if (err) {
            console.log('server error in deleting', err)
            return res.status(500).json({message: 'internal server error soon we will fix'})
        }
        task.remove();
        return res.status(200).json({message: 'Task deleted '})

    })
}






