import React from "react";
import { Card, CardImg, CardBody, CardTitle, CardText } from "reactstrap";

const DishDetail = (props) => {

  function renderDish() {
    if (props.dish != null) {
      return (
        <div className="row col-xs-12 col-sm-12 col-md-5 col-lg-5 m-1">
          <Card>
            <CardImg top src={props.dish.image} alt={props.dish.name}></CardImg>
            <CardBody>
              <CardTitle>{props.dish.name}</CardTitle>
              <CardText>{props.dish.description}</CardText>
            </CardBody>
          </Card>
        </div>
      );
    } else return <div></div>;
  }

  function renderComments() {
    if (props.dish.comments != null) {
      const commentsList = props.dish.comments.map((comment) => {
        return (
          <li>
            <div className="row">{comment.comment}</div>
            <div className="mt-1"></div>
            <div className="row">{comment.author}</div>
            <div className="row">
              {new Intl.DateTimeFormat("en-US", {
                year: "numeric",
                month: "short",
                day: "2-digit",
              }).format(new Date(Date.parse(comment.date)))}
            </div>
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

  function render() {
    if (props.dish != null)
      return (
        <div className="row">
          {renderDish()}
          {renderComments()}
        </div>
      );
    else return <div></div>;
  }

  return render();
};

export default DishDetail;
