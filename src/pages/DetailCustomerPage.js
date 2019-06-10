import React, { Component } from "react";
import { connect } from "react-redux";

import Title from "../components/detailUser/Title";
import Form from "../components/detailUser/formDetailUser";
import CheckinList from "../components/detailUser/checkList";
import Pagination from "../components/Shared/pagination";
import { getDetailUser, changePage } from "../redux/actions/detailUserAction";

class DetailCustomerPage extends Component {
  componentDidMount() {
    this.props.getDetailUser(this.props.match.params.id);
  }

  render() {
    let { isLoaded, current_page, total_page } = this.props;
    return (
      <div className="container">
        <Title />
        <Form />
        <CheckinList />
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
    isLoaded: state.detailUser.isLoaded,
    current_page: state.detailUser.current_page,
    total_page: state.detailUser.total_page
  };
};
const mapDispatchToProps = dispacth => {
  return {
    getDetailUser: user_id => dispacth(getDetailUser(user_id)),
    changePage: page => dispacth(changePage(page))
  };
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(DetailCustomerPage);
