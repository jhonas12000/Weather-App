import React from 'react';
import { Link } from 'react-router-dom';


function Footer(props) {
    return (
        <footer className='site-footer'>
            <div className='container'>
                <div className='row'>
                    <div className='col-4 col sm-2 offset-1'>
                        <h5>Links</h5>
                        <ul className='list-unstyled'>
                            <li><Link to='/home'>Home</Link> </li>
                            <li><Link to='/dish'>Menu</Link> </li>
                            <li><Link to='/aboutus'>About Us</Link> </li>
                            <li><Link to='/contact'>Contact Us</Link> </li>
                        </ul>
                    </div>
                    <div className='col-6 col-sm-3 text-center'>
                        <h5>Social</h5>
                        <a className='btn btn-social-icon btn-instagram' href='http://instagram.com/'><i className='fa fa-instagram' /> </a>{' '}
                        <a className='btn btn-social-icon btn-facebook' href='http://www.facebook.com/'><i className='fa fa-facebook' /> </a>{' '}
                        <a className='btn btn-social-icon btn-twitter' href='http://twitter.com/'><i className='fa fa-twitter' /> </a>
                    </div>
                    <div className='col-sm-4 text-center'>
                        <a role='button' className='btn btn-link' href='tel:+15106652248'><i className='fa fa-phone' />1-510-665-2248 </a><br />
                        <a role='button' className='btn btn-link' href='mailto:redsea@gmail.com'><i className='fa fa-envelope-o' />redsea@gmail.com</a>
                    </div>
                </div>
            </div>
        </footer>
    )
}


export default Footer;