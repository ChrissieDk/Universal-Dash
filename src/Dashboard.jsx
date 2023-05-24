import React from 'react'
import { Fragment } from 'react';
import { useState, useEffect } from 'react';
import { data } from './users';
import Footer from './components/Footer';
import { FaArrowUp, FaArrowDown } from 'react-icons/fa';
import ReactPaginate from 'react-paginate';
import { BiLeftArrowAlt, BiRightArrowAlt } from 'react-icons/bi';



const Dashboard = () => {

  const [users, setUsers] = useState([]);
  const [sorted, setSorted] = useState({ sorted: "id", reversed: "false" });
  const [searchPhrase, setSearchPhrase] = useState("");
  const [currentItems, setCurrentItems] = useState([]);
  const [pageCount, setPageCount] = useState(1);
  const [itemOffset, setItemOffset] = useState(0);
  const [selectedPage, setSelectedPage] = useState(0);
  const itemsPerPage = 10;

  useEffect(() => {
    setUsers([...data])
  }, []);

  // toggle sort through id in ascending or descending order

  const sortById = () => {

    setSorted({ sorted: "id", reversed: !sorted.reversed });
    const usersCopy = [...users];

    usersCopy.sort((userA, userB) => {
      if (sorted.reversed) {
        return userA.id - userB.id;
      };
      return userB.id - userA.id;
    });
    setCurrentItems(usersCopy.slice(0, 10));
  };

  // Sorts the users array by full name (first and last name) in ascending or descending order, depending on the state of sorted.reversed.

  const sortByName = () => {
    setSorted({ sorted: "name", reversed: !sorted.reversed });
    const usersCopy = [...users];
    usersCopy.sort((userA, userB) => {
      const fullNameA = `${userA.first_name} ${userB.last_name}`;
      const fullNameB = `${userB.first_name} ${userA.last_name}`;

      if (sorted.reversed) {
        return fullNameB.localeCompare(fullNameA);
      };
      return fullNameA.localeCompare(fullNameB);
    });
    setCurrentItems(usersCopy.slice(0, 13));
  };

  // Filters the users array based on a search phrase entered by the user, either matching full name (first and last name) or returning all users if the search phrase is an empty string.

  const search = (event) => {
    if (event.target.value === "") {
      setUsers(data.slice(0, 10));
      setSearchPhrase("")
      return;
    } else {
      const matchedUsers = data.filter((data) => {
        return `${data.first_name} ${data.last_name} ${data.cell_number} ${data.sim_number} ${data.status}`
          .toLowerCase()
          .includes(event.target.value.toLowerCase())
      }).slice(0, 13);

      setCurrentItems(matchedUsers);
    }
    setSearchPhrase(event.target.value)
  };

  // useEffect hook updates the current items and page count based on the itemOffset and itemsPerPage values.

  useEffect(() => {
    if (!users) {
      return;
    }
    const endOffset = itemOffset + itemsPerPage;
    setCurrentItems(data.slice(itemOffset, endOffset));
    setPageCount(Math.ceil(data.length / itemsPerPage));
  }, [users, itemOffset, itemsPerPage]);

  // This function handles page clicks in the pagination component, updating the item offset, selected page, and current items state based on the selected page number and the number of items per page.

  const handlePageClick = ({ selected }) => {
    const newOffset = selected * itemsPerPage;
    if (newOffset < data.length) {
      setItemOffset(newOffset);
      setSelectedPage(selected);
      setCurrentItems(data.slice(newOffset, newOffset + itemsPerPage));
    }
  };

  // Returns a div with a status-dependent CSS class name.

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

    }
    return <div className={className}>{status}</div>;
  };

  // Maps through the users array and returns a table row for each user, displaying information such as their name, status, date, etc.

  const renderUsers = () => {
    return (
      <Fragment>
        {currentItems.map((user) => {
          return (
            <tr key={user.id}>
              <td className='font-bold text-blue-500 hover:underline pl-7 cursor-pointer'>
                <a href={`/UserIdClick?id=${user.id}`}>{user.id}</a>
              </td>
              <td className='min-w-100 p-3 text-sm text-gray-700 whitespace-nowrap'>{`${user.first_name} ${user.last_name}`}</td>
              <td className='min-w-100 p-3 text-sm text-gray-700 whitespace-nowrap'><Status status={user.status} /></td>
              <td className='min-w-100 p-3 text-sm text-gray-700 whitespace-nowrap'>{user.date}</td>
              <td className='min-w-100 p-3 text-sm text-gray-700 whitespace-nowrap'>{user.package}</td>
              <td className='min-w-100 p-3 text-sm text-gray-700 whitespace-nowrap'>{user.package_term}</td>
              <td className='min-w-100 p-3 text-sm text-gray-700 whitespace-nowrap'>{user.remaining_term}</td>
              <td className='min-w-100 p-3 text-sm text-gray-700 whitespace-nowrap'>{user.cell_number}</td>
              <td className='min-w-100 p-3 text-sm text-gray-700 whitespace-nowrap'>{user.sim_number}</td>
            </tr>
          )
        })}
      </Fragment>
    );
  };

  // Returns either an upward or downward arrow, depending on the state of sorted.reversed.

  const renderArrow = () => {
    if (sorted.reversed) {
      return <FaArrowUp className='inline-block pl-2 rounded text-lg cursor-pointer' />;
    };
    return <FaArrowDown className='inline-block pl-2 rounded text-lg cursor-pointer' />;
  };

  // add to first div below to enable scroll later style={{ height: 'calc(100vh - 4rem)', overflowY: 'scroll' }}

  return (
    <>
    
    <div className='w-full lg:px-32 fixed justify-center items-center px-6 my-2 overflow-y-auto' style={{ maxHeight: 'calc(100vh - 6rem)' }} >
      <h1 className='text-xl mb-5 overflow-y-auto'>Dashboard</h1>
      <div>
        <input className='mb-5 pl-5 p-2 rounded border border-slate-200 w-full sm:mb-5'
          type='text'
          placeholder='Search'
          value={searchPhrase}
          onChange={search}
        />
      </div>
      <div className='w-full border border-slate-100 rounded-lg '>
        <div className='overflow-auto rounded-lg shadow sm:min-h-fit '>
          <table className='w-full pt-10  '>
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
                <th className='p-3 text-sm font-semibold tracking-wide text-left'>Package term</th>
                <th className='p-3 text-sm font-semibold tracking-wide text-left'>Remaining term</th>
                <th className='p-3 text-sm font-semibold tracking-wide text-left'>Cell number</th>
                <th className='p-3 text-sm font-semibold tracking-wide text-left'>Sim number</th>
              </tr>
            </thead>

            <tbody className='divide-y divide-gray-200'>
              {renderUsers()}
            </tbody>

          </table>
        </div>
      </div>
      <div >
        <ReactPaginate
          className="justify-center text-center items-center flex p-3 gap-5"
          forcePage={pageCount > 0 ? selectedPage : 0}
          activeClassName="bg-slate-500 text-white rounded-sm p-1 opacity-50"
          breakLabel="..."
          nextLabel={<BiRightArrowAlt className="text-lg" />}
          onPageChange={handlePageClick}
          pageRangeDisplayed={3}
          pageCount={pageCount}
          previousLabel={<BiLeftArrowAlt className="text-lg" />}
        />
      </div>
      <Footer />
    </div>
    </>
  )
}

export default Dashboard;
