import React, { Component } from 'react';
import { Navbar, NavbarBrand } from 'reactstrap';
import Dish from './components/DishesComponent';
import { DISHES } from './shared/dishes';
import './App.css';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      dishes: DISHES
    }
  }

  render() {
    return (
      <div className='App'>
        <Navbar dark color='danger'>
          <div className='container'>
            <NavbarBrand href='/'>Red Sea</NavbarBrand>
          </div>
        </Navbar>
        <Dish dishes = {this.state.dishes} />
      </div>
    )
  }
}


export default App  ;
