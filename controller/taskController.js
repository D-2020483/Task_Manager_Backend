//logics of the tasks
import Task from "../models/Task.js";
//create new task
export const createTask = async (req, res) => {
    try {
        const newTask = new Task(req.body);
        const saved = await newTask.save();
        res.status(200).json(saved);
    } catch (error) {
        res.status(400).json({ message: error.message});
    }
};

//get all tasks
export const getAllTasks = async(req , res ) => {
    try{ 
        const tasks = await Task.find().sort({ dueDate: 1 });
        res.json(tasks);
    }catch(error){
        res.status(500).json({ message: error.message});
    }
};

//update task
export const updateTask = async (req, res) => {
    try {
        const updated = await Task.findByIdAndUpdate(req.params.id, req.body, { new: true });
        if(!updated) return res.status(404).json({ message: "Tasl not found" });
        res.json(updated);
    } catch (error) {
        res.status(400).json({ message: error.message });
    }
};

//delete task
export const deleteTask = async (req , res ) => {
    try {
       const deleted = await Task.findByIdAndDelete(req.params.id);
       if(!deleted) return res.status(404).json({ message: "Task not found" });
       res.json({ message: "Task deleted successfully" });
    }catch(error){
        res.status(500).json({ message: error.message });
    }
}; 