import React, { Component } from "react";
import { connect } from "react-redux";
import { selectPayer } from "../../redux/actions/listPayerAction";
import Utils from "../../utils";

class Payer extends Component {
  constructor(props) {
    super(props);

    this.state = {
      id: props.payer.id,
      user_id: props.payer.user_id,
      image_base64: Utils.convertStringToBase64(props.payer.image_base64),
      name: props.payer.name,
      score: props.payer.score,
      active: props.active
    };
  }
  render() {
    const { image_base64, name, score, id } = this.state;

    let { active } = this.props;
    let className = "col-lg-3 col-sm-3 payer";

    if (active) {
      className += " active";
    }
    return (
      <div className={className} onClick={() => this.props.selectPayer(id)}>
        <div className="card h-100">
          <img className="card-img-top" src={image_base64} alt="" />

          <div className="card-body d-flex flex-column">
            <div className="row">
              <h5 className="payer-title col-9">{name}</h5>
              <p className="payer-score col-3">{score}</p>
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
