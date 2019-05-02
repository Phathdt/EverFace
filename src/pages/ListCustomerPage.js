import React, { Component } from "react";
import Title from "../components/Customer/Title";
import { connect } from "react-redux";
import {
  getListCustomer,
  deleteCustomer
} from "../redux/actions/customerAction";
import { confirmAlert } from "react-confirm-alert";

import SearchSection from "../components/Customer/SearchSection";
import CustomerTable from "../components/Customer/CustomerTable";
import Pagination from "../components/Customer/Pagination";
class ListCustomerPage extends Component {
  componentDidMount() {
    this.props.getListCustomer();
  }

  deleteCustomer = user_id => {
    confirmAlert({
      title: "Xác nhận xoá",
      message: "Bạn có chắc muốn xoá khách hàng này",
      buttons: [
        {
          label: "Có",
          onClick: () => this.props.deleteCustomer(user_id)
        },
        {
          label: "Không"
        }
      ]
    });
  };

  render() {
    let { customers, isLoaded } = this.props;
    return (
      <div className="container">
        <Title />
        <SearchSection />
        <CustomerTable
          customers={customers}
          isLoaded={isLoaded}
          deleteCustomer={this.deleteCustomer}
        />
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
    getListCustomer: () => dispacth(getListCustomer()),
    deleteCustomer: user_id => dispacth(deleteCustomer(user_id))
  };
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(ListCustomerPage);
