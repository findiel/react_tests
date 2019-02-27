import React, { Component } from 'react';
import { Link } from 'react-router-dom';

import '../css/navbar.css';

class Navbar extends Component {
    
    render() {
        return (
            <div className="navbar-flex">
                <Link to="/react_tests">
                    HOME
                </Link>
                <Link to="/react_tests/todo">
                    TODO
                </Link>
                <Link to="/react_tests/carousel">
                    CAROSUEL
                </Link>
            </div>
        )
    }
}

export default Navbar;