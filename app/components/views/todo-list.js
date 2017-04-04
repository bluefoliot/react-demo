import React from 'react';
import Todo from './todo';

class TodoList extends React.Component {

    render(){
        let todos = [];
        this.props.todoList.forEach((todo, index) => {
            todos.push(<Todo key={index} title={todo['title']}></Todo>);
        })
        return (
            <div className="row">
              {todos}
            </div>
        )
    }

}

export default TodoList;
