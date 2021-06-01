import React, { Component } from 'react';
import { Card, CardImg, CardImgOverlay, CardBody, CardTitle, CardText } from 'reactstrap';

class Dish extends Component {
    constructor(props) {
        super(props);
        this.state = {
            selectedDish: null
        };
    }

    onDishSelect(dish) {
        this.setState({selectedDish: dish})
    }

    renderSelectedDish(dish) {
        if(dish) {
            return(
                <Card>
                    <CardImg top src={dish.image} alt={dish.name} />
                    <CardBody>
                        <CardTitle>{dish.name}</CardTitle>
                        <CardText>{dish.description}</CardText>
                    </CardBody>
                </Card>
            ) 
        };
        return <div />
    }

    render() {
        const dish = this.props.dishes.map(dish => {
            return (
                <div key={dish.id} className='col-md-5 m-1'>
                    <Card onClick={() => this.onDishSelect(dish)} >
                        <CardImg width='100%' src={dish.image} alt={dish.name} />
                        <CardImgOverlay>
                            <CardTitle>{dish.name}</CardTitle>
                        </CardImgOverlay>
                    </Card>
                </div>
            )
        })
        return (
            <div className='container'>
                <div className='row'>
                    {dish}
                </div>
                <div className='row'>
                    <div className='col-md-5 m-1'>
                        {this.renderSelectedDish(this.state.selectedDish)}
                    </div>
                </div>
            </div>
        )
    }
}


export default Dish;