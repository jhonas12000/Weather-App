import React, { Component } from 'react';
import { Navbar, NavbarBrand, Jumbotron } from 'reactstrap';


class Header extends Component {
    render () {
        return (
            <React.Fragment>
                <Jumbotron fluid>
                    <div className='container'>
                        <div className='row'>
                            <div className='column'>
                                <h1>Red Sea</h1>
                                <h2>East African Eatery</h2>
                            </div>
                        </div>
                    </div>
                </Jumbotron>
                <Navbar dark sticky='top'>
                    <div className='container'>
                        <NavbarBrand href='/'>Red Sea</NavbarBrand>
                    </div>
                </Navbar>
            </React.Fragment>
        )
    }
}

export default Header;
