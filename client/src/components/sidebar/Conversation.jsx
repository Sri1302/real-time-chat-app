import React from 'react'

const Conversation = () => {
  return (
    <>
    <div className='flex gap-2 items-center p-2 py-1 hover:bg-sky-400 rounded-lg cursor-pointer '>
      <div className='online-avatar'>
        <div className='w-12 rounded-full'>
          <img
							src='https://cdn0.iconfinder.com/data/icons/communication-line-10/24/account_profile_user_contact_person_avatar_placeholder-512.png'
							alt='user avatar'
						/></div>
      </div>
      <div className='flex flex-col flex-1 '>
        <div className='flex gap-4 justify-center'>
          <p>Sri Venkat</p>
          <span>😎</span>
        </div>
      </div>

    </div>

    <div className='divider my-0 py-0  h-1 '></div>
    </>
  )
}

export default Conversation