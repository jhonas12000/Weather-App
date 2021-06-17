import React from 'react';

function Contact(props) {
    return (
        <div className="container">
            <div className="row">
                <div className="col">
                    <h2>Contact Us</h2>
                    <hr />
                </div>
            </div>

            <div className="row row-content align-items-center">
                <div className="col-sm-4">
                    <h5>Our Address</h5>
                    <address>
                        5200 Claremont Ave<br />
                        Oakland, CA 94618<br />
                        U.S.A.
                    </address>
                </div>
                <div className="col">
                    <a role="button" className="btn btn-link" href="tel:+15106553757"><i className="fa fa-phone" /> 1-510-655-3757</a><br />
                    <a role="button" className="btn btn-link" href="mailto:redsea@gmail.com"><i className="fa fa-envelope-o" /> redsea@gmail.com</a>
                </div>
            </div>
        </div>
    );
}

export default Contact;