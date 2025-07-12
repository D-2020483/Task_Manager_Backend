import express from "express";
import { createTask, getAllTasks, updateTask, deleteTask } from "../controller/taskController.js";

const router = express.Router();

//POST /api/tasks
router.post("/", createTask);

//GET /api/tasks
router.get("/", getAllTasks);

//PUT /api/tasks/:id
router.put("/:id", updateTask);

//DELETE /api/tasks/:id
router.delete("/:id", deleteTask);

export default router;