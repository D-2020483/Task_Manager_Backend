//endpoints for login
import express from 'express';
import { loginUser , registerUser} from '../controller/authController.js';



const router = express.Router();

//POST /api/auth/login
router.post("/login", loginUser);
//POST /api/auth/register
router.post("/register", registerUser);

export default router;