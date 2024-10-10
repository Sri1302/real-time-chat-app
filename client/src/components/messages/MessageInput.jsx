import { BsSend } from "react-icons/bs"
import useSendMessage from "../../hooks/useSendMessage"
import { useState } from "react"

const MessageInput = () => {

  const [message,setMessage] = useState("")
  const {loading,sendMessage} = useSendMessage()

  const handleSubmit = async (e) =>{
    e.preventDefault()
    if(!message) return 
    await sendMessage(message)
    setMessage("")
  }

  return (
    <form  onSubmit={handleSubmit} className="px-4 my-3">
      <div className=" relative w-full">
        <input type ='text' placeholder='Send a Message' value ={message} onChange={(e)=>setMessage(e.target.value)} className=' border text-sm rounded-lg w-full p-2.5 bg-gray-700 border-gray-600 text-white' />
        <button type ='submit' className="absolute insert-y-0 end-0 flex items-center pe-3" >
          {loading ? <div className="loading loading-spinner"></div>:<BsSend/>}
        </button>
      </div>
    </form>
  )
}

export default MessageInput