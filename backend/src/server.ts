import "reflect-metadata"
import express, { Application } from 'express'
import { createConnection } from "typeorm"
import cors from "cors"
import morgan from "morgan"

import Router from "./routes"
import dbConfig from '../database'

const PORT = process.env.PORT || 5000
const app: Application = express()

app.use(express.json())
app.use(morgan("tiny"))
app.use(express.static("public"))
app.use(cors())

app.use((req, res, next) => {
    res.header('Access-Control-Allow-Origin', '*')
    next()
})

app.use(Router)

createConnection(dbConfig).
    then((_connection) => {
        app.listen(PORT, () => {
            console.log("Server is running on port", PORT)
        })
})
    .catch((err) => {
        console.log("Unable to connect to db", err)
        process.exit(1)
    })

