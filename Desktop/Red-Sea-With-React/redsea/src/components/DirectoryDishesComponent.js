import React from 'react';
import { Card, CardImg, CardImgOverlay, CardTitle, } from 'reactstrap';


function RenderDirectoryItem({dish, onClick}) {
    return (
        <Card onClick={() => onClick(dish.id)} >
            <CardImg width='100%' src={dish.image} alt={dish.name} />
                <CardImgOverlay>
                    <CardTitle>{dish.name}</CardTitle>
                </CardImgOverlay>
        </Card>
    )
}


function Dish(props) {
    
    const dish = props.dishes.map(dish => {
        return (
            <div key={dish.id} className='col-md-3 m-1'>
                <RenderDirectoryItem dish={dish} onClick={props.onClick} />
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


export default Dish;