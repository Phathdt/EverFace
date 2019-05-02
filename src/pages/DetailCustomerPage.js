import React, { Component } from "react";
import { connect } from "react-redux";

import Title from "../components/detailUser/Title";
import Form from "../components/detailUser/formDetailUser";

import { getDetailUser } from "../redux/actions/detailUserAction";
class DetailCustomerPage extends Component {
  componentDidMount() {
    this.props.getDetailUser(this.props.match.params.id);
  }

  render() {
    let { current_page, total_page, per_page } = this.props;
    return (
      <div className="container">
        <Title />
        <Form />
      </div>
    );
  }
}

const mapStateToProps = state => {
  return {
    current_page: state.customer.current_page,
    total_page: state.detailUser.total_page,
    per_page: state.detailUser.per_page
  };
};
const mapDispatchToProps = dispacth => {
  return {
    getDetailUser: user_id => dispacth(getDetailUser(user_id))
  };
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(DetailCustomerPage);
