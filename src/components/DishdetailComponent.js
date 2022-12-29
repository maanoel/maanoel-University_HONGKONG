import React from "react";
import {
  Card,
  CardImg,
  CardText,
  CardBody,
  CardTitle,
  Breadcrumb,
  BreadcrumbItem,
} from "reactstrap";
import { Link } from "react-router-dom";

const DishDetail = (props) => {
  function RenderDish() {
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

  function RenderComments() {
    if (props.comments != null) {
      const commentsList = props.comments.map((comment) => {
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
        <div className="container">
        <div className="row">
            <Breadcrumb>
                <BreadcrumbItem><Link to="/menu">Menu</Link></BreadcrumbItem>
                <BreadcrumbItem active>{props.dish.name}</BreadcrumbItem>
            </Breadcrumb>
            <div className="col-12">
                <h3>{props.dish.name}</h3>
                <hr />
            </div>                
        </div>
        <div className="row">
            <div className="col-12 col-md-5 m-1">
                <RenderDish dish={props.dish} />
            </div>
            <div className="col-12 col-md-5 m-1">
                <RenderComments comments={props.comments} />
            </div>
        </div>
        </div>
    );
    } else return <div></div>;
  }

  function render() {
    if (props.dish != null)
      return (
        <div className="row">
          {RenderDish()}
          {RenderComments()}
        </div>
      );
    else return <div></div>;
  }

  return render();
};

export default DishDetail;
