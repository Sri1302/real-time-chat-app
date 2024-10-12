import React from 'react'
import useConversation from '../../zustand/useConversation'
import { useSocketContext } from '../../context/SocketContext'

const Conversation = ({conversation,lastIdx,emoji}) => {
  const {selectedConversation,setSelectedConversation} = useConversation()
  const isSelected = selectedConversation?._id === conversation._id

  const {onlineUsers} = useSocketContext()
  const isOnline = onlineUsers.includes(conversation._id)

  return (
    <>
    <div className={`flex gap-2 items-center p-2 py-1 hover:bg-sky-800 rounded-lg cursor-pointer ${isSelected ? "bg-blue-800" :"" }`} 
     onClick ={()=>setSelectedConversation(conversation)}
    >
      <div className={`avatar ${isOnline ? "online" : ""}  `}>
        <div className='w-12 rounded-full'>
          <img
							src={conversation.profilePic}
							alt='user avatar'
						/></div>
      </div>
      <div className='flex flex-col flex-1 '>
        <div className='flex gap-4 justify-center'>
          <p>{conversation.fullName} </p>
          <span>{emoji}</span>
        </div>
      </div>

    </div>
    {!lastIdx && <div className='divider my-0 py-0 h-1'></div>}

    </>
  )
}

export default Conversation