import React, { Component } from 'react';
import { Link } from 'react-router-dom';

import '../css/navbar.css';

class Navbar extends Component {
    
    render() {
        return (
            <div className="navbar-flex">
                <Link to="/">
                    HOME
                </Link>
                <Link to="/todo">
                    TODO
                </Link>
                <Link to="/carousel">
                    CAROSUEL
                </Link>
            </div>
        )
    }
}

export default Navbar;