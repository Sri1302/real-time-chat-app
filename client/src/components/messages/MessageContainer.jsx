import Messages from './Messages.jsx'
import MessageInput from './MessageInput.jsx'
import useConversation from '../../zustand/useConversation'
import { useAuthContext } from "../../context/AuthContext";
import { TiMessages } from "react-icons/ti";
import { useEffect } from 'react';

const MessageContainer = () => {
  const {selectedConversation,setSelectedConversation} = useConversation()

  useEffect(()=>{

    return ()=>setSelectedConversation(null)

  },[setSelectedConversation])


  return (
    <div className='flex flex-col md:min-w-[450px]'>
      {!selectedConversation ?(
        <NoChatSelected/>
      ):(
      <>
      {/* Header */}

      <div className='bg-slate-500 px-4 py-2 mb-2'>
        <span className='label-text'>To:</span> {" "} <span className='text-gray-400 font-bold'>{selectedConversation.fullName}</span>
      </div>
      <Messages />
      <MessageInput/>
      </>
  )}
  </div>
  )
}

const NoChatSelected = ()  =>{
  const {authUser} = useAuthContext()
  return(
    <div className='flex items-center justify-center w-full h-full'>
      <div className='px-4 text-center sm:text-lg md:text-xl text-gray-200 font-semibold'>
        <p> Welcome 👋🏼 {authUser.fullName} </p>
        <p> Select a chat to start messaging</p>
        <TiMessages className='text-3xl md:text-6xl text-center'/>
      </div>
    </div>
  )
}

export default MessageContainer