import React, { Component } from 'react';
import { Link } from 'react-router-dom';

class MainPage extends Component {

    render() {
        return (
            <div>
                <h2>This is only my testing page. To see some cool stuff in REACT click one of buttons below.</h2>
                <Link to="/react_tests/todo">
                    <button> Go to simple TODO list </button>
                </Link>
                <Link to="/react_tests/carousel">
                    <button> Go to React Carousel </button>
                </Link>
            </div>
        )
    }
}

export default MainPage;