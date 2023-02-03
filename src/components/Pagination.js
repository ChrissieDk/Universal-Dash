import { useEffect, useState } from "react";
import ReactPaginate from 'react-paginate';

export default function Pagination(props) {
    const { users } = props;
    const [currentItems, setCurrentItems] = useState(null);
    const [pageCount, setPageCount] = useState(0)
    const [itemOffset, setItemOffset] = useState(0);
    const itemsPerPage = 10

useEffect(() => {
    const endOffset = itemOffset + itemsPerPage;
    setCurrentItems(users.slice(itemOffset, endOffset));
    setPageCount(Math.ceil(users.length / itemsPerPage));
}, [itemOffset, itemsPerPage, users]);
  
    
    const handlePageClick = (event) => {
      const newOffset = (event.selected * itemsPerPage) % users.length;
      
      setItemOffset(newOffset);
    };
  
    return (
      <>
      <div>
        {currentItems.map(users => {
            return(
                <div>
                  {users.data}
                </div>
            )
        })}
      </div>
        <ReactPaginate
            breakLabel="..."
            nextLabel="next >"
            onPageChange={handlePageClick}
            pageRangeDisplayed={5}
            pageCount={pageCount}
            previousLabel="< previous"
            renderOnZeroPageCount={null}
        />
      </>
    );
};