import React, { Component } from "react";
import { connect } from "react-redux";
import Receptionist from "../components/DashBoard/Receptionist";
import VideoComponent from "../components/DashBoard/VideoComponent";
import ListNewCustomer from "../components/DashBoard/ListNewCustomer";

class DashBoardPage extends Component {
  render() {
    return (
      <React.Fragment>
        <Receptionist />
        <VideoComponent />
        <ListNewCustomer />
      </React.Fragment>
    );
  }
}

const mapStateToProps = state => ({});

const mapDispatchToProps = {};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(DashBoardPage);
