import React, { Component } from "react";
import { connect } from "react-redux";
import _ from "lodash";

import Form from "./PayerForm/Form";
import PayerTitle from "./PayerForm/PayerTitle";
class PayerForm extends Component {
  render() {
    let { selectPayerIds } = this.props;
    if (_.isEmpty(selectPayerIds)) {
      return null;
    } else {
      let { payers } = this.props;
      let payer = payers.find(payer => payer.id === selectPayerIds[0]);
      return (
        <React.Fragment>
          <PayerTitle />
          <Form payer={payer} initialValues={payer} />
        </React.Fragment>
      );
    }
  }
}

const mapStateToProps = state => {
  return {
    selectPayerIds: state.listPayer.selectPayerIds,
    payers: state.listPayer.payers
  };
};

const mapDispatchToProps = dispacth => {
  return {};
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(PayerForm);
