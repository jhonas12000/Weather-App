import React from 'react';
import { Card, CardImg, CardBody, CardTitle, CardText  } from 'reactstrap'



function RenderDish({dish}) {

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
    );
}    

function DishInfo (props) {
    if(props.dish) {
        return (
            <div className='container'>
                <div className='row'>
                    <RenderDish dish={props.dish} />
                </div>
            </div>
        )
    }
    return <div />
}


export default DishInfo;