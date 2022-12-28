import React from "react";
import { Card, CardImg, CardBody, CardTitle, CardText } from "reactstrap";

import { Component } from "react";

class DishDetail extends Component {
  constructor(props) {
    super(props);

    this.state = {
      dish: props.dish,
    };
  }

  render() {
    if (this.props.dish != null)
      return (
        <div className="row">
          <div className="row col-xs-12 col-sm-12 col-md-5 col-lg-5 m-1">
            <Card>
              <CardImg
                top
                src={this.props.dish.image}
                alt={this.props.dish.name}
              ></CardImg>
              <CardBody>
                <CardTitle>{this.props.dish.name}</CardTitle>
                <CardText>{this.props.dish.description}</CardText>
              </CardBody>
            </Card>
          </div>
        </div>
      );
    else return <div></div>;
  }
}

export default DishDetail;
