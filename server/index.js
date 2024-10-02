import express from 'express'
import mongoose from 'mongoose'
import dotenv from 'dotenv'
import cookieParser from 'cookie-parser'

import authRoutes from './routes/auth.route.js'
import messageRoutes from './routes/message.routes.js'
import userRoutes from './routes/users.routes.js'

dotenv.config()

const app = express()

app.use(express.json())
app.use(cookieParser())

app.use('/api/auth',authRoutes)
app.use('/api/messages',messageRoutes)
app.use('/api/users',userRoutes)

mongoose.connect(process.env.MONGODB_URL)
.then(()=>{
    app.listen(3000,()=>{
        console.log("connected to DB")
    })
})
.catch((e)=>{
    console.log(e)
})