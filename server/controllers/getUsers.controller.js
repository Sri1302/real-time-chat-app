import User from "../models/user.model.js"

export const getUsersForSideBar = async (req,res)=>{

   try{
    const loggedInUser = req.user._id
    console.log(loggedInUser)
    const filteredUsers = await User.find({_id:{$ne:loggedInUser}}).select("-password")

    res.status(200).json(filteredUsers)
   }
    catch(error){
        console.log("error in getUsers Controller",error.message)
        res.status(500).json({error:"Internal Server Error"})
    }
}