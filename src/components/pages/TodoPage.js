import React, { Component } from 'react';
import { Link } from 'react-router-dom';

import Todo from '../Todo';

class TodoPage extends Component {

    render() {
        return (
            <div>
                <h2>This is simple react TODO list. Type any todo task and hit the button.</h2>
                <Todo />
                <Link to="/">
                    <button> Back to main page </button>
                </Link>
            </div>
        )
    }
}

export default TodoPage;