import React, { Component } from 'react';
import { Navbar, NavbarBrand } from 'reactstrap';
import Dish from './DirectoryDishesComponent';
import DishInfo from './DishesInfoComponent';
import { DISHES } from '../shared/dishes';


class Main extends Component {
  constructor(props) {
    super(props);
    this.state = {
      dishes: DISHES,
      selectedDish: null
    }
  }

  onDishSelect(dishId) {
    this.setState({selectedDish: dishId})
}

  render() {
    return (
      <div>
        <Navbar dark color='danger'>
          <div className='container'>
            <NavbarBrand href='/'>Red Sea</NavbarBrand>
          </div>
        </Navbar>
        <Dish dishes = {this.state.dishes} onClick={dishId => this.onDishSelect(dishId)}/>
        <DishInfo dish={this.state.dishes.filter(dish => dish.id === this.state.selectedDish)[0]} />
      </div>
    )
  }
}


export default Main;
