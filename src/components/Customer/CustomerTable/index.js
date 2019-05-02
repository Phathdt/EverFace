import React from "react";
import { MDBTable, MDBTableBody, MDBTableHead, MDBIcon } from "mdbreact";
import dateFormat from "dateformat";

const Table = ({ customers, isLoaded, deleteCustomer }) => {
  if (isLoaded) {
    return (
      <MDBTable responsive striped bordered hover className="customer-table">
        <MDBTableHead>
          <tr>
            <th>Tên</th>
            <th>Ảnh đại diện</th>
            <th>Thời gian vào showroom</th>
            <th>Hành động</th>
          </tr>
        </MDBTableHead>
        <MDBTableBody>
          {customers.map((customer, index) => (
            <tr key={index}>
              <td>{customer.name}</td>
              <td>
                <div className="row">
                  <div className="col-0 col-lg-4" />
                  <div className="col-8 col-lg-5">
                    <img className="rounded" src={customer.image_url} alt="" />
                  </div>
                  <div className="col-3 col-lg-3">
                    {customer.group === 0 ? (
                      <MDBIcon
                        icon="star mdb-gallery-view-icon"
                        className="star-vip icon-big"
                      />
                    ) : null}
                  </div>
                </div>
              </td>
              <td>{dateFormat(new Date(customer.time), "dd/mm/yyyy, h:MM")}</td>
              <td>
                <div className="row">
                  <div className="col-lg-6">
                    <MDBIcon
                      icon="cog mdb-gallery-view-icon"
                      className="icon-big"
                    />
                    <p className="icon-title">Chỉnh sửa</p>
                  </div>
                  <div
                    className="col-lg-6"
                    onClick={() => deleteCustomer(customer.user_id)}
                  >
                    <MDBIcon
                      icon="ban mdb-gallery-view-icon"
                      className="icon-big"
                    />
                    <p className="icon-title">Xoá</p>
                  </div>
                </div>
              </td>
            </tr>
          ))}
        </MDBTableBody>
      </MDBTable>
    );
  } else {
    return null;
  }
};

export default Table;
