import React, { Component } from "react";
import Title from "../components/Customer/Title";
import SearchSection from "../components/Customer/SearchSection";
import CustomerTable from "../components/Customer/CustomerTable";
import Pagination from "../components/Customer/Pagination";
export default class ListCustomerPage extends Component {
  render() {
    return (
      <React.Fragment>
        <Title />
        <SearchSection />
        <CustomerTable />
        <Pagination />
      </React.Fragment>
    );
  }
}
