import React, { useState } from 'react';

const Pagination = ({ totalPages, onPageChange }) => {
  const [currentPage, setCurrentPage] = useState(1);

  const handleNextPage = () => {
    if (currentPage < totalPages) {
      setCurrentPage(currentPage + 1);
      onPageChange(currentPage + 1);
    }
  };

  const handlePrevPage = () => {
    if (currentPage > 1) {
      setCurrentPage(currentPage - 1);
      onPageChange(currentPage - 1);
    }
  };

  return (
    <div className="flex my-4 justify-center items-center">
      <button
        className="w-10 h-10 rounded-full  bg-white border-2 border-gray-100"
        onClick={handlePrevPage}
        disabled={currentPage === 1}
      >
        <i className="fa fa-arrow-left"></i>
      </button>
      <div className="page-numbers px-2 mx-3">
        {Array.from({ length: totalPages }, (_, i) => i + 1).map((pageNumber) => (
          <button
            key={pageNumber}
            onClick={() => {
              setCurrentPage(pageNumber);
              onPageChange(pageNumber);
            }}
            className={`${currentPage === pageNumber ? 'text_color' : ''} px-2 `}
          >
            {pageNumber}
          </button>
        ))}
      </div>
      <button
        className="w-10 h-10 rounded-full  bg-white border-2 border-gray-100"
        onClick={handleNextPage}
        disabled={currentPage === totalPages}
      >
        <i className="fa fa-arrow-right"></i>
      </button>
    </div>
  );
};

export default Pagination;