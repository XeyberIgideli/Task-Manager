import mongoose from "mongoose";

const Schema = mongoose.Schema

const taskSchema = new Schema({
    name:{
        type: String,
        required: true,
        trim: true
    },
    completed: {
        type: Boolean,
        default:false
    }
})

const Task = mongoose.model('Task',taskSchema)

export default Task