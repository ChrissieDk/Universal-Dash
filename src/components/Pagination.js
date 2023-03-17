import { useEffect, useState } from "react";
import ReactPaginate from 'react-paginate';
import { BiLeftArrowAlt, BiRightArrowAlt } from 'react-icons/bi';

export default function Pagination(props) {
  const { users } = props;
  const [currentItems, setCurrentItems] = useState([]);
  const [pageCount, setPageCount] = useState(1);
  const [itemOffset, setItemOffset] = useState(0);
  const [selectedPage, setSelectedPage] = useState(0);

  const itemsPerPage = 10;

  useEffect(() => {
    if (!users) {
      return;
    }
  
    const endOffset = itemOffset + itemsPerPage;
    setCurrentItems(users.slice(itemOffset, endOffset));
    setPageCount(Math.ceil(users.length / itemsPerPage));
  }, [itemOffset, itemsPerPage, users]);
  const handlePageClick = ({ selected }) => {
    const newOffset = selected * itemsPerPage;
    if (newOffset < users.length) {
      setItemOffset(newOffset);
      setSelectedPage(selected);
      setCurrentItems(users.slice(newOffset, newOffset + itemsPerPage));
    }
  };

  return (
    <>
      <div>
        {currentItems.map((user) => {
          return (
            <div key={user.id}>
              {user.first_name} {user.last_name}
            </div>
          )
        })}
      </div>

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
    </>
  );
}