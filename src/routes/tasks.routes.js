import {Router} from "express";
import { createTasks, deleteTasks, getTasks, listTasks, updateTasks } from "../controllers/tasks.controller.js";

const router = Router()

router.get("/", listTasks)
router.get("/:id", getTasks)
router.post("/", createTasks)
router.put("/:id", updateTasks)
router.delete("/", deleteTasks)
export default router