import React, { Component } from 'react';
import { Link } from 'react-router-dom';

import Carousel from '../Carousel';

class CarouselPage extends Component {

    render() {
        return (
            <div>
                <h2>This is React Carousel. Click on img to see more cool stuff.</h2>
                <Carousel />
                <Link to="/">
                    <button> Back to main page </button>
                </Link>
            </div>
        )
    }
}

export default CarouselPage;