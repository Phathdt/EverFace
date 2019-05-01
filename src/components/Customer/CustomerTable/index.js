import React from "react";
import { MDBTable, MDBTableBody, MDBTableHead } from "mdbreact";
import dateFormat from "dateformat";

const Table = ({ customers, isLoaded }) => {
  if (isLoaded) {
    console.log(customers[0]);
    return (
      <MDBTable responsive striped bordered hover>
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
                <img className="card-img-top" src={customer.image_url} alt="" />
              </td>
              <td>{dateFormat(new Date(customer.time), "dd/mm/yyyy, h:MM")}</td>
              <td>Action</td>
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
