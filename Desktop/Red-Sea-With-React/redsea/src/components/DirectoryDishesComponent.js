import React, { Component } from 'react';
import { Card, CardImg, CardImgOverlay, CardTitle, } from 'reactstrap';


class Dish extends Component {
    

    render() {
        const dish = this.props.dishes.map(dish => {
            return (
                <div key={dish.id} className='col-md-3 m-1'>
                    <Card onClick={() => this.props.onClick(dish.id)} >
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
            
                <div className='col'>
                    
                </div>
                
            </div>
        )
    }
}


export default Dish;