import React from "react";

function Pagination({ totalPages, onClick }) {
  const pages = [...Array(totalPages).keys()].map((num) => num + 1);

  return (
    <div>
      {pages.map((num) => (
        <button
          key={num}
          onClick={() => onClick(num)}
          className="paginationBtn"
        >
          {num}
        </button>
      ))}
    </div>
  );
}

export default Pagination;
