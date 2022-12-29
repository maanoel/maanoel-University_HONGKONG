import React, { Component } from "react";
import Menu from "./MenuComponent";
import DishDetail from "./DishdetailComponent";
import Header from "./HeaderComponent";
import Footer from "./FooterComponent";
import Contact from "./ContactComponent";
import Home from "./HomeComponent";
import { Switch, Route, Redirect, withRouter } from "react-router-dom";
import { connect } from "react-redux";
import { addComment } from "../redux/ActionCreators";

import About from "./AboutComponent";

class Main extends Component {
  constructor(props) {
    super(props);
    this.state = {
      selectedDish: null,
    };
  }

  onDishSelect(dishId) {
    this.setState({ selectedDish: dishId });
  }

  render() {
    if (Object.keys(this.props).length === 0) return <div></div>;

    const HomePage = () => {
      return (
        <Home
          dish={this.props.dishes.filter((dish) => dish.featured)[0]}
          promotion={this.props.promotions.filter((promo) => promo.featured)[0]}
          leader={this.props.leaders.filter((leader) => leader.featured)[0]}
        />
      );
    };

    const DishWithId = ({ match }) => {
      return (
        <DishDetail
          dish={
            this.props.dishes.filter(
              (dish) => dish.id === parseInt(match.params.dishId, 10)
            )[0]
          }
          comments={this.props.comments.filter(
            (comment) => comment.dishId === parseInt(match.params.dishId, 10)
          )}
          addComment={this.props.addComment}
        />
      );
    };

    return (
      <div>
        <Header />
        <div className="container">
          <Switch>
            <Route path="/home" component={HomePage} />
            <Route
              exact
              path="/menu"
              component={() => <Menu dishes={this.props.dishes} />}
            />
            <Route exact path="/contactus" component={Contact} />
            <Route
              exact
              path="/aboutus"
              component={() => <About leaders={this.props.leaders}></About>}
            />
            <Route path="/menu/:dishId" component={DishWithId} />

            <Redirect to="/home" />
          </Switch>
          <DishDetail
            dish={
              this.props.dishes.filter(
                (dish) => dish.id === this.state.selectedDish
              )[0]
            }
            comments={
              this.props.comments.filter(
                (comment) => comment.dishId === this.state.selectedDish
              )[0]
            }
          />
        </div>

        <Footer />
      </div>
    );
  }
}

const mapStateToProps = (state) => {
  if (!state) return {};

  return {
    state: Object.assign({}, state),
    dishes: state.dishes,
    comments: state.comments,
    promotions: state.promotions,
    leaders: state.leaders,
  };
};

const mapDispatchToProps = (dispatch) => ({
  addComment: (dishId, rating, author, comment) =>
    dispatch(addComment(dishId, rating, author, comment)),
});

export default withRouter(connect(mapStateToProps, mapDispatchToProps)(Main));
