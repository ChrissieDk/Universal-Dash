import React from 'react'

const dashboard = () => {
    return (
      <div className='w-full pr-[5rem] pl-[10.5rem] fixed justify-center items-center'>
        <h1 className='text-xl mb-10 '>Dashboard</h1>
      <div class="flex flex-column justify-center text-center gap-4 pb-10">
        <div class="w-1/3 p-3 border border-slate-200 rounded-lg py-11 bg-slate-50">
          <h1>Total Sales</h1>
          <span className='text-lime-600'>3421</span>
        </div>
        <div class="w-1/3 p-3 border border-slate-200 rounded-lg py-11 bg-slate-50">
          <h1>Active users</h1>
          <span className='text-lime-600'>3421</span>
        </div>
        <div class="w-1/3 p-3 border border-slate-200 rounded-lg py-11 bg-slate-50">
          <h1>Example</h1>
          <span className='text-lime-600'>3421</span>
        </div>
      </div>
       <div className='w-full border border-slate-100 rounded-lg'>
      <div className='overflow-auto rounded-lg shadow'>
        <table className='w-full pt-10'>
        <thead className='bg-slate-50 border-b-2 border-slate-200'>  
        <tr>
          <th className='p-3 text-sm font-semibold tracking-wide text-left'>Name</th>
          <th className='p-3 text-sm font-semibold tracking-wide text-left'>Sim Number</th>
          <th className='p-3 text-sm font-semibold tracking-wide text-left'>Status</th>
          <th className='p-3 text-sm font-semibold tracking-wide text-left'>Date</th>
          <th className='p-3 text-sm font-semibold tracking-wide text-left'>Package</th>
        </tr>
        </thead>
        
        
        <tbody className='divide-y divide-gray-200'>
          <tr className='bg-white'>
            <td className='p-3 text-sm text-gray-700 whitespace-nowrap'>
              <a href="/" className='font-bold text-blue-500 hover:underline'>10001</a>
            </td>
            <td className='p-3 text-sm text-gray-700 whitespace-nowrap'>
              Christiaan de Kock
            </td>
            <td className='p-3 text-sm text-gray-700 whitespace-nowrap'>
              <span className='p-1.5 text-xs font-medium uppercase tracking-wider text-yellow-800 bg-yellow-200 rounded-lg bg-opacity-40'>On Hold</span>
            </td>
            <td className='p-3 text-sm text-gray-700 whitespace-nowrap'>16/10/2021</td>
            <td className='p-3 text-sm text-gray-700 whitespace-nowrap'>10/10</td>
          </tr>

          <tr className='bg-slate-100'>
            <td className='p-3 text-sm text-gray-700 whitespace-nowrap'>
              <a href="/" className='font-bold text-blue-500 hover:underline'>10002</a>
            </td>
            <td className='p-3 text-sm text-gray-700 whitespace-nowrap'>
              Christiaan de Kock
            </td>
            <td className='p-3 text-sm text-gray-700 whitespace-nowrap'>
              <span className='p-1.5 text-xs font-medium uppercase tracking-wider text-red-800 bg-red-200 rounded-lg bg-opacity-40'>Cancelled</span>
            </td>
            <td className='p-3 text-sm text-gray-700 whitespace-nowrap'>12/01/2021</td>
            <td className='p-3 text-sm text-gray-700 whitespace-nowrap'>20/20</td>
          </tr>

          <tr className='bg-white'>
            <td className='p-3 text-sm text-gray-700 whitespace-nowrap'>
              <a href="/" className='font-bold text-blue-500 hover:underline'>10003</a>
            </td>
            <td className='p-3 text-sm text-gray-700 whitespace-nowrap'>
              Christiaan de Kock
            </td>
            <td className='p-3 text-sm text-gray-700 whitespace-nowrap'>
              <span className='p-1.5 text-xs font-medium uppercase tracking-wider text-green-800 bg-green-200 rounded-lg bg-opacity-40'>Active</span>
            </td>
            <td className='p-3 text-sm text-gray-700 whitespace-nowrap'>13/01/2022</td>
            <td className='p-3 text-sm text-gray-700 whitespace-nowrap'>20/20</td>
          </tr>

          <tr className='bg-slate-100'>
            <td className='p-3 text-sm text-gray-700 whitespace-nowrap'>
              <a href="/" className='font-bold text-blue-500 hover:underline'>10004</a>
            </td>
            <td className='p-3 text-sm text-gray-700 whitespace-nowrap'>
              Christiaan de Kock
            </td>
            <td className='p-3 text-sm text-gray-700 whitespace-nowrap'>
              <span className='p-1.5 text-xs font-medium uppercase tracking-wider text-green-800 bg-green-200 rounded-lg bg-opacity-40'>Active</span>
            </td>
            <td className='p-3 text-sm text-gray-700 whitespace-nowrap'>22/01/2022</td>
            <td className='p-3 text-sm text-gray-700 whitespace-nowrap'>10/10</td>
          </tr>

          <tr>
            <td className='p-3 text-sm text-gray-700 whitespace-nowrap'>
              <a href="/" className='font-bold text-blue-500 hover:underline'>10005</a>
            </td>
            <td className='p-3 text-sm text-gray-700 whitespace-nowrap'>
              Christiaan de Kock
            </td>
            <td className='p-3 text-sm text-gray-700 whitespace-nowrap'>
              <span className='p-1.5 text-xs font-medium uppercase tracking-wider text-green-800 bg-green-200 rounded-lg bg-opacity-40'>Active</span>
            </td>
            <td className='p-3 text-sm text-gray-700 whitespace-nowrap'>18/09/2021</td>
            <td className='p-3 text-sm text-gray-700 whitespace-nowrap'>20/20</td>
          </tr>
          <tr className='bg-white'>
            <td className='p-3 text-sm text-gray-700 whitespace-nowrap'>
              <a href="/" className='font-bold text-blue-500 hover:underline'>10006</a>
            </td>
            <td className='p-3 text-sm text-gray-700 whitespace-nowrap'>
              Christiaan de Kock
            </td>
            <td className='p-3 text-sm text-gray-700 whitespace-nowrap'>
              <span className='p-1.5 text-xs font-medium uppercase tracking-wider text-yellow-800 bg-yellow-200 rounded-lg bg-opacity-40'>On Hold</span>
            </td>
            <td className='p-3 text-sm text-gray-700 whitespace-nowrap'>16/10/2021</td>
            <td className='p-3 text-sm text-gray-700 whitespace-nowrap'>10/10</td>
          </tr>

          <tr className='bg-slate-100'>
            <td className='p-3 text-sm text-gray-700 whitespace-nowrap'>
              <a href="/" className='font-bold text-blue-500 hover:underline'>10007</a>
            </td>
            <td className='p-3 text-sm text-gray-700 whitespace-nowrap'>
              Christiaan de Kock
            </td>
            <td className='p-3 text-sm text-gray-700 whitespace-nowrap'>
              <span className='p-1.5 text-xs font-medium uppercase tracking-wider text-red-800 bg-red-200 rounded-lg bg-opacity-40'>Cancelled</span>
            </td>
            <td className='p-3 text-sm text-gray-700 whitespace-nowrap'>12/01/2021</td>
            <td className='p-3 text-sm text-gray-700 whitespace-nowrap'>20/20</td>
          </tr>

          <tr className='bg-white'>
            <td className='p-3 text-sm text-gray-700 whitespace-nowrap'>
              <a href="/" className='font-bold text-blue-500 hover:underline'>10008</a>
            </td>
            <td className='p-3 text-sm text-gray-700 whitespace-nowrap'>
              Christiaan de Kock
            </td>
            <td className='p-3 text-sm text-gray-700 whitespace-nowrap'>
              <span className='p-1.5 text-xs font-medium uppercase tracking-wider text-green-800 bg-green-200 rounded-lg bg-opacity-40'>Active</span>
            </td>
            <td className='p-3 text-sm text-gray-700 whitespace-nowrap'>13/01/2022</td>
            <td className='p-3 text-sm text-gray-700 whitespace-nowrap'>20/20</td>
          </tr>

          <tr className='bg-slate-100'>
            <td className='p-3 text-sm text-gray-700 whitespace-nowrap'>
              <a href="/" className='font-bold text-blue-500 hover:underline'>10009</a>
            </td>
            <td className='p-3 text-sm text-gray-700 whitespace-nowrap'>
              Christiaan de Kock
            </td>
            <td className='p-3 text-sm text-gray-700 whitespace-nowrap'>
              <span className='p-1.5 text-xs font-medium uppercase tracking-wider text-green-800 bg-green-200 rounded-lg bg-opacity-40'>Active</span>
            </td>
            <td className='p-3 text-sm text-gray-700 whitespace-nowrap'>22/01/2022</td>
            <td className='p-3 text-sm text-gray-700 whitespace-nowrap'>10/10</td>
          </tr>

          <tr>
            <td className='p-3 text-sm text-gray-700 whitespace-nowrap'>
              <a href="/" className='font-bold text-blue-500 hover:underline'>10010</a>
            </td>
            <td className='p-3 text-sm text-gray-700 whitespace-nowrap'>
              Christiaan de Kock
            </td>
            <td className='p-3 text-sm text-gray-700 whitespace-nowrap'>
              <span className='p-1.5 text-xs font-medium uppercase tracking-wider text-green-800 bg-green-200 rounded-lg bg-opacity-40'>Active</span>
            </td>
            <td className='p-3 text-sm text-gray-700 whitespace-nowrap'>18/09/2021</td>
            <td className='p-3 text-sm text-gray-700 whitespace-nowrap'>20/20</td>
          </tr>


        </tbody>
        </table>
        </div>
      </div>
      </div>
    )
};
  
  
  
  
  
  
  
export default dashboard;
