import React from "react";
import {
  MDBPagination,
  MDBPageItem,
  MDBPageNav,
  MDBCol,
  MDBRow
} from "mdbreact";

const PaginationPage = ({ isLoaded, current_page, total_page, changePage }) => {
  if (isLoaded) {
    let list_page = Array.apply(null, { length: total_page }).map(
      Number.call,
      Number
    );

    list_page = list_page.map(page => page + 1);
    return (
      <MDBRow>
        <MDBCol>
          <MDBPagination className="mb-5 justify-content-center">
            <MDBPageItem
              disabled={current_page === 1}
              onClick={() => changePage(current_page - 1)}
            >
              <MDBPageNav aria-label="Previous">
                <span aria-hidden="true">Trang trước</span>
              </MDBPageNav>
            </MDBPageItem>
            {list_page.map((page, index) => (
              <MDBPageItem
                active={page === current_page}
                key={index}
                onClick={() => changePage(page)}
              >
                <MDBPageNav>{page}</MDBPageNav>
              </MDBPageItem>
            ))}
            <MDBPageItem
              disabled={current_page === total_page}
              onClick={() => changePage(current_page + 1)}
            >
              <MDBPageNav aria-label="Previous">
                <span aria-hidden="true">Trang sau</span>
              </MDBPageNav>
            </MDBPageItem>
          </MDBPagination>
        </MDBCol>
      </MDBRow>
    );
  } else {
    return null;
  }
};

export default PaginationPage;
