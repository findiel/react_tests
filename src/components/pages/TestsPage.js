import React, { Component } from 'react';
import { Link } from 'react-router-dom';


import Test from '../Test'

class TestsPage extends Component {

    render() {
        return (
            <div>
                <h2>I'm only for test purposes here!</h2>
                <Test />
                <Link to="/react_tests">
                    <button>
                        Back to main page
                    </button>
                </Link>
            </div>
        )   
    }
}

export default TestsPage;