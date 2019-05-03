import React, { Component } from "react";
import { connect } from "react-redux";
import { getListNewCustomer } from "../../redux/actions/listNewCustomerAction";
import NewCustomer from "./NewCustomer";
const DELAY_TIME = 5000;

class ListNewCustomer extends Component {
  constructor(props) {
    super(props);

    this.props.getListNewCustomer();
  }

  componentDidMount() {
    this.interval = setInterval(
      () => this.props.getListNewCustomer(),
      DELAY_TIME
    );
  }

  componentWillUnmount() {
    clearInterval(this.interval);
  }

  render() {
    const { isLoaded, customers } = this.props;

    if (isLoaded) {
      return (
        <div className="row">
          {customers.map((customer, index) => (
            <NewCustomer customer={customer} key={index} />
          ))}
        </div>
      );
    } else {
      return <div />;
    }
  }
}

const mapStateToProps = state => {
  return {
    isLoaded: state.listNewCustomer.isLoaded,
    isLoading: state.listNewCustomer.isLoading,
    customers: state.listNewCustomer.customers
  };
};

const mapDispatchToProps = dispacth => {
  return {
    getListNewCustomer: () => dispacth(getListNewCustomer())
  };
};
export default connect(
  mapStateToProps,
  mapDispatchToProps
)(ListNewCustomer);
