import { useEffect, useRef } from 'react';
import useGetMessages from '../../hooks/useGetMessages.jsx';
import Message from './Message';
import MessageSkeleton from '../skeletons/MessageSkeleton.jsx';

const Messages = () => {
  const { messages, loading } = useGetMessages();
  const lastMessageRef = useRef();

  useEffect(() => {
    setTimeout(() => {
      lastMessageRef.current?.scrollIntoView({ behavior: 'smooth' });
    }, 100);
  }, [messages]);

  return (
    <div className='px-4 overflow-auto flex-1'>
      {!loading &&
        messages.length > 0 &&
        messages.map((message, index) => {
          const isLastMessage = index === messages.length - 1;
          return (
            <div
              key={message._id}
              ref={isLastMessage ? lastMessageRef : null} // Apply ref only to the last message
            >
              <Message message={message} />
            </div>
          );
        })}

      {loading && [...Array(3)].map((_, idx) => <MessageSkeleton key={idx} />)}

      {!loading && messages.length === 0 && (
        <p className='text-center'>Send a Message to start the conversation</p>
      )}
    </div>
  );
};

export default Messages;
