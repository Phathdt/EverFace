import React, { Component } from "react";
import { connect } from "react-redux";

class Payer extends Component {
  constructor(props) {
    super(props);

    this.state = {
      id: props.payer.id,
      image_base64: props.payer.image_base64,
      name: props.payer.name,
      score: props.payer.score
    };
  }
  render() {
    const { image_base64, name, score, id } = this.state;
    return (
      <div className="col-lg-2 col-sm-2 payer">
        <div className="card h-100">
          <img className="card-img-top" src={image_base64} alt="" />

          <div className="card-body d-flex flex-column">
            <div>
              <h5 className="align-left card-title">{name}</h5>
              <p className="align-right card-text">{score}</p>
            </div>

            <div className="row" />
          </div>
        </div>
      </div>
    );
  }
}

const mapStateToProps = state => ({});

const mapDispatchToProps = dispacth => {};
export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Payer);
