import React from 'react';
import { Link } from 'react-router-dom';


const Register = () => {

  return (
    <div className='w-full  flex justify-center '>
    <div className='bg-slate-100 flex flex-col items-center justify-center text-center min-h-[60%] min-w-[35%] rounded-2xl border border-slate-300 lg:min-w-[20%]'>
        <div className="space-y-3 my-5">
            <h1 className='mb-6 text-3xl font-extrabold m-3'>Register account</h1>
    
        </div>
      <div className="max-w-md w-full mx-auto rounded-lg p-7 space-y-3">
        <div className="flex flex-col">
            <label className='mb-1 text-sm' htmlFor="email">Email Address</label>
            <input className='border border-rounded-2xl px-3 py-2 cursor-pointer' for="text" name='email' id='email' placeholder='Enter your email address'/>
        </div>
        <div className="flex flex-col">
            <label className='mb-1 tex-sm ' htmlFor="email">Password</label>
            <input className='border border-rounded-md px-2 py-2 cursor-pointer' type="password" name='password' id='password' placeholder='Password'/>
        </div>
        <div className="flex flex-col">
            <label className='mb-1 tex-sm ' htmlFor="email">Confirm password</label>
            <input className='border border-rounded-md px-2 py-2 cursor-pointer' type="password" name='password' id='password' placeholder='Confirm password'/>
        </div>
        <div>
            <Link to='/'><button className='w-full rounded bg-indigo-600 text-white py-2'>Register</button></Link>
        </div>
        <div className="flex justify-between">
            <div className="flex items-center space-x-2">
                <input type="checkbox" name='remember me' id='rememberMe'/>
                <label className='text-sm' htmlFor="rememberme">Remember me</label>
            </div>
            <div className="text-indigo-600 hover:underline cursor-pointer" href="/">Forgot password</div>
        </div>
      </div>
      <div className="relative pb-6">
        <div className=" -top-3 left-0 w-full text-center">
            <span className='px-3 text-gray-600'>or continue via</span>
        </div>
      </div>
      <div className="grid grid-cols-3 gap-3">
        <div className="border-2 rounded-md cursor-pointer text-center">
               
        </div>
      </div>
    </div>
    </div>
  )
}

export default Register;
