//endpoints for login
import express from 'express';
import loginUser from '../controller/authController.js';

const router = express.Router();

//POST /api/auth/login
router.post("/login", loginUser);

export default router;