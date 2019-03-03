import React, { Component } from 'react';

class Test extends Component {

    render() {
        return (
            <h3>I'm test.</h3>
        )
    }
}

class Bryla {
    constructor(wysokosc, szerokosc) {
        this.wysokosc = wysokosc;
        this.szerokosc = szerokosc;
    }
}

class Kwadrat extends Bryla {
    constructor(wysokosc, szerokosc) {
        super(wysokosc, szerokosc)
        this.name = 'Kwadrat'
    }
}

const kwadrat = new Kwadrat(10, 10)

export default Test;