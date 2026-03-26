import { pool } from "../../db.js"

export async function listTasks(req, res){
    const [rows] = await pool.query("select id, title, created_at from tasks")

    return res.status(200).send(rows)
}

export async function getTasks(req, res) {
    const id = Number(req. params.id)
    console.log(id)
    if (!Number.isFinite(id)){
        return res.status(400).send({
            message: "id inválido"
        })
    }



    const[rows] = await pool.query("select id, title, created_at from tasks where id = ?", [id])
    return res.status(200).send({
        tasks:rows
    })
    
}

export async function createTasks(req, res) {
    const {title} = req.body
    console.log(title)

     if (!title || typeof title !== "string") {
        return res.status(400).send({
            message: "title é obrigatorio e deve ser string"
        })
        
     }

     const [result] = await pool.query("insert into tasks (title) values (?)", [title])

     const [rows] = await pool.query("select id, title, created_at from tasks where id = ?", [result.insertId])

     return res.status(201).send({
        tasks: rows
     })

}

export async function updateTasks(req, res) {
    const id = Number(req.params.id)
    const { title } = req.body
    
    if (!Number.isFinite(id)) {
        return res.status(400).send({
            message:"id invalido"
        })
    }

    if (!title || typeof title !== "string") {
        return res.status(400).send({
            message: "title é obrigatorio e deve ser strting"
        })
    }

    const [result] = await pool.query("update tasks set title = ? where id = ?", [title,id])

    const [rows] =  await pool.query("select id, title, created_at from tasks where id = ?", [id] )

    return res.status(200).send({
        tasks: rows[0]
    })
}

export async function deleteTasks(req, res) {
    const id = Number(req.params.id)

    if (!Number.isFinite(id)) {
        return res.status(400).send({
            message: "id invalido"
        })

        const [result] = await pool.query("delete from tasks where id = ?", [id])

        return res.status(204).send({
            message: "task deletada com sucesso"
        })
    }
}