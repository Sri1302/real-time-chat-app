import { BsSend } from "react-icons/bs"

const MessageInput = () => {
  return (
    <form className="px-4 my-3">
      <div className=" relative w-full">
        <input type ='text' placeholder='Send a Message' className=' border text-sm rounded-lg w-full p-2.5 bg-gray-700 border-gray-600 text-white' />
        <button type ='submit' className="absolute insert-y-0 end-0 flex items-center pe-3" >
          <BsSend className="w-6 h-6" />
        </button>
      </div>
    </form>
  )
}

export default MessageInput