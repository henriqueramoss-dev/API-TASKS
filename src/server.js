import express from "express"
import { pool } from "../db.js"
import tasksRoutes from "./routes/tasks.routes.js"
import {logger} from "./middlewares/logger.middleware.js"

const app = express()

const PORT = 3000

app.use(express.json())

app.use(logger)

app.get("/health-check", async (req, res) => {
    try {
        await pool.query("select 1")
        return res.status(200).json({
            api: "funcionando",
            banco: "conectdo"
        })
    } catch (error) {
        console.log(error)
        return res.status(503).json({
            message: "Banco indisponível"
        })
    }
})

app.use("/tasks", tasksRoutes)

app.listen(PORT, () => {
    console.log(`API rodando na porta ${PORT}`)
})