import React from 'react';
import { data } from './users';

const Status = ({ status }) => {
    let className;
    if (status === 'Active') {
        className = 'p-1.5 text-xs font-medium uppercase tracking-wider text-green-800 bg-green-200 rounded-lg bg-opacity-40 w-full text-center lg:w-24';
    } else if (status === 'On Hold') {
        className = 'p-1.5 text-xs font-medium uppercase tracking-wider text-yellow-800 bg-yellow-200 rounded-lg bg-opacity-40 w-full text-center lg:w-24';
    } else if (status === 'Cancelled') {
        className = 'p-1.5 text-xs font-medium uppercase tracking-wider text-red-800 bg-red-200 rounded-lg bg-opacity-40 w-full text-center lg:w-24';
    }

    return <div className={className}>{status}</div>;
};


const UserIdClick = () => {

    return (
        <>
            <div className="w-full h-full fixed pt-11 ">
                <div className="text-lg flex flex-col justify-center items-center">{`${data[0].first_name} ${data[0].last_name}`}</div>
            </div>
            <div className="fixed flex justify-center items-center h-full w-[90%] ml-20">

                <div className="grid grid-cols-1 sm:grid-cols-3 gap-2 sm:gap-4 h-[75%] w-[80%] overflow-y-scroll" style={{ 'overflowY': 'scroll' }}>
                    <div className="relative bg-white p-4 rounded-lg border border-rounded border-gray-300">
                        <div>
                            <h1 className='mb-5'>Contract status</h1>
                            <span> <Status status={data[0].status} /></span>
                        </div>
                        <div className="absolute bottom-0 left-0 w-full h-1/5 bg-gray-300 rounded-b-lg hidden sm:block"></div>
                    </div>
                    <div className="relative bg-white p-4 rounded-lg border border-rounded border-gray-300">
                        <div>
                            <h1 className='mb-5'>Cellphone number</h1>
                            <span> {data[0].cell_number}</span>
                        </div>
                        <div className="absolute bottom-0 left-0 w-full h-1/5 bg-gray-300 rounded-b-lg hidden sm:block"></div>
                    </div>
                    <div className="relative bg-white p-4 rounded-lg border border-rounded border-gray-300">
                        <div>
                            <h1 className='mb-5'>Current package</h1>
                            <span> {data[0].package}</span>
                        </div>
                        <div className="absolute bottom-0 left-0 w-full h-1/5 bg-gray-300 rounded-b-lg hidden sm:block"></div>
                    </div>
                    <div className="relative bg-white p-4 rounded-lg border border-rounded border-gray-300">
                        <div>
                            <h1 className='mb-5'>Sim number</h1>
                            <span>{data[0].sim_number}</span>
                        </div>
                        <div className="absolute bottom-0 left-0 w-full h-1/5 bg-gray-300 rounded-b-lg hidden sm:block"></div>
                    </div>
                    <div className="relative bg-white p-4 rounded-lg border border-rounded border-gray-300">
                        <div>
                            <h1 className='mb-5'>Package term (months) </h1>
                            <span>{data[0].package_term}</span>
                        </div>
                        <div className="absolute bottom-0 left-0 w-full h-1/5 bg-gray-300 rounded-b-lg hidden sm:block"></div>
                    </div>
                    <div className="relative bg-white p-4 rounded-lg border border-rounded border-gray-300">
                        <div>
                            <h1 className='mb-5'>Activation date</h1>
                            <span>{data[0].date}</span>
                        </div>
                        <div className="absolute bottom-0 left-0 w-full h-1/5 bg-gray-300 rounded-b-lg hidden sm:block"></div>
                    </div>
                    <div className="relative bg-white p-4 rounded-lg border border-rounded border-gray-300">
                        <div>
                            <h1 className='mb-5'>Contract end</h1>
                            <span>{data[0].contract_end}</span>
                        </div>
                        <div className="absolute bottom-0 left-0 w-full h-1/5 bg-gray-300 rounded-b-lg hidden sm:block"></div>
                    </div>
                    <div className="relative bg-white p-4 rounded-lg border border-rounded border-gray-300">
                        <div>
                            <h1 className='mb-5'>Billing status</h1>
                            <span><Status status={data[0].billing_status} /></span>
                        </div>
                        <div className="absolute bottom-0 left-0 w-full h-1/5 bg-gray-300 rounded-b-lg hidden sm:block"></div>
                    </div>
                    <div className="relative bg-white p-4 rounded-lg border border-rounded border-gray-300">
                        <div>
                            <h1 className='mb-5'>Billing date</h1>
                            <span>{data[0].billing_date}</span>
                        </div>
                        <div className="absolute bottom-0 left-0 w-full h-1/5 bg-gray-300 rounded-b-lg hidden sm:block"></div>
                    </div>
                    
                </div>
            </div>
        </>

    );
}

export default UserIdClick;