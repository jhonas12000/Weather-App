import React, { Component } from 'react';
import { Switch, Route, Redirect } from 'react-router-dom';
import Dish from './DirectoryDishesComponent';
import Header from './HeaderComponent';
import Footer from './FooterComponent';
import Home from './HomeComponent';
import Contact from './ContactComponent';
import { DISHES } from '../shared/dishes';
import { COMMENTS } from '../shared/comments';


class Main extends Component {
  constructor(props) {
    super(props);
    this.state = {
      dishes: DISHES,
      comments: COMMENTS
    }
  }


  render() {
    const HomePage = () => {
      return (
        <Home
            dish = {this.state.dishes.filter(dish => dish.favorite)[0]}
         />
      )
    }
    return (
      <div>
        <Header />
        <Switch>
          <Route path='/home' component={HomePage} />
          <Route exact path='/dish' render={() => <Dish dishes = {this.state.dishes} />}  />
          <Route exact path='/contact' component={Contact} />
          <Redirect to='/home' />
        </Switch>
        <Footer />
      </div>
    )
  }
}


export default Main;
