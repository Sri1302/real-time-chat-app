import express from 'express'
import mongoose from 'mongoose'
import dotenv from 'dotenv'
import cookieParser from 'cookie-parser'
import path from 'path'

import authRoutes from './routes/auth.route.js'
import messageRoutes from './routes/message.routes.js'
import userRoutes from './routes/users.routes.js'
import { app,server } from './socket/socket.js'

dotenv.config()


const __dirname = path.resolve()

app.use(express.json())
app.use(cookieParser())

app.use('/api/auth',authRoutes)
app.use('/api/messages',messageRoutes)
app.use('/api/users',userRoutes)


app.use(express.static(path.join(__dirname,"/client/dist")))

app.get("*",(req,res)=>{
    res.sendFile(path.join(__dirname,"client","dist","index.html"))
})

mongoose.connect(process.env.MONGODB_URL)
.then(()=>{
    server.listen(3000,()=>{
        console.log("connected to DB")
    })
})
.catch((e)=>{
    console.log(e)
})