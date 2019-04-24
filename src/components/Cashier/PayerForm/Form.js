import React, { Component } from "react";

export default class Form extends Component {
  render() {
    const { image_base64, name, user_id } = this.props.payer;
    return (
      <div className="row">
        <div className="col-lg-4 col-sm-4">
          <div className="card">
            <img className="card-img-top" src={image_base64} alt="" />
          </div>
        </div>
        <div className="col-lg-8 col-sm-8">
          <div className="form-group row">
            <label className="col-sm-3 col-form-label">Xưng hô</label>
            <div className="col-sm-9">
              <select
                className="form-control"
                onChange={this.props.handleChange}
                name="title"
              >
                <option value="0">Anh</option>
                <option value="1">Chị</option>
                <option value="2">Ông</option>
                <option value="3">Bà</option>
              </select>
            </div>
          </div>
          <div className="form-group row">
            <label className="col-sm-3 col-form-label">Nhóm</label>
            <div className="col-sm-9">
              <select
                onChange={this.props.handleChange}
                className="form-control"
                name="group"
              >
                <option value="0">Nhân viên cửa hàng</option>
                <option value="1">Khách thường</option>
                <option value="2">Khách Vip</option>
              </select>
            </div>
          </div>
          <div className="form-group row">
            <label className="col-sm-3 col-form-label">Tên</label>
            <div className="col-sm-9">
              <input
                onChange={this.props.handleChange}
                className="form-control"
                type="text"
                name="name"
                defaultValue={name}
              />
            </div>
          </div>
          <div className="form-group row">
            <label className="col-sm-3 col-form-label">User ID</label>
            <div className="col-sm-9">
              <input
                readOnly
                className="form-control"
                type="text"
                name="user_id"
                value={user_id}
              />
            </div>
          </div>
          <div className="row float-right button-margin-right">
            <button type="button" className="btn btn-primary">
              Xóa
            </button>
            <button type="button" className="btn btn-primary">
              {user_id === "" ? "Đăng ký" : "Làm mới"}
            </button>
          </div>
        </div>
      </div>
    );
  }
}
