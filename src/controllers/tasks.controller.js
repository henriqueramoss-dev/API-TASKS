import { pool } from "../../db.js"

export async function listTasks(req, res){
    const [rows] = await pool.query("select id, title, created_at from tasks")

    return res.status(200).send(rows)
}