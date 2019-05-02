import React, { Component } from "react";
import { MDBIcon } from "mdbreact";
import { connect } from "react-redux";
import { Field, reduxForm, formValueSelector } from "redux-form";
import { getListCustomer } from "../../../redux/actions/customerAction";

class CForm extends Component {
  componentDidMount() {
    this.props.getListCustomer();
  }

  render() {
    return (
      <div className="row form-group col-lg-6">
        <div className="col-lg-4">Tìm kiếm</div>
        <div className="col-lg-7">
          <Field
            component="input"
            className="form-control form-control-sm"
            type="text"
            placeholder="Search"
            aria-label="Search"
            name="search"
          />
        </div>
        <div className="col-lg-1">
          <MDBIcon icon="search" onClick={() => this.props.getListCustomer()} />
        </div>
      </div>
    );
  }
}

CForm = reduxForm({
  form: "formSearch",
  enableReinitialize: true
})(CForm);

const selector = formValueSelector("formSearch");

const formSearchValues = state => {
  const search = selector(state, "formSearch", "search");

  return { ...search };
};

const mapStateToProps = state => ({
  formSearchValues: formSearchValues(state)
});

const mapDispatchToProps = dispacth => {
  return {
    getListCustomer: () => dispacth(getListCustomer())
  };
};

const Form = connect(
  mapStateToProps,
  mapDispatchToProps
)(CForm);

export default Form;
