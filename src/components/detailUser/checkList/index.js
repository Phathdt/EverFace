import React, { Component } from "react";
import { connect } from "react-redux";
import { MDBTable, MDBTableBody, MDBTableHead, MDBIcon } from "mdbreact";
import dateFormat from "dateformat";
import {
  deleteCustomer,
  changeAvatar,
  deleteAvatar
} from "../../../redux/actions/detailUserAction";

class CheckinList extends Component {
  render() {
    const { isLoaded, checkin_list, changeAvatar, deleteAvatar } = this.props;

    if (isLoaded) {
      return (
        <MDBTable
          responsive
          striped
          bordered
          hover
          className="detail-customer-table"
        >
          <MDBTableHead>
            <tr>
              <th>Ảnh đại diện</th>
              <th>Thời gian vào showroom</th>
              <th>Hành động</th>
            </tr>
          </MDBTableHead>
          <MDBTableBody>
            {checkin_list.map((checkin, index) => (
              <tr key={index}>
                <td>
                  <div className="row">
                    <div className="col-lg-3" />
                    <div className="col-lg-6">
                      <img
                        className="mini-image"
                        src={checkin.image_url}
                        alt=""
                      />
                    </div>
                    <div className="col-lg-3" />
                  </div>
                </td>
                <td>{dateFormat(checkin.time, "dd/mm/yyyy, h:MM")}</td>
                <td>
                  <div className="row">
                    <div
                      className="col-lg-6"
                      onClick={() =>
                        changeAvatar(checkin.user_id, checkin.image_url)
                      }
                    >
                      <MDBIcon
                        icon="cog mdb-gallery-view-icon"
                        className="icon-big"
                      />
                      <p className="icon-title">Chọn làm ảnh đại diện</p>
                    </div>
                    <div
                      className="col-lg-6"
                      onClick={() =>
                        deleteAvatar(checkin.user_id, checkin.image_url)
                      }
                    >
                      <MDBIcon
                        icon="trash-alt mdb-gallery-view-icon"
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
      return <div />;
    }
  }
}
const mapStateToProps = state => {
  return {
    isLoaded: state.detailUser.isLoaded,
    isLoading: state.detailUser.isLoading,
    checkin_list: state.detailUser.checkin_list
  };
};
const mapDispatchToProps = dispacth => {
  return {
    deleteCustomer: user_id => dispacth(deleteCustomer(user_id)),
    changeAvatar: (user_id, image_url) =>
      dispacth(changeAvatar(user_id, image_url)),
    deleteAvatar: (user_id, image_url) =>
      dispacth(deleteAvatar(user_id, image_url))
  };
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(CheckinList);
