import React from 'react';
import { Card, CardBody, CardImg, CardText, CardTitle } from 'reactstrap';

function RenderCard({item}) {
    return (
        <Card>
            <CardImg src={item.image} alt={item.name} />
            <CardBody>
                <CardTitle>{item.name}</CardTitle>
                <CardText>{item.description}</CardText>
            </CardBody>
        </Card>
    );
};

function Home(props) {
    return (
        <div className='contaier'>
            <div className='row'>
                <div className='col-md-6 m-1'>
                    <RenderCard item={props.dish} />
                </div>
            </div>
        </div>
    );
};

export default Home;