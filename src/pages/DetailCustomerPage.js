import React, { Component } from "react";

import Title from "../components/detailUser/Title";
import { connect } from "react-redux";
import { getDetailUser } from "../redux/actions/detailUserAction";
class DetailCustomerPage extends Component {
  componentDidMount() {
    this.props.getDetailUser(this.props.match.params.id);
  }

  render() {
    return (
      <div className="container">
        <Title />
      </div>
    );
  }
}

const mapStateToProps = state => {
  return {
    isLoaded: state.detailUser.isLoaded,
    isLoading: state.detailUser.isLoading,
    user: state.detailUser.user,
    checkin_list: state.detailUser.checkin_list,
    current_page: state.customer.current_page,
    total_page: state.detailUser.total_page
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
