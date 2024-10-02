import mongoose from 'mongoose'
import User from '../models/user.model.js'
import Message from '../models/message.model.js'


const conversationSchema = new mongoose.Schema({
    participants:[
        {
            type:mongoose.Schema.Types.ObjectId,
            ref:"User"
        }
    ],
    messages:[
        {
            type:mongoose.Schema.Types.ObjectId,
            ref:"Message"
        }
    ]
},{timestamps:true})

const Conversation = mongoose.model("Conversation",conversationSchema)

export default Conversation