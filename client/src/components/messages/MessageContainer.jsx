import Messages from './Messages.jsx'
import MessageInput from './MessageInput.jsx'



const MessageContainer = () => {
  return (
    <div className='flex flex-col md:min-w-[450px]'>
      <>
      {/* Header */}

      <div className='bg-slate-500 px-4 py-2 mb-2'>
        <span className='label-text'>To:</span> <span className='text-gray-400 font-bold'>Sri Venkat</span>
      </div>
      <Messages />
      <MessageInput/>
      </>

    </div>
  )
}

export default MessageContainer