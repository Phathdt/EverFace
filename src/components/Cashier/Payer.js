import React, { Component } from "react";
import { connect } from "react-redux";
import { selectPayer } from "../../redux/actions/listPayerAction";

class Payer extends Component {
  constructor(props) {
    super(props);

    this.state = {
      user_id: props.payer.user_id,
      image_base64: props.payer.image_base64,
      name: props.payer.name,
      score: props.payer.score
    };
  }
  render() {
    const { image_base64, name, score, user_id } = this.state;
    return (
      <div
        className="col-lg-4 col-sm-4 payer"
        onClick={() => this.props.selectPayer(user_id)}
      >
        <div className="card h-100">
          <img className="card-img-top" src={image_base64} alt="" />

          <div className="card-body d-flex flex-column">
            <div className="row">
              <h5 className="card-title col-lg-9">{name}</h5>
              <p className="card-text col-lg-3">{score}</p>
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
    selectPayer: id => dispacth(selectPayer(id))
  };
};
export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Payer);
