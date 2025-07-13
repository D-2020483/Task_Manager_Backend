import express from "express";
import { createTask, getAllTasks, updateTask, deleteTask } from "../controller/taskController.js";

const router = express.Router();

//POST /api/tasks
router.post("/tasks", createTask);

//GET /api/tasks
router.get("/tasks", getAllTasks);

//PUT /api/tasks/:id
router.put("/tasks/:id", updateTask);

//DELETE /api/tasks/:id
router.delete("/tasks/:id", deleteTask);

export default router;