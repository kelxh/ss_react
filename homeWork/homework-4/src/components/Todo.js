import React from 'react';
import axios from 'axios';

export class Todo extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            todos: []
        }
    }
    fetchTodos = () => {
        axios({
            url: `https://jsonplaceholder.typicode.com/todos`,
            method: "GET"
        })
            .then(res => this.setState({
                todos: res.data.slice(0, 11)
            }))
            .catch(err => console.log(err))
    }
    componentDidMount() {
        this.fetchTodos();
    }

    render() {
        return (
            <div style={{
                    display: "flex",
                    flexDirection: "column",
                    justifyContent: "center",
                    alignItems: "center"
            }}>
                <h1>Todo</h1>
                {this.state.todos.map(todo =>
                    <p 
                        key={todo.id}
                        style={todo.completed ? {textDecoration: "line-through"}: null}
                        >{todo.title}</p>
                )}
            </div>
        )
    }
}