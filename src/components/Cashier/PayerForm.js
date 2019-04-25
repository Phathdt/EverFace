import React, { Component } from "react";
import { connect } from "react-redux";
import { updateFormData } from "../../redux/actions/listPayerAction";

import Form from "./PayerForm/Form";
import PayerTitle from "./PayerForm/PayerTitle";
class PayerForm extends Component {
  handleChange = event => {
    let { name, value } = event.target;

    this.props.updateFormData(name, value);
  };
  render() {
    let { formData } = this.props;
    return (
      <React.Fragment>
        <PayerTitle />
        <Form payer={formData} handleChange={this.handleChange} />
      </React.Fragment>
    );
  }
}

const mapStateToProps = state => {
  return {
    formData: state.listPayer.formData
  };
};

const mapDispatchToProps = dispacth => {
  return {
    updateFormData: (key, value) => dispacth(updateFormData(key, value))
  };
};
export default connect(
  mapStateToProps,
  mapDispatchToProps
)(PayerForm);
