import mysql from "mysql2/promise"

export const pool = mysql.createPool({
    host: "localhost",
    port: 3306,
    user: "root",
    password: "p@$$w0rd!",
    database: "api_tasks",
    waitForConnections: true,
    connectionLimit: 10
})