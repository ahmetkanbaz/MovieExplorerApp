/* eslint-disable react/prop-types */
import './pagination.scss'

const Pagination = ({ totalResults, currentPage, onPageChange, setCurrentPage, itemsPerPage }) => {

  const pageNumbers = Math.ceil(totalResults / itemsPerPage);
  const maxPageNumbers = 7;

  const renderPageNumbers = () => {
    const pageArray = [];
    let startPage = currentPage - Math.floor(maxPageNumbers / 2);
    if (startPage < 1) {
      startPage = 1;
    }
    let endPage = startPage + maxPageNumbers - 1;
    if (endPage > pageNumbers) {
      endPage = pageNumbers;
      startPage = Math.max(1, endPage - maxPageNumbers + 1);
    }

    for (let i = startPage; i <= endPage; i++) {
      pageArray.push(
        <li
          key={i}
          className={`page-item ${currentPage === i ? 'active' : ''}`}
        >
          <a className="page-link" onClick={() => onPageChange(i)}>
            {i}
          </a>
        </li>
      );
    }
    return pageArray;
  };

  const prevPage = () => {
    if (currentPage > 1) {
      setCurrentPage(currentPage - 1);
    }
  };

  const nextPage = () => {
    if (currentPage < Math.ceil(totalResults / itemsPerPage)) {
      setCurrentPage(currentPage + 1);
    }
  };

  return (
    <div className="d-flex justify-content-center pagination">
      <ul className="pagination">
        <li className="page-item">
          <a
            className="page-link"
            onClick={() => prevPage()}
            disabled={currentPage === 1}
          >
            <span aria-hidden="true">&laquo;</span>
          </a>
        </li>
        {renderPageNumbers()}
        <li className="page-item">
          <a
            className="page-link"
            onClick={() => nextPage()}
            disabled={currentPage === pageNumbers}
          >
            <span aria-hidden="true">&raquo;</span>
          </a>
        </li>
      </ul>
    </div>
  );
};

export default Pagination;