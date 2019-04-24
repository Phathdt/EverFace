import React, { Component } from "react";
import CashierTitle from "../components/Cashier/CashierTitle";
import ListPayer from "../components/Cashier/ListPayer";
import PayerForm from "../components/Cashier/PayerForm";
export default class CashierPage extends Component {
  render() {
    return (
      <React.Fragment>
        <CashierTitle />
        <div className="row">
          <div className="col-lg-6 col-sm-12">
            <ListPayer />
          </div>
          <div className="col-lg-6 col-sm-12">
            <PayerForm />
          </div>
        </div>
      </React.Fragment>
    );
  }
}
