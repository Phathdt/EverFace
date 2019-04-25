import React, { Component } from "react";
import { connect } from "react-redux";
import _ from "lodash";

import Form from "./PayerForm/Form";
import PayerTitle from "./PayerForm/PayerTitle";
class PayerForm extends Component {
  render() {
    let { payer } = this.props;
    if (_.isEmpty(payer)) {
      return null;
    } else {
      return (
        <React.Fragment>
          <PayerTitle />
          <Form payer={payer} />
        </React.Fragment>
      );
    }
  }
}

const mapStateToProps = state => {
  return {
    payer: state.listPayer.payer
  };
};

const mapDispatchToProps = dispacth => {
  return {};
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(PayerForm);
