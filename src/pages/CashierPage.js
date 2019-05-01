import React, { Component } from "react";
import CashierTitle from "../components/Cashier/CashierTitle";
import ListPayer from "../components/Cashier/ListPayer";
import PayerForm from "../components/Cashier/PayerForm";
import ButtonReloadPayer from "../components/Cashier/ButtonReloadPayer";
export default class CashierPage extends Component {
  render() {
    return (
      <div className="container-fluid">
        <CashierTitle />
        <div className="row">
          <div className="col-lg-6 col-sm-12 ">
            <div className="row">
              <ButtonReloadPayer />
              <ListPayer />
            </div>
          </div>
          <div className="col-lg-6 col-sm-12">
            <PayerForm />
          </div>
        </div>
      </div>
    );
  }
}
