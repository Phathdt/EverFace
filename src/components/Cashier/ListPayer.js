import React, { Component } from "react";
import { connect } from "react-redux";
import Payer from "./Payer";
import _ from "lodash";
class ListPayer extends Component {
  render() {
    const { isLoaded, payers, selectPayerIds } = this.props;

    if (isLoaded) {
      return (
        <React.Fragment>
          <div className="row list-payer">
            {payers.map((payer, index) => (
              <Payer
                payer={payer}
                key={index}
                active={_.includes(selectPayerIds, payer.id)}
              />
            ))}
          </div>
        </React.Fragment>
      );
    } else {
      return <div />;
    }
  }
}
const mapStateToProps = state => {
  return {
    isLoaded: state.listPayer.isLoaded,
    isLoading: state.listPayer.isLoading,
    payers: state.listPayer.payers,
    selectPayerIds: state.listPayer.selectPayerIds
  };
};
const mapDispatchToProps = dispacth => {
  return {};
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(ListPayer);
