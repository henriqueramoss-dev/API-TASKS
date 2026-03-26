import {Router} from "express";
import { createTasks, getTasks, listTasks, updateTasks } from "../controllers/tasks.controller.js";

const router = Router()

router.get("/", listTasks)
router.get("/:id", getTasks)
router.post("/", createTasks)
router.put("/:id", updateTasks)
export default router