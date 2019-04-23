import React, { Component } from "react";
import { connect } from "react-redux";
import { getListPayer } from "../../redux/actions/listPayerAction";
import Payer from "./Payer";
class ListPayer extends Component {
  constructor(props) {
    super(props);

    this.props.getListPayer();
  }
  render() {
    const { isLoaded, payers } = this.props;

    if (isLoaded) {
      return (
        <React.Fragment>
          <div className="row">
            {payers.map((payer, index) => (
              <Payer payer={payer} key={index} />
            ))}
          </div>
          <div className="row float-right button-margin-right">
            <button
              type="button"
              onClick={() => this.props.getListPayer()}
              className="btn btn-primary"
            >
              Làm mới
            </button>
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
    payers: state.listPayer.payers
  };
};
const mapDispatchToProps = dispacth => {
  return {
    getListPayer: () => dispacth(getListPayer())
  };
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(ListPayer);
