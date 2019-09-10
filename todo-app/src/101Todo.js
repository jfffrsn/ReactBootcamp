import React, { Component } from 'react';
import './Todo.css';

class Todo extends Component {
    render() {
        return (
            <div className="Todo">
                <button>Edit</button>
                <button>X</button>
                <li>{this.props.task}</li>
            </div>
        );
    }
}

export default Todo;