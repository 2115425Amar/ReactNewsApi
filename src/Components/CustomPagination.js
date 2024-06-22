import { Pagination } from "react-bootstrap";

function CustomPagination(props) {
  const { currentPage, totalPages, onPageChange } = props;

  const handlePageClick = (pageNumber) => {
    onPageChange(pageNumber);
  };

  const renderPageItems = () => {
    const pageItems = [];

    for (let i = 1; i <= totalPages; i++) {
      pageItems.push(
        <Pagination.Item
          key={i}
          active={i === currentPage}
          onClick={() => onPageChange(i)}
        >
          {i}
        </Pagination.Item>
      );
    }

    return pageItems;
  };

  return (
    <div className="d-flex justify-content-center">
      <Pagination>
      {/*1-> previous button */}
        <Pagination.Prev
          disabled={currentPage === 1}
          onClick={() => handlePageClick(currentPage - 1)}
        />
        {renderPageItems()}
        {/*2-> next button */}
        <Pagination.Next
          disabled={currentPage === totalPages}
          onClick={() => handlePageClick(currentPage + 1)}
        />
      </Pagination>
    </div>
  );
}

export default CustomPagination;
