import "./styles/Pagination.css"
import { useState } from "react"

const handlePageChange = (pageNumber) => {
  setCurrentPage(pageNumber)
}

function Pagination({ currentPage, totalPages, onPageChange, setCurrentPage }) {
  const handlePageChange = (page) => {
    onPageChange(page);
  }

  const pageNumbers = [];
  for (let i = 1; i <= totalPages; i++) {
    pageNumbers.push(i)
  }

  const [visiblePageNumbers, setVisiblePageNumbers] = useState(pageNumbers.slice(0, 3))
 
  const handleNextPage = () => {
    const nextPage = currentPage + 1
  
    if (!visiblePageNumbers.includes(nextPage) && nextPage <= pageNumbers.length) {
    const startIndex = pageNumbers.indexOf(nextPage) - 4
    setVisiblePageNumbers(pageNumbers.slice(startIndex, startIndex + 5))
  }
  setCurrentPage(nextPage)
  }

  const handlePreviousPage = () => {
    const previousPage = currentPage - 1
  if (!visiblePageNumbers.includes(previousPage) && previousPage > 0) {
    const startIndex = pageNumbers.indexOf(previousPage)
    setVisiblePageNumbers(pageNumbers.slice(startIndex, startIndex + 5))
  }
  setCurrentPage(previousPage)
  }
  
  return (
    <div className="pagination">
      <button
        className="pagination__item"
        onClick={handlePreviousPage}
        disabled={currentPage === 1}
      >
        Previous
      </button>
      {visiblePageNumbers.map((page) => (
        <button
          key={page}
          className={currentPage === page ? "active" : ""}
          onClick={() => handlePageChange(page)}
        >
          {page}
        </button>
      ))}
      <button
        className="pagination__item"
        onClick={handleNextPage}
        disabled={currentPage === totalPages}
      >
        Next
      </button>
    </div>
  );
}

export default Pagination