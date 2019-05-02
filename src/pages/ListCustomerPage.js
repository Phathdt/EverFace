import React, { Component } from "react";
import Title from "../components/Customer/Title";
import { connect } from "react-redux";
import {
  getListCustomer,
  deleteCustomer,
  changePage
} from "../redux/actions/customerAction";
import { confirmAlert } from "react-confirm-alert";

import SearchSection from "../components/Customer/SearchSection";
import CustomerTable from "../components/Customer/CustomerTable";
import Pagination from "../components/Shared/pagination";
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
    let { customers, isLoaded, current_page, total_page } = this.props;
    return (
      <div className="container">
        <Title />
        <SearchSection />
        <CustomerTable
          customers={customers}
          isLoaded={isLoaded}
          deleteCustomer={this.deleteCustomer}
        />
        <Pagination
          isLoaded={isLoaded}
          current_page={current_page}
          total_page={total_page}
          changePage={this.props.changePage}
        />
      </div>
    );
  }
}

const mapStateToProps = state => {
  return {
    isLoaded: state.customer.isLoaded,
    isLoading: state.customer.isLoading,
    customers: state.customer.customers,
    current_page: state.customer.current_page,
    total_page: state.customer.total_page
  };
};
const mapDispatchToProps = dispacth => {
  return {
    getListCustomer: () => dispacth(getListCustomer()),
    deleteCustomer: user_id => dispacth(deleteCustomer(user_id)),
    changePage: page => dispacth(changePage(page))
  };
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(ListCustomerPage);
