import React, { Component } from "react";
import Receptionist from "../components/DashBoard/Receptionist";
import VideoComponent from "../components/DashBoard/VideoComponent";
import ListNewCustomer from "../components/DashBoard/ListNewCustomer";

export default class DashBoardPage extends Component {
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
