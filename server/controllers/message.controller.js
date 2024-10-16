import Conversation from '../models/conversation.model.js'
import Message from '../models/message.model.js'
import {getReceiverSocketId,io} from '../socket/socket.js'


export const sendMessage = async (req,res) =>{
    try{
        const {message} = req.body
        const{ id :receiverId} = req.params
        const senderId = req.user._id

        

        //checking conversation in between sender and reciver

        let conversation = await Conversation.findOne({
            participants:{$all:[senderId,receiverId]}
        })

        if(!conversation){
            conversation = await Conversation.create({
                participants:[senderId,receiverId]
            })
        }

        const newMessage = new Message ({
            senderId,
            receiverId,
            message
        })

        if(newMessage){
            conversation.messages.push(newMessage._id)
        }

        // await newMessage.save()
        // await conversation.save()

        // this will rrun in parallel

        await Promise.all([conversation.save(),newMessage.save()])

        //socket io funtionality

        const receiverSocketId = getReceiverSocketId(receiverId)
        if(receiverSocketId){
            io.to(receiverSocketId).emit("newMessage",newMessage)
        }

        res.status(200).json({msg:"Message sent successfully!",newMessage})

        
        

    }
    catch(error){
        console.log("error in sendMessage controller", error.message)
        res.status(500).json({error:"Internal Server Error"})
    }

}



export const getMessage = async (req,res) =>{
    try{
        const {id:userToChat} = req.params
        const senderId = req.user._id

        const conversation = await Conversation.findOne({
            participants:{$all:[senderId,userToChat]}
        }).populate("messages")

        if(!conversation){
            return res.status(200).json([])
        }

        const messages = conversation.messages

        res.status(200).json(messages)
    }
   catch(error){
        console.log("error in login Controller",error.message)
        res.status(500).json({error:"Internal Server Error"})
    }
}