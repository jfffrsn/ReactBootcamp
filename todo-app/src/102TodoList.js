import React, { Component } from 'react';
import Todo from './Todo';
import NewTodoForm from './NewTodoForm';
import './TodoList.css';

class TodoList extends Component {
    constructor(props){
        super(props);
        this.state = {todos: []}
        this.create = this.create.bind(this);
        this.remove = this.remove.bind(this);
    }

    create(newTodo) {
        this.setState({
            todos: [...this.state.todos, newTodo]
        })
    }

    remove(id) {
        this.setState({
            todos: this.state.todos.filter(t => t.id !== id )
        })
    }

    render() {
        const todos = this.state.todos.map(todo => {
            return <Todo 
            key={todo.id} 
            id={todo.id} 
            task={todo.task} 
            removeTodo={this.remove} 
            />
        })
        return (
            <div className='TodoList'>
                <h1>Todo List</h1>

                <ul>
                   {todos}
                </ul>
               <NewTodoForm createTodo={this.create}/>
            </div>
        );
    }
}

export default TodoList;