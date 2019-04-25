import React, { Component } from "react";
import { connect } from "react-redux";
import { Field, reduxForm, formValueSelector } from "redux-form";
import { resetForm, submitForm } from "../../../redux/actions/listPayerAction";

class CForm extends Component {
  render() {
    let payer = this.props.payer || {};
    const { image_base64, user_id } = payer;
    return (
      <form
        onSubmit={e => {
          this.props.submitForm();
          e.preventDefault();
        }}
      >
        <div className="row">
          <div className="col-lg-4 col-sm-4">
            <div className="card">
              <img
                className="card-img-top"
                src={image_base64 || "https://placehold.it/700x700"}
                alt=""
              />
            </div>
          </div>
          <div className="col-lg-8 col-sm-8">
            <div className="form-group row">
              <label className="col-sm-3 col-form-label">Xưng hô</label>
              <div className="col-sm-9">
                <Field name="title" component="select" className="form-control">
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
                <Field name="group" component="select" className="form-control">
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
              <label className="col-sm-3 col-form-label">Tên</label>
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
                onClick={this.props.resetForm}
              >
                Xóa
              </button>
              <button type="submit" className="btn btn-primary">
                {user_id === "" ? "Đăng ký" : "Cập nhật"}
              </button>
            </div>
          </div>
        </div>
      </form>
    );
  }
}

CForm = reduxForm({
  form: "formPayer",
  enableReinitialize: true
})(CForm);

const selector = formValueSelector("formPayer");

const formPayerValues = state => {
  const title = selector(state, "formPayer", "title");
  const group = selector(state, "formPayer", "group");
  const name = selector(state, "formPayer", "name");

  return {
    ...title,
    ...group,
    ...name
  };
};

const mapStateToProps = state => ({
  initialValues: state.listPayer.payer,
  formPayerValues: formPayerValues(state)
});

const mapDispatchToProps = dispacth => {
  return {
    resetForm: () => dispacth(resetForm()),
    submitForm: () => dispacth(submitForm())
  };
};
const Form = connect(
  mapStateToProps,
  mapDispatchToProps
)(CForm);

export default Form;
