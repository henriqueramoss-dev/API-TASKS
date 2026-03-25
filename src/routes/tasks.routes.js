import {Router} from "express";
import { getTasks, listTasks } from "../controllers/tasks.controller.js";

const router = Router()

router.get("/", listTasks)
router.get("/:id", getTasks)

export default router