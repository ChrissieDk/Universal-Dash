import React from 'react';
import { data } from './users';
import Footer from './components/Footer';

const Status = ({ status }) => {
    let className;
    switch (status) {
        case 'Active':
            className = 'p-1.5 text-xs font-medium uppercase tracking-wider text-green-800 bg-green-200 rounded-lg bg-opacity-40 w-full text-center lg:w-24';
            break;
        case 'On Hold':
            className = 'p-1.5 text-xs font-medium uppercase tracking-wider text-yellow-800 bg-yellow-200 rounded-lg bg-opacity-40 w-full text-center lg:w-24';
            break;
        case 'Cancelled':
            className = 'p-1.5 text-xs font-medium uppercase tracking-wider text-red-800 bg-red-200 rounded-lg bg-opacity-40 w-full text-center lg:w-24';
            break;
        default:
            break;
    }

    return <div className={className}>{status}</div>;
};


const UserIdClick = () => {

    return (
        <>
            <div className="w-full h-full fixed pt-11 ">
                <div className="text-lg flex flex-col justify-center items-center">{`${data[0].first_name} ${data[0].last_name}`}</div>
            </div>
            <div className="fixed flex justify-center items-center h-full w-full px-6 lg:px-32">

                <div className="grid grid-cols-1 sm:grid-cols-3 gap-2 sm:gap-4 h-[75%] w-[80%] overflow-y-scroll" style={{ 'overflowY': 'scroll' }}>
                    <div className="relative bg-white p-4 rounded-lg border border-rounded border-gray-300 shadow-md">
                        <div>
                            <h1 className='mb-5 md:hidden'>Contract status</h1>
                            <div className='lg:mt-7'>
                                <span> <Status status={data[0].status} /></span>
                            </div>
                        </div>
                        <div className="absolute bottom-0 left-0 w-full h-[30%] bg-slate-600 rounded-b-lg hidden sm:block">
                            <h1 className='text-white pt-2.5 pl-2 text-md font-medium tracking-wider'>Contract status</h1>
                        </div>
                    </div>
                    <div className="relative bg-white p-4 rounded-lg border border-rounded border-gray-300">
                        <div>
                            <h1 className='mb-5 md:hidden'>Cellphone number</h1>
                            <div className="lg:mt-7">
                                <span> {data[0].cell_number}</span>
                            </div>
                        </div>
                        <div className="absolute bottom-0 left-0 w-full h-[30%] bg-slate-600 rounded-b-lg hidden sm:block">
                            <h1 className='text-white pt-2.5 pl-2 text-md font-medium tracking-wider'>Cellphone number</h1>
                        </div>
                    </div>
                    <div className="relative bg-white p-4 rounded-lg border border-rounded border-gray-300">
                        <div>
                            <h1 className='mb-5 md:hidden'>Current package</h1>
                            <div className="lg:mt-7">
                                <span> {data[0].package}</span>
                            </div>
                        </div>
                        <div className="absolute bottom-0 left-0 w-full h-[30%] bg-slate-600 rounded-b-lg hidden sm:block">
                            <h1 className='text-white pt-2.5 pl-2 text-md font-medium tracking-wider'>Current package</h1>
                        </div>                    </div>
                    <div className="relative bg-white p-4 rounded-lg border border-rounded border-gray-300">
                        <div>
                            <h1 className='mb-5 md:hidden'>Sim number</h1>
                            <div className="lg:mt-7">
                                <span>{data[0].sim_number}</span>
                            </div>
                        </div>
                        <div className="absolute bottom-0 left-0 w-full h-[30%] bg-slate-600 rounded-b-lg hidden sm:block">
                            <h1 className='text-white pt-2.5 pl-2 text-md font-medium tracking-wider'>Sim number</h1>
                        </div>
                    </div>
                    <div className="relative bg-white p-4 rounded-lg border border-rounded border-gray-300">
                        <div>
                            <h1 className='mb-5 md:hidden'>Package term (months) </h1>
                            <div className="lg:mt-7">
                                <span>{data[0].package_term} months</span>
                            </div>
                        </div>
                        <div className="absolute bottom-0 left-0 w-full h-[30%] bg-slate-600 rounded-b-lg hidden sm:block">
                            <h1 className='text-white pt-2.5 pl-2 text-md font-medium tracking-wider'>Package term</h1>
                        </div>
                    </div>
                    <div className="relative bg-white p-4 rounded-lg border border-rounded border-gray-300">
                        <div>
                            <h1 className='mb-5 md:hidden'>Activation date</h1>
                            <div className="lg:mt-7">
                                <span>{data[0].date}</span>
                            </div>
                        </div>
                        <div className="absolute bottom-0 left-0 w-full h-[30%] bg-slate-600 rounded-b-lg hidden sm:block">
                            <h1 className='text-white pt-2.5 pl-2 text-md font-medium tracking-wider'>Activation date</h1>
                        </div>
                    </div>
                    <div className="relative bg-white p-4 rounded-lg border border-rounded border-gray-300">
                        <div>
                            <h1 className='mb-5 md:hidden'>Contract end</h1>
                            <div className="lg:mt-7">
                                <span>{data[0].contract_end}</span>
                            </div>
                        </div>
                        <div className="absolute bottom-0 left-0 w-full h-[30%] bg-slate-600 rounded-b-lg hidden sm:block">
                            <h1 className='text-white pt-2.5 pl-2 text-md font-medium tracking-wider'>Contract end</h1>
                        </div>
                    </div>
                    <div className="relative bg-white p-4 rounded-lg border border-rounded border-gray-300">
                        <div>
                            <h1 className='mb-5 md:hidden'>Billing status</h1>
                            <div className="lg:mt-7">
                                <span><Status status={data[0].billing_status} /></span>
                            </div>
                        </div>
                        <div className="absolute bottom-0 left-0 w-full h-[30%] bg-slate-600 rounded-b-lg hidden sm:block">
                            <h1 className='text-white pt-2.5 pl-2 text-md font-medium tracking-wider'>Billing status</h1>
                        </div>
                    </div>
                    <div className="relative bg-white p-4 rounded-lg border border-rounded border-gray-300">
                        <div>
                            <h1 className='mb-5 md:hidden'>Billing date</h1>
                            <div className="lg:mt-7">
                                <span>{data[0].billing_date}</span>
                            </div>
                        </div>
                        <div className="absolute bottom-0 left-0 w-full h-[30%] bg-slate-600 rounded-b-lg hidden sm:block">
                            <h1 className='text-white pt-2.5 pl-2 text-md font-medium tracking-wider'>Billing date</h1>
                        </div>
                    </div>
                    <div className="relative bg-white p-4 rounded-lg border border-rounded border-gray-300">
                        <div>
                            <h1 className='mb-5 md:hidden'>Billing date</h1>
                            <div className="lg:mt-7">
                                <span>{data[0].billing_date}</span>
                            </div>
                        </div>
                        <div className="absolute bottom-0 left-0 w-full h-[30%] bg-slate-600 rounded-b-lg hidden sm:block">
                            <h1 className='text-white pt-2.5 pl-2 text-md font-medium tracking-wider'>Contract </h1>
                        </div>
                    </div>
                    <div className="relative bg-white p-4 rounded-lg border border-rounded border-gray-300">
                        <div>
                            <h1 className='mb-5 md:hidden'>Billing date</h1>
                            <div className="lg:mt-7">
                                <span>{data[0].billing_date}</span>
                            </div>
                        </div>
                        <div className="absolute bottom-0 left-0 w-full h-[30%] bg-slate-600 rounded-b-lg hidden sm:block">
                            <h1 className='text-white pt-2.5 pl-2 text-md font-medium tracking-wider'>Contract status</h1>
                        </div>
                    </div>
                    <div className="relative bg-white p-4 rounded-lg border border-rounded border-gray-300">
                        <div>
                            <h1 className='mb-5 md:hidden'>Billing date</h1>
                            <div className="lg:mt-7">
                                <span>{data[0].billing_date}</span>
                            </div>
                        </div>
                        <div className="absolute bottom-0 left-0 w-full h-[30%] bg-slate-600 rounded-b-lg hidden sm:block">
                            <h1 className='text-white pt-2.5 pl-2 text-md font-medium tracking-wider'>Contract status</h1>
                        </div>
                    </div>

                </div>
                <Footer />
            </div>
        </>

    );
}

export default UserIdClick;