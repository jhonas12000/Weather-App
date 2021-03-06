import React, { Component } from 'react';
import { Nav, Navbar, NavbarBrand, NavbarToggler, Collapse, NavItem,  Jumbotron } from 'reactstrap';
import {  NavLink } from 'react-router-dom';


class Header extends Component {

    constructor(props) {
        super(props);
        this.toggleNav = this.toggleNav.bind(this);
        this.state = {
            isNavOpen: false
        };
    }
    toggleNav() {
        this.setState({
            isNavOpen: !this.state.isNavOpen
        });
    }
    render () {
        return (
            <React.Fragment>
                <Jumbotron fluid>
                    <div className='container'>
                        <div className='row'>
                            <div className='col'>
                                <h1>Red Sea</h1>
                                <h2>East African Eatery</h2>
                            </div>
                        </div>
                    </div>
                </Jumbotron>
                <Navbar dark sticky='top' expand='md'>
                    <div className='container'>
                    <NavbarBrand className="mr-auto" href="/"><img src="/assets/rimages/logo.png" height="100" width="100" alt="Restaurant Logo" /></NavbarBrand>
                        <NavbarToggler onClick={this.toggleNav} />
                        <Collapse isOpen={this.state.isNavOpen} navbar>
                            <Nav navbar>
                                <NavItem>
                                    <NavLink className='nav-link' to='/home'>
                                        <i className='fa fa-home fa-lg' /> Home
                                    </NavLink>
                                    <NavLink className='nav-link' to='/dish'>
                                        <i className='fa fa-list fa-lg' /> Menu
                                    </NavLink>
                                    <NavLink className='nav-link' to='/aboutus'>
                                        <i className='fa fa-info fa-lg' /> About Us
                                    </NavLink>
                                    <NavLink className='nav-link' to='/contact'>
                                        <i className='fa fa-address-card fa-lg' /> Contact Us
                                    </NavLink>
                                </NavItem>
                            </Nav>
                        </Collapse>
                    </div>
                </Navbar>
            </React.Fragment>
        )
    }
}

export default Header;
