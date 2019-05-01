import React, { Component } from "react";
import { connect } from "react-redux";
import { getListPayer } from "../../redux/actions/listPayerAction";

class ButtonReloadPayer extends Component {
  constructor(props) {
    super(props);

    this.props.getListPayer();
  }

  render() {
    return (
      <button
        type="button"
        onClick={() => this.props.getListPayer()}
        className="btn btn-primary btn-reload-payer"
      >
        Làm mới
      </button>
    );
  }
}

const mapStateToProps = state => {
  return {};
};

const mapDispatchToProps = dispacth => {
  return {
    getListPayer: () => dispacth(getListPayer())
  };
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(ButtonReloadPayer);
