import React from "react";
import ReactPaginate from "react-paginate";
import "./pagination.scss";

type PaginationProps = {
  onPageChange: (selectedItem: { selected: number }) => void;
  pageCount: number;
};
const Pagination: React.FC<PaginationProps> = ({ onPageChange, pageCount }) => {
  return (
    <ReactPaginate
      className="pagination"
      pageClassName="page"
      activeClassName="page--active"
      breakLabel="..."
      marginPagesDisplayed={2}
      pageRangeDisplayed={5}
      nextLabel="next >"
      onPageChange={onPageChange}
      pageCount={pageCount}
      previousLabel="< previous"
      renderOnZeroPageCount={null}
    />
  );
};

export default Pagination;
