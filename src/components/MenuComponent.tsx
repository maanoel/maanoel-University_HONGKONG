import React from "react";
import { Component } from "react";
import { Card, CardImg, CardTitle, CardImgOverlay } from "reactstrap";

import DishDetail from "./DishdetailComponent.tsx";

class Menu extends Component {
  constructor(props) {
    super(props);

    this.state = { selectedDish: null, dishes: props.dishes };
  }

  onDishSelect(dish) {
    this.setState({ selectedDish: dish });
  }

  componentDidMount() {
    console.log("Teste");
  }

  render() {
    const menu = this.state.dishes.map((dish) => {
      return (
        <div className="col-xs-12 col-md-5 m-1">
          <Card key={dish.id} onClick={() => this.onDishSelect(dish)}>
            <CardImg src={dish.image} alt={dish.name} />
            <CardImgOverlay>
              <CardTitle>{dish.name}</CardTitle>
            </CardImgOverlay>
          </Card>
        </div>
      );
    });

    return (
      <div className="container">
        <div className="row">{menu}</div>
        <DishDetail dish={this.state.selectedDish}></DishDetail>
      </div>
    );
  }
}

export default Menu;
