import React, { Component } from "react";
import { connect } from "react-redux";

import Form from "./PayerForm/Form";
import PayerTitle from "./PayerForm/PayerTitle";
class PayerForm extends Component {
  render() {
    let { payer } = this.props;
    return (
      <React.Fragment>
        <PayerTitle />
        <Form payer={payer} />
      </React.Fragment>
    );
  }
}

const mapStateToProps = state => {
  return {
    formData: state.listPayer.formData
  };
};

const mapDispatchToProps = dispacth => {};
export default connect(
  mapStateToProps,
  mapDispatchToProps
)(PayerForm);
