import React, { Component } from 'react';
import './Todo.css';

class Todo extends Component {
    constructor(props) {
        super(props);
        this.handleRmove = this.handleRmove.bind(this);
    }

    handleRmove(){
        this.props.removeTodo(this.props.id);
    }

    render() {
        return (
            <div className="Todo">
                <button>Edit</button>
                <button onClick={this.handleRmove}>X</button>
                <li>{this.props.task}</li>
            </div>
        );
    }
}

export default Todo;