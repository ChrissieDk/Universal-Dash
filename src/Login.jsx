import React from 'react';
import { useState } from 'react';
import { Link } from 'react-router-dom';
import { FcGoogle } from 'react-icons/fc';
import { BsLinkedin } from 'react-icons/bs';
import { BsFacebook } from 'react-icons/bs';
import { BiHide, BiShow } from 'react-icons/bi';
import SClogo from './assets/SClogo.png';


const Login = () => {
  /* Show hide password logic */

  const [showPassword, setShowPassword] = useState(false);

  /* login structure and styling  */
  return (
    <div className='w-full  flex justify-center '>
      <div className='bg-slate-100 flex flex-col items-center justify-center text-center min-h-[60%] min-w-[35%] rounded-2xl border border-slate-300 lg:min-w-[20%]'>
        <img className="h-12 w-12 mt-10 pb-0" src={SClogo} alt="sc logo" />
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
            <input className='border border-rounded-2xl px-3 py-2 cursor-pointer text-center' for="text" name='email' id='email' placeholder='Enter your email address' required/>
          </div>
          {/* password show hide UI and styling */}
          <div className="flex flex-col relative w-full">
            <label className='mb-1 text-sm ' htmlFor="email">Password</label>
            <div className='flex relative'>
              <input
                className='border border-rounded-md px-2 py-2 cursor-pointer text-center flex-grow w-full'
                type={showPassword ? 'text' : 'password'}
                name='password'
                id='password'
                placeholder='Password'
              />
              <div className="absolute top-0 bottom-0 flex items-center pointer-events-none z-10 w-full justify-end pr-4">
                {showPassword ? (
                  <BiShow
                    size={20}
                    onClick={() => setShowPassword(false)}
                    className="pointer-events-auto right-0"
                  />
                ) : (
                  <BiHide
                    size={20}
                    onClick={() => setShowPassword(true)}
                    className="pointer-events-auto right-0"
                  />
                )}
              </div>
            </div>
          </div>

          {/* Buttons and links */}

          <div>
            <Link to='/dashboard'><button className='w-full rounded bg-slate-500 text-white py-2 hover:bg-blue-600'>Sign in</button></Link>
          </div>
          <div className="flex justify-between">
            <div className="flex items-center space-x-1">
              <input type="checkbox" name='remember me' id='rememberMe' />
              <label className='text-sm' htmlFor="rememberme">Remember me</label>
            </div>
            <Link to='/forgotPassword'><div className="text-slate-600 hover:underline cursor-pointer hover:text-blue-600" href="/forgotPassword">Forgot password</div></Link>
          </div>
        </div>

        {/* Alternate login links and icons */}

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
