import React, { Component } from 'react';
import { Card, CardImg, CardBody, CardTitle, CardText  } from 'reactstrap'



class DishInfo extends Component {

    renderDish(dish) {
        return (
            <div className='col-md-5 m-1'>
                <Card>
                    <CardImg top src={dish.image} alt={dish.name} />
                    <CardBody>
                        <CardTitle>{dish.name}</CardTitle>
                        <CardText>{dish.description}</CardText>
                    </CardBody>
                </Card>
            </div>
        )
    }

    render () {
        if(this.props.dish) {
            return (
                <div className='container'>
                    <div className='row'>
                        {this.renderDish(this.props.dish)}
                    </div>
                </div>
            )
        }
        return <div />
    }

}
export default DishInfo;