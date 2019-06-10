import React, { Component } from "react";
import { connect } from "react-redux";
import { Field, reduxForm, formValueSelector } from "redux-form";
import {
  submitForm,
  deleteCustomer
} from "../../../redux/actions/detailUserAction";
import { confirmAlert } from "react-confirm-alert";
import Utils from "../../../utils";

class CForm extends Component {
  deleteCustomer = user_id => {
    confirmAlert({
      title: "Xác nhận xoá",
      message: "Bạn có chắc muốn xoá khách hàng này",
      buttons: [
        {
          label: "Có",
          onClick: () => this.props.deleteCustomer(user_id)
        },
        {
          label: "Không"
        }
      ]
    });
  };

  render() {
    let { isLoaded, submitForm } = this.props;
    let { user_id, avatar } = this.props.user;
    if (isLoaded) {
      return (
        <form
          onSubmit={e => {
            submitForm();
            e.preventDefault();
          }}
        >
          <div className="row">
            <div className="col-lg-4 col-sm-4">
              <div className="card">
                <img
                  className="card-img-top"
                  src={Utils.convertPathToUrl(avatar)}
                  alt=""
                />
              </div>
            </div>
            <div className="col-lg-8 col-sm-8">
              <div className="form-group row">
                <label className="col-sm-3 col-form-label">Xưng hô</label>
                <div className="col-sm-9">
                  <Field
                    name="title"
                    component="select"
                    className="form-control"
                  >
                    <option value="0">Anh</option>
                    <option value="1">Chị</option>
                    <option value="2">Ông</option>
                    <option value="3">Bà</option>
                  </Field>
                </div>
              </div>
              <div className="form-group row">
                <label className="col-sm-3 col-form-label">Nhóm</label>
                <div className="col-sm-9">
                  <Field
                    name="group"
                    component="select"
                    className="form-control"
                  >
                    <option value="0">Nhân viên cửa hàng</option>
                    <option value="1">Khách thường</option>
                    <option value="2">Khách Vip</option>
                  </Field>
                </div>
              </div>
              <div className="form-group row">
                <label className="col-sm-3 col-form-label">Tên</label>
                <div className="col-sm-9">
                  <Field
                    name="name"
                    component="input"
                    type="text"
                    className="form-control"
                  />
                </div>
              </div>
              <div className="form-group row">
                <label className="col-sm-3 col-form-label">User ID</label>
                <div className="col-sm-9">
                  <Field
                    name="user_id"
                    readOnly
                    component="input"
                    type="text"
                    className="form-control"
                  />
                </div>
              </div>
              <div className="row float-right button-margin-right">
                <button
                  type="button"
                  className="btn btn-primary btn-reset"
                  onClick={() => this.deleteCustomer(user_id)}
                >
                  Xóa khách hàng
                </button>
                <button type="submit" className="btn btn-primary">
                  Lưu
                </button>
              </div>
            </div>
          </div>
        </form>
      );
    } else {
      return null;
    }
  }
}

CForm = reduxForm({
  form: "formDetailUser",
  enableReinitialize: true
})(CForm);

const selector = formValueSelector("formDetailUser");

const formDetailUserValues = state => {
  const title = selector(state, "formDetailUser", "title");
  const group = selector(state, "formDetailUser", "group");
  const name = selector(state, "formDetailUser", "name");

  return {
    ...title,
    ...group,
    ...name
  };
};

const mapStateToProps = state => ({
  initialValues: state.detailUser.user,
  formPayerValues: formDetailUserValues(state),
  user: state.detailUser.user,
  isLoaded: state.detailUser.isLoaded
});

const mapDispatchToProps = dispacth => {
  return {
    submitForm: () => dispacth(submitForm()),
    deleteCustomer: user_id => dispacth(deleteCustomer(user_id))
  };
};
const Form = connect(
  mapStateToProps,
  mapDispatchToProps
)(CForm);

export default Form;
