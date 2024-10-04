import GenderCheckBox from './GenderCheckBox'

import React from 'react'

const Signup = () => {
  return (
    <div className='flex flex-col items-center justify-center min-w-96 mx-auto'>

      <div className='w-full  p-6 rounded-lg shadow-md bg-gray-400  bg-clip-padding backdrop-filter backdrop-blur-md bg-opacity-10'>
        <h1 className='py-1 text-3xl font-semibold text-center text-gray-300'>SignUp <span className='text-yellow-400'> Chat-App</span></h1>

        <form>
          <div>
            <label className='label p-2'> <span className='text-base label-text'>Full Name</span></label>
            <input type ='text' placeholder='Sri Venkat' className='w-full input input-bordered h-10'/>
          </div>
          <div>
            <label className='label p-2'> <span className='text-base label-text'>Username</span></label>
            <input type ='text' placeholder='srivenkat' className='w-full input input-bordered h-10'/>
          </div>

          <div>
            <label className='label p-2'> <span className='text-base label-text'>Password</span></label>
            <input type ='password' placeholder='Enter Password' className='w-full input input-bordered h-10'/>
          </div>

          <div>
            <label className='label p-2'> <span className='text-base label-text'>Confirm Password</span></label>
            <input type ='text' placeholder='Confirm Password' className='w-full input input-bordered h-10'/>
          </div>
          
          <GenderCheckBox/>

          <a className='text-sm hover:underline hover:text-blue-500 mt-2 inline-block'>Already have an account?</a>
          <div>
            <button className='btn btn-block btn-sm   mt-2 border border-slate-800'>Sign Up</button>
          </div>

        </form>
      </div>
      
    </div>
  )
}

export default Signup