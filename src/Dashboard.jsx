import React from 'react'
import { Fragment } from 'react';
import { useState } from 'react';
import { data } from './users'
import { FaArrowUp, FaArrowDown } from 'react-icons/fa';

const Dashboard = () => {

  const [users, setUsers] = useState(data.slice(0, 12));
  const [sorted, setSorted] = useState({sorted: "id", reversed:"false"})

  const sortById = () => {

    setSorted({sorted: "id", reversed: !sorted.reversed});
    const usersCopy = [...users];

    usersCopy.sort((userA, userB) => {
      if(sorted.reversed){
        return userA.id - userB.id;
      };
      return userB.id - userA.id;
    });
    setUsers(usersCopy);
  };

  const sortByName = () => {
    setSorted({sorted: "name", reversed: !sorted.reversed});
    const usersCopy = [...users];
    usersCopy.sort((userA, userB) => {
      const fullNameA = `${userA.first_name} ${userB.last_name}`;
      const fullNameB = `${userB.first_name} ${userA.last_name}`;

      if(sorted.reversed) {
        return fullNameB.localeCompare(fullNameA);
      };

      return fullNameA.localeCompare(fullNameB);
    });
    setUsers(usersCopy);
  };

  
  const renderUsers = () => {
    return (
      <Fragment>
        {users.map((user) => {
          return (
            <tr className='bg-white' key={user.id}>
              <td className='font-bold text-blue-500 hover:underline pl-7 cursor-pointer'>{user.id}</td>
              <td className=' min-w-100 p-3 text-sm text-gray-700 whitespace-nowrap'>{`${user.first_name} ${user.last_name}`}</td>
              <td className=' min-w-100 p-3 text-sm text-gray-700 whitespace-nowrap'>{user.email}</td>
              <td className=' min-w-100 p-3 text-sm text-gray-700 whitespace-nowrap'>{user.gender}</td>
            </tr>
          );
        })};
      </Fragment>
    );
  };

  const renderArrow = () => {
    if(sorted.reversed) {
      return <FaArrowUp className='inline-block pl-2 rounded text-lg'/>;
    }
    return <FaArrowDown className='inline-block pl-2 rounded text-lg'/>;
  };


  return (
    <div className='w-full pr-[5rem] pl-[10.5rem] fixed justify-center items-center'>
      <h1 className='text-xl mb-10 '>Dashboard</h1>
      <div className="flex flex-column justify-center text-center gap-4 pb-10">
        <div className="w-1/3 p-3 border border-slate-200 rounded-lg py-11 bg-slate-50">
          <h1>Total Sales</h1>
          <span className='text-lime-600'>3421</span>
        </div>
        <div className="w-1/3 p-3 border border-slate-200 rounded-lg py-11 bg-slate-50">
          <h1>Active users</h1>
          <span className='text-lime-600'>3421</span>
        </div>
        <div className="w-1/3 p-3 border border-slate-200 rounded-lg py-11 bg-slate-50">
          <h1>Example</h1>
          <span className='text-lime-600'>3421</span>
        </div>
      </div>
      <div className='w-full border border-slate-100 rounded-lg'>
        <div className='overflow-auto rounded-lg shadow'>
          <table className='w-full pt-10'>
            <thead className='bg-slate-50 border-b-2 border-slate-200'>
              <tr>
                <th onClick={sortById} className='p-3 text-sm font-semibold tracking-wide text-left'>ID
                {sorted.sorted === "id" ? renderArrow() : null}
                </th>
                <th onClick={sortByName} className='p-3 text-sm font-semibold tracking-wide text-left'>Name
                {sorted.sorted === "name" ? renderArrow() : null}

                </th>
                <th className='p-3 text-sm font-semibold tracking-wide text-left'>Status</th>
                <th className='p-3 text-sm font-semibold tracking-wide text-left'>Date</th>
                <th className='p-3 text-sm font-semibold tracking-wide text-left'>Package</th>
              </tr>
            </thead>

            <tbody className='divide-y divide-gray-200' >
              {renderUsers()};
            </tbody>



          </table>
        </div>
      </div>
      <div>
        <button className=' justify-center text-center items-center w-full rounded-lg border border-slate-100'>press me</button>
      </div>
    </div>
  )
}







export default Dashboard;
