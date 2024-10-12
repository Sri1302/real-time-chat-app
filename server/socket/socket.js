import {Server} from 'socket.io'
import http from 'http'
import express from 'express'

const app = express()
const server = http.createServer(app)
const io = new Server(server,{
    cors:{
        origin:["http://localhost:5173"],
        method:["POST","GET"]
    }
})

export const getReceiverSocketId = (receiverId) =>{
    return userSocketMap[receiverId]
}

//create connection using io.on

const userSocketMap ={}  //{userId:socketId}

io.on('connection', (socket ) =>{
    console.log(" a user is connected",socket.id)

    const userId = socket.handshake.query.userId
    if(userId != "undefined"){
    userSocketMap[userId]=socket.id

    }
    // io.emit send events to all connected clients
     io.emit("getOnlineUsers",Object.keys(userSocketMap))


    //socket.on is used to look up events
    socket.on("disconnect",()=>{
        console.log("user disconnected",socket.id)
        delete userSocketMap[userId]
        io.emit("getOnlineUsers",Object.keys(userSocketMap))
    })
})

export {app,io,server}