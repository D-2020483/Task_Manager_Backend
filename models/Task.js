//mogodb task schema
import mongoose from "mongoose";

const taskSchema = new mongoose.Schema({
    title: {type: String, required: true},
    description: String,
    dueDate: Date,
    status: {type:String, enum: ['pending', 'completed'], default: "pending" },
}, { timestamps: true });

const Task = mongoose.model("Task", taskSchema);
export default Task;