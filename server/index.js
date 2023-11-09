import express from 'express'
import {createServer} from "node:http";
import cors from "cors";
import {studentRouter} from "./routes/student.js";

const PORT = 6666;
const app = express()

const server = createServer(app)

app.use(cors({'Origin': '*'}))

app.get('/sala/:id', (req,res) => {
    res.send('')
})

app.get('/sala/:id/:date', (req,res) => {
    res.send('djsakl')
})



app.use('/students', studentRouter)

server.listen(PORT, () => {
    console.log('server running at http://localhost:3000')
})
