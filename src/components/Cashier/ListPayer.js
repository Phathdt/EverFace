import React, { Component } from "react";
import { connect } from "react-redux";
import Payer from "./Payer";
import _ from "lodash";
class ListPayer extends Component {
  render() {
    const { isLoaded, payers, payer } = this.props;

    if (isLoaded) {
      return (
        <React.Fragment>
          <div className="row list-payer">
            {payers.map((myPayer, index) => (
              <Payer
                payer={myPayer}
                key={index}
                active={_.isEqual(payer, myPayer)}
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
    payer: state.listPayer.payer
  };
};
const mapDispatchToProps = dispacth => {
  return {};
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(ListPayer);
