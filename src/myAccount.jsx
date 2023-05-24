import React from 'react';
import Footer from './components/Footer';
import { FaUserCircle } from 'react-icons/fa';
import { AiOutlinePauseCircle } from 'react-icons/ai';
import { FiPackage } from 'react-icons/fi';
import { TbPackage } from 'react-icons/tb';
import { GoPackage } from 'react-icons/go';
import { FcSalesPerformance } from 'react-icons/fc';
import { GrCompliance } from 'react-icons/gr';
import { BsBank } from 'react-icons/bs';
import { BsBullseye } from 'react-icons/bs';



const myAccount = () => {
    return (
        <>
            <div className="w-full h-full ">
                <div className=" text-white py-4 pr-64"></div>
                <h1 className="  flex text-xl mr-52 mt-5 justify-center items-center">My Account</h1>
            </div>
            <div className="fixed flex justify-center items-center h-full w-full px-6 lg:px-32 overflow-y-auto">
                <div className="w-full grid grid-cols-1 sm:grid-cols-3 sm:gap-1 h-[75%] lg:w-[60%]  px-2" >
                    <div className=" bg-white p-4 rounded-lg border border-rounded border-gray-300 shadow-md " style={{ height: '90%' }}>
                        <div className='flex items-end'>
                            <FaUserCircle className='my-2 mx-2' />
                            <h2 className='lg:text-2xl'>Active users</h2>

                        </div>
                        <div className='lg:mt-7 text-green-600 ml-2'>
                            2000
                        </div>
                    </div>
                    <div className="relative bg-white p-4 rounded-lg border border-rounded border-gray-300 shadow-md" style={{ height: '90%' }}>
                        <div className='flex items-center'>
                            <AiOutlinePauseCircle className='my-2 mx-2' />
                            <h2 className='lg:text-2xl'>Users on hold</h2>

                        </div>
                        <div className='lg:mt-7 text-green-600 ml-2'>
                            2000
                        </div>
                    </div>
                    <div className="relative bg-white p-4 rounded-lg border border-rounded border-gray-300 shadow-md " style={{ height: '90%' }}>
                        <div className='flex items-center'>
                            <FiPackage className='my-2 mx-2' />
                            <h2 className='lg:text-2xl'>Total packages</h2>
                        </div>
                        <div className='flex lg:mt-7 text-green-600 ml-2 '>
                            <span>2000</span>
                        </div>
                    </div>

                    <div className="relative bg-white p-4 rounded-lg border border-rounded border-gray-300 shadow-md " style={{ height: '90%' }}>
                        <div className='flex items-center'>
                            <TbPackage className='my-2 mx-2' />
                            <h2 className='lg:text-2xl'>Users on 10/10</h2>
                        </div>
                        <div className='lg:mt-7 text-green-600 ml-2'>
                            2000
                        </div>
                    </div>
                    <div className="relative bg-white p-4 rounded-lg border border-rounded border-gray-300 shadow-md " style={{ height: '90%' }}>
                        <div className='flex items-center'>
                            <GoPackage className='my-2 mx-2' />
                            <h2 className='lg:text-2xl'>Users on 20/20</h2>
                        </div>
                        <div className='lg:mt-7 text-green-600 ml-2'>
                            2000
                        </div>

                    </div>
                    <div className="relative bg-white p-4 rounded-lg border border-rounded border-gray-300 shadow-md " style={{ height: '90%' }}>
                        <div className='flex items-center'>
                            <FcSalesPerformance className='my-2 mx-2' />
                            <h2 className='lg:text-2xl'>Total sales</h2>

                        </div>
                        <div className='lg:mt-7 text-green-600 ml-2'>
                            2000
                        </div>
                    </div>
                    <div className="relative bg-white p-4 rounded-lg border border-rounded border-gray-300 shadow-md " style={{ height: '90%' }}>
                        <div className='flex items-center'>
                            <GrCompliance className='my-2 mx-2' />
                            <h2 className='lg:text-2xl'>Total</h2>

                        </div>
                        <div className='lg:mt-7 text-green-600 ml-2'>
                            2000
                        </div>
                    </div>
                    <div className="relative bg-white p-4 rounded-lg border border-rounded border-gray-300 shadow-md" style={{ height: '90%' }}>
                        <div className='flex items-center'>
                            <BsBank className='my-2 mx-2' />
                            <h2 className='lg:text-2xl'>Active users</h2>

                        </div>
                        <div className='lg:mt-7 text-green-600 ml-2'>
                            2000
                        </div>
                    </div>
                    <div className="relative bg-white p-4 rounded-lg border border-rounded border-gray-300 shadow-md " style={{ height: '90%' }}>
                        <div className='flex items-center'>
                            <BsBullseye className='my-2 mx-2' />
                            <h2 className='lg:text-2xl'>Active users</h2>

                        </div>
                        <div className='lg:mt-7 text-green-600 ml-2'>
                            2000
                        </div>
                    </div>
                </div>
                <Footer />
            </div>
        </>

    )
}

export default myAccount;
