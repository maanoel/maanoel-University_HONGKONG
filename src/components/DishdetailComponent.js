import React from "react";
import {
  Card,
  CardImg,
  CardText,
  CardBody,
  CardTitle,
  Button,
  Modal,
  ModalHeader,
  ModalBody,
  ModalFooter,
  Form,
  FormGroup,
  Label,
  Input,
  FormFeedback,
  Alert
} from "reactstrap";


import { Component } from "react";

  
class DishDetail extends Component {
  constructor(props) {
    super(props);

    this.state = {
      isModalOpen: false,
      name: undefined,
    };

    this.toggleModal = this.toggleModal.bind(this);
    // this.handleLogin = this.handleLogin.bind(this);
  }

  toggleModal() {
    this.setState({
      isModalOpen: !this.state.isModalOpen,
    });
  }

  setName(name){
    debugger;
    alert('oi'+ name);
    this.setState({name: name})
  }

  RenderDish() {
    if (this.props.dish != null) {
      return (
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
      );
    } else return <div></div>;
  }

  RenderComments() {
    if (this.props.comments != null) {
      const commentsList = this.props.comments.map((comment) => {
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
        <div className="col-12 col-md-4 m-1">
          <h1>Comments</h1>
          {commentsList}
          <Button onClick={() => this.toggleModal()}>Subimit Comment</Button>

          <Modal
            isOpen={this.state.isModalOpen}
            toggle={this.toggleModal}
            fade={false}
          >
            <ModalHeader toggle={this.toggleModal}>Submit Comment</ModalHeader>
            <ModalBody>
              <Form>
                <FormGroup>
                  <Label for="rating">Rating</Label>
                  <Input
                    type="number"
                    name="rating"
                    id="rating"
                    placeholder="Enter a rating"
                  />
                </FormGroup>
                <FormGroup>
                  <Label for="name">Your Name</Label>
                  <Input
                    type="text"
                    name="name"
                    id="name"
                    placeholder="Your name"
                    onBlur={(e)=> this.setName(e.target.value)}
                    invalid={()=> this.state?.name?.length < 2 || this.state?.name?.length > 15}
                    valid={()=> this.state?.name?.length > 2 && this.state?.name?.length <= 15}
                  />
                </FormGroup>
                <FormFeedback
                    className="text-danger"
                    model=".telnum"
                    show="touched"
                    messages={{
                      required: "Required",
                      minLength: "Must be greater than 1 numbers",
                      maxLength: "Must be 15 numbers or less",
                      isNumber: "Must be a number",
                    }}
                  />
                <FormGroup>
                  <Label for="comment">Comment</Label>
                  <Input type="textarea" name="comment" id="comment" rows="6" cols="6"/>
                </FormGroup>
              </Form>
            </ModalBody>
            <ModalFooter>
              <Button color="primary" onClick={this.toggleModal}>
                Do Something
              </Button>
              <Button color="secondary" onClick={this.toggleModal}>
                Cancel
              </Button>
            </ModalFooter>
          </Modal>
        </div>
      );
    } else return <div></div>;
  }

  render() {
    if (this.props != null)
      return (
        <div className="row">
          {this.RenderDish()}
          {this.RenderComments()}
        </div>
      );
    else return <div></div>;
  }
}

export default DishDetail;
