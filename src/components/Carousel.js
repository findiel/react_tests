import React, { Component } from 'react';
import '../css/carousel.css';

import edo1 from '../assets/carousel/52146404_2285307134836439_8626864219754594304_n.jpg';
import edo2 from '../assets/carousel/52263511_2128793170500870_6200383275777654784_n.png';
import edo3 from '../assets/carousel/52347519_235610323913102_42497528867848192_n.jpg';
import edo4 from '../assets/carousel/52599222_284619915538111_6737127718170656768_n.jpg';

let rotateInterval, angle, firstRotate;

class Carousel extends Component {
    constructor() {
        super()
        this.state = {
            isRotating: true,
            rotationAngle: 90
        }
        this.box = React.createRef();
        this.handleRotate = this.handleRotate.bind(this);
        this.toggleCarousel = this.toggleCarousel.bind(this);
    }

    componentDidMount() {
        this.handleRotate();
    }

    componentDidUpdate() {
        this.handleRotate();
    }

    componentWillUnmount() {
        clearInterval(rotateInterval);
    }

    handleRotate() {
        angle = this.state.rotationAngle;
        console.log(`Angle before interval: ${angle}`);
        if(this.state.isRotating) {
            let box = this.box.current;
            firstRotate = setTimeout(function() {
                console.log(`Angle while timeout: ${angle}`);
                box.style.transform = `rotateY(${angle}deg)`;
                box.style.transition = 'transform 2.5s ease'
                angle += 90;
            }, 500)
            rotateInterval = setInterval(function() {
                console.log(`Angle while interval: ${angle}`);
                box.style.transform = `rotateY(${angle}deg)`;
                box.style.transition = 'transform 3s ease'
                angle += 90;
        }, 4500)
        } else {
            clearInterval(rotateInterval);
        }
    }

    toggleCarousel(e) {
        this.setState({
            isRotating: !this.state.isRotating,
            rotationAngle: angle
        })
        if (this.state.isRotating) {
            //TODO: 
            //1. Navigate to clicked image (code below dosen't work)! 
            //2. Add arrows to change images!
            //3. Fix positioning
            //4. Remove ale console.log()

            // let box = this.box.current;
            // box.style.transform = `rotateY(${angle + (e.target.dataset.imageIndex * 90)}deg)`;
            // box.style.transition = 'transform 2.5s ease'
            // angle += e.target.dataset.imageIndex * 90;
            e.target.style.transform = 'translateX(-50%) translateY(-50%) scale(1.5)';
            e.target.style.transition = 'transform .5s ease-in';
        } else {
            e.target.style.transform = 'translateX(-50%) translateY(-50%) scale(1)';
            e.target.style.transition = 'transform .5s ease-in';
        }
    }

    render() {
        return (
            <div className="container">
                <div className="rotating-box">
                    <div className="rotating-box__rb" ref={this.box}>
                        <div className="rotating-box__front"><img src={edo1} alt="edo-photo1" onClick={this.toggleCarousel} data-image-index={0} /></div>
                        <div className="rotating-box__back"><img src={edo2} alt="edo-photo2" onClick={this.toggleCarousel} data-image-index={1} /></div>
                        <div className="rotating-box__left"><img src={edo3} alt="edo-photo3" onClick={this.toggleCarousel} data-image-index={2} /></div>
                        <div className="rotating-box__right"><img src={edo4} alt="edo-photo4" onClick={this.toggleCarousel} data-image-index={3}/></div>
                    </div>
                </div>
            </div>
        )
    }
}

export default Carousel;