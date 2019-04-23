import React, { Component } from "react";
import CashierTitle from "../components/Cashier/CashierTitle";
import ListPayer from "../components/Cashier/ListPayer";
import PayerForm from "../components/Cashier/PayerForm";
export default class CashierPage extends Component {
  render() {
    return (
      <React.Fragment>
        <CashierTitle />
        <ListPayer />
        <PayerForm />
      </React.Fragment>
    );
  }
}
