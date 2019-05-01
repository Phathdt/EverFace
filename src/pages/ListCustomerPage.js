import React, { Component } from "react";
import Title from "../components/Customer/Title";
import { connect } from "react-redux";
import { getListCustomer } from "../redux/actions/customerAction";

import SearchSection from "../components/Customer/SearchSection";
import CustomerTable from "../components/Customer/CustomerTable";
import Pagination from "../components/Customer/Pagination";
class ListCustomerPage extends Component {
  componentDidMount() {
    this.props.getListCustomer();
  }

  render() {
    let { customers, isLoaded } = this.props;
    return (
      <div className="container">
        <Title />
        <SearchSection />
        <CustomerTable customers={customers} isLoaded={isLoaded} />
        <Pagination />
      </div>
    );
  }
}

const mapStateToProps = state => {
  return {
    isLoaded: state.customer.isLoaded,
    isLoading: state.customer.isLoading,
    customers: state.customer.customers
  };
};
const mapDispatchToProps = dispacth => {
  return {
    getListCustomer: () => dispacth(getListCustomer())
  };
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(ListCustomerPage);
