import React from 'react';
import { useState } from 'react';
import { Link } from 'react-router-dom';
import { FcGoogle } from 'react-icons/fc';
import { BsLinkedin } from 'react-icons/bs';
import { BsFacebook } from 'react-icons/bs';
import { BiHide, BiShow } from 'react-icons/bi';

const Login = () => {
  const [showPassword, setShowPassword] = useState(false);

  return (
    <div className='w-full  flex justify-center '>
      <div className='bg-slate-100 flex flex-col items-center justify-center text-center min-h-[60%] min-w-[35%] rounded-2xl border border-slate-300 lg:min-w-[20%]'>
        <div className="space-y-3 my-5">
          <h1 className='mb-6 text-3xl font-extrabold m-3'>Sign in</h1>
          <p>
            or
            <a className='text-blue-600 pl-1 hover:underline' href="/register">Register</a>
          </p>
        </div>
        <div className="max-w-md w-full mx-auto rounded-lg p-7 space-y-3">
          <div className="flex flex-col">
            <label className='mb-1 text-sm' htmlFor="email">Email Address</label>
            <input className='border border-rounded-2xl px-3 py-2 cursor-pointer text-center' for="text" name='email' id='email' placeholder='Enter your email address' />
          </div>
          <div className="flex flex-col relative">
            <label className='mb-1 text-sm ' htmlFor="email">Password</label>
            <div className='flex'>
              <input
                className='border border-rounded-md px-2 py-2 cursor-pointer text-center flex-grow w-full'
                type={showPassword ? 'text' : 'password'}
                name='password'
                id='password'
                placeholder='Password'
              />
              {showPassword ? (
                <BiHide
                  className='h-full flex items-center'
                  size={20}
                  onClick={() => setShowPassword(false)}
                />
              ) : (
                <BiShow
                  className='h-full flex items-center'
                  size={20}
                  onClick={() => setShowPassword(true)}
                />
              )}
              
            </div>
            
          </div>
          

          <div>

            <Link to='/dashboard'><button className='w-full rounded bg-slate-500 text-white py-2 hover:bg-blue-600'>Sign in</button></Link>
          </div>
          <div className="flex justify-between">
            <div className="flex items-center space-x-2">
              <input type="checkbox" name='remember me' id='rememberMe' />
              <label className='text-sm' htmlFor="rememberme">Remember me</label>
            </div>
            <Link to='/forgotPassword'><div className="text-slate-600 hover:underline cursor-pointer hover:text-blue-600" href="/forgotPassword">Forgot password</div></Link>
          </div>
        </div>
        <div className="relative pb-2 pt-2">
          <div className=" -top-3 left-0 w-full text-center">
            <span className='px-3 text-gray-600'>or continue via</span>
          </div>
        </div>
        <div className="flex justify-center space-x-3 pb-6 text-2xl">
          <div className="rounded-md cursor-pointer text-center">
            <FcGoogle />
          </div>
          <div className="rounded-md cursor-pointer text-center">
            <BsLinkedin />
          </div>
          <div className="rounded-md cursor-pointer text-center">
            <BsFacebook />
          </div>
        </div>
      </div>
    </div>
  )
}

export default Login;
