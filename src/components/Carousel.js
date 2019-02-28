import React, { PureComponent } from 'react';
import '../css/carousel.css';
import Fab from '@material-ui/core/Fab';
import IconArrowRight from '@material-ui/icons/KeyboardArrowRight';
import IconArrowLeft from '@material-ui/icons/KeyboardArrowLeft';

import edo1 from '../assets/carousel/52146404_2285307134836439_8626864219754594304_n.jpg';
import edo2 from '../assets/carousel/52263511_2128793170500870_6200383275777654784_n.png';
import edo3 from '../assets/carousel/52347519_235610323913102_42497528867848192_n.jpg';
import edo4 from '../assets/carousel/52599222_284619915538111_6737127718170656768_n.jpg';

let rotationInterval, angle, firstRotateTimeout, box;

class Carousel extends PureComponent {
    constructor() {
        super()
        this.state = {
            isRotating: true,
            rotationAngle: 90
        }
        this.box = React.createRef();
        this.handleRotate = this.handleRotate.bind(this);
        this.toggleCarousel = this.toggleCarousel.bind(this);
        this.changeImg = this.changeImg.bind(this);
    }

    componentDidMount() {
        this.handleRotate(90);
    }

    componentDidUpdate() {
        this.handleRotate(90);
    }

    componentWillUnmount() {
        clearInterval(rotationInterval);
    }

    handleRotate(direction) {
        console.log("rerendred: " + this.state.rotationAngle);
        clearInterval(rotationInterval);
        box = this.box.current;
        angle = this.state.rotationAngle;
        if(this.state.isRotating) {
            firstRotateTimeout = setTimeout(function() {
                box.style.transform = `rotateY(${angle}deg)`;
                box.style.transition = 'transform 2.5s ease'
                angle += direction;
            }, 500)
            rotationInterval = setInterval(function() {
                box.style.transform = `rotateY(${angle}deg)`;
                box.style.transition = 'transform 3s ease'
                angle += direction;
            }, 4500)
        } else {
            clearInterval(rotationInterval);
        }
    }

    toggleCarousel(e) {
        this.setState({
            isRotating: !this.state.isRotating,
            rotationAngle: angle
        })
        if (this.state.isRotating) {
            e.target.style.transform = 'translateX(-50%) translateY(-50%) scale(1.5)';
            e.target.style.transition = 'transform .5s ease-in';
        } else {
            e.target.style.transform = 'translateX(-50%) translateY(-50%) scale(1)';
            e.target.style.transition = 'transform .5s ease-in';
        }
    }

    changeImg(direction) {
        this.setState({
            rotationAngle:  angle
        }, function() {
            console.log("change img (f):" + this.state.rotationAngle);
        })
    }

    render() {
        return (
            <div className="container">
                <Fab style={{ marginLeft: '.8rem'}} onClick={ () => this.changeImg(-90)}>
                    <IconArrowLeft />
                </Fab>
                <div className="rotating-box">
                    <div className="rotating-box__rb" ref={this.box}>
                        <div className="rotating-box__front"><img src={edo1} alt="edo-photo1" onClick={this.toggleCarousel} data-image-index={0} /></div>
                        <div className="rotating-box__back"><img src={edo2} alt="edo-photo2" onClick={this.toggleCarousel} data-image-index={1} /></div>
                        <div className="rotating-box__left"><img src={edo3} alt="edo-photo3" onClick={this.toggleCarousel} data-image-index={2} /></div>
                        <div className="rotating-box__right"><img src={edo4} alt="edo-photo4" onClick={this.toggleCarousel} data-image-index={3}/></div>
                    </div>
                </div>
                <Fab style={{ marginRight: '.8rem'}} onClick={ () => this.changeImg(90)}>
                    <IconArrowRight />
                </Fab>
            </div>
        )
    }
}

export default Carousel;