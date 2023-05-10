import Task from '../models/Task.js'
class TaskOperations {
    getTasks = async (req,res) => {
        try {
            const tasks = await Task.find() 
            res.status(200).json({tasks})
        } catch(err) {
            res.json({err})
        }
    }
    createTask = async (req,res) => {
        try {
            const task = await Task.create(req.body)
            res.status(201).json({task})
        } catch(err) {
            res.json({err})
        }
    }
    getTask = async (req,res) => {
        try {
            const task = await Task.findById(req.params.id)  
            res.status(200).json({task})
        } catch(err) {
            res.json({err})
        }
    }
    updateTask = async (req,res) => {
        try {
            const task = await Task.findById(req.params.id)  
            task.name = req.body.name
            task.completed = req.body.completed
            task.save()
            res.status(200).json({task})
        } catch(err) {
            res.json({err})
        }
    }
    deleteTask = async (req,res) => {
        try {
            const task = await Task.findOneAndDelete({ _id: req.params.id })
            res.status(200).json({task})
        } catch(err) {
            res.json({err})
        }
    }
}

const taskOperations = new TaskOperations()

export default taskOperations