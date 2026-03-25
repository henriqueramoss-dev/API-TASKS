import {Router} from "express";
import { listTasks } from "../controllers/tasks.controller.js";

const router = Router()

router.get("/", listTasks)

export default router