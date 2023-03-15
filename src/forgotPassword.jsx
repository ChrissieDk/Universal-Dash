import React from 'react'
import { Link } from 'react-router-dom';

const forgotPassword = () => {
  return (
    <div className='w-full flex justify-center '>
    <div className='bg-slate-100 flex flex-col items-center justify-center text-center min-h-[60%] min-w-[35%] rounded-2xl border border-slate-300 lg:min-w-[20%]'>
        <div className="space-y-1 my-3">
            <h1 className=' mt-5 text-2xl font-extrabold m-3'>Forgot password</h1>
    
        </div>
      <div className="max-w-md w-full mx-auto rounded-lg p-7 space-y-3">
        <div className="flex flex-col">
            <label className=' text-md mb-2' htmlFor="email">Email Address</label>
            <input className='border border-rounded-2xl px-3 py-2 cursor-pointer mb-2 text-center' for="text" name='email' id='email' placeholder='Enter your email address'/>
        </div>
        {/* <div className="flex flex-col">
            <label className='mb-1 tex-sm ' htmlFor="email">Password</label>
            <input className='border border-rounded-md px-2 py-2 cursor-pointer' type="password" name='password' id='password' placeholder='Password'/>
        </div>
        <div className="flex flex-col">
            <label className='mb-1 tex-sm ' htmlFor="email">Confirm password</label>
            <input className='border border-rounded-md px-2 py-2 cursor-pointer' type="password" name='password' id='password' placeholder='Confirm password'/>
        </div> */}
        <div>
            <button className='w-full rounded bg-slate-500 text-white py-2 hover:bg-blue-600'>Sumbit recovery email</button>
        </div>
        {/* <div>
            <div className="space-x-2">
                <input type="checkbox" name='remember me' id='rememberMe'/>
                <label className='text-sm' htmlFor="rememberme">Remember me</label>
            </div>
            <div className="text-indigo-600 hover:underline cursor-pointer" href="/">Forgot password</div>
        </div> */}
      </div>
    </div>
    </div>
  )
}

export default forgotPassword;
