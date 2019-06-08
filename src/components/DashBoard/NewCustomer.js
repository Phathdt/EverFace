import React, { Component } from "react";
import { connect } from "react-redux";
import { callCustomer } from "../../redux/actions/listNewCustomerAction";

class NewCustomer extends Component {
  constructor(props) {
    super(props);

    this.state = {
      user_id: props.customer.user_id,
      image_url: props.customer.image_url,
      name: props.customer.name,
      score: props.customer.score,
      str_time: props.customer.str_time
    };
  }

  render() {
    const { image_url, name, score, str_time, user_id } = this.state;
    return (
      <div className="col-lg-3 col-sm-4 new-customer">
        <div className="card h-100">
          <img className="card-img-top" src={image_url} alt="" />

          <div className="card-body d-flex flex-column">
            <p className="card-text">{str_time}</p>
            <div>
              <h5 className="align-left card-title">{name}</h5>
              <p className="align-right card-text">{score}</p>
            </div>

            <div className="row">
              <button
                type="button"
                onClick={() => this.props.callCustomer(user_id)}
                className="btn btn-secondary btn-call"
              >
                Phát trên loa
              </button>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

const mapStateToProps = state => ({});

const mapDispatchToProps = dispacth => {
  return {
    callCustomer: user_id => dispacth(callCustomer(user_id))
  };
};
export default connect(
  mapStateToProps,
  mapDispatchToProps
)(NewCustomer);
