import User from "../models/user.model.js"
import jwt from 'jsonwebtoken'

export const protectRoute = async (req,res,next) =>{
    try{
        const token = req.cookies.jwt

        if(!token){
            return res.status(400).json({error:"No token Provided"})
        }

        const decoded = jwt.verify(token,process.env.JWT_SECRET)

        console.log(decoded.userId)

        if(!decoded){
            return res.status(400).json({error:"Inavalid token"})
        }

        const user = await User.findById(decoded.userId).select("-password")

        if(!user){
            return res.status(400).json({error:"User not found"})
        }

        req.user = user

        next()
    }
    catch(error){
        console.log("error in Protect Route middleware",error.message)
        res.status(500).json({error:"Internal Server Error"})
    }
}