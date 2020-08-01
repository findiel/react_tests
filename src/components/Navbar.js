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
                    CAROSUSEL
                </Link>
                <Link to="/react_tests/signature">
                    SIGNATURE CANVAS
                </Link>
                <Link to="/react_tests/tests">
                    TESTS
                </Link>
            </div>
        )
    }
}

export default Navbar;