import React from "react";
import { Card, CardImg, CardBody, CardTitle, CardText } from "reactstrap";

import { Component } from "react";

class DishDetail extends Component {
  constructor(props) {
    super(props);

    this.state = {};
  }

  renderDish(dish) {
    if (dish != null) {
      return (
        <div className="row col-xs-12 col-sm-12 col-md-5 col-lg-5 m-1">
          <Card>
            <CardImg top src={dish.image} alt={dish.name}></CardImg>
            <CardBody>
              <CardTitle>{dish.name}</CardTitle>
              <CardText>{dish.description}</CardText>
            </CardBody>
          </Card>
        </div>
      );
    } else return <div></div>;
  }

  renderComments(comments) {
    if (comments != null) {
      const commentsList = comments.map((comment) => {
        return (
          <li>
            <div className="row">{comment.comment}</div>
            <div className="mt-1"></div>
            <div className="row">{comment.author}</div>
          </li>
        );
      });

      return (
        <div>
          <div className="row col-xs-12 col-sm-12 col-md-5 col-lg-5 m-1">
            <h1>Comments</h1>
          </div>
            <div className="row col-xs-12 col-sm-12 col-md-12 col-lg-12 ml-3">
              <ul className="list-unstyled">{commentsList}</ul>
          </div>
        </div>
      );
    } else return <div></div>;
  }

  render() {
    if (this.props.dish != null)
      return (
        <div className="row">
          {this.renderDish(this.props.dish)}
          {this.renderComments(this.props.dish.comments)}
        </div>
      );
    else return <div></div>;
  }
}

export default DishDetail;
