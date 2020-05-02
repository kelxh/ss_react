import React from 'react';
import axios from 'axios';
import { TodoList } from './TodoList';
import { About } from './About';
import { Switch, Route, Link } from 'react-router-dom';

//To start fake REST 
//npx json-server -p 3001 --watch db.json
//db.json has some data from https://jsonplaceholder.typicode.com/todos

export class App extends React.Component {
    constructor(props) {
        super(props)
        this.state = ({
            todos: []
        })
    }
    fetchData = () => {
        axios.get('http://localhost:3001/todos')
            .then((res) => this.setState({
                todos: res.data
            }))
    }
    componentDidMount() {
        this.fetchData();
    }

    handleDoneClick = (todo) => {
        const updatedTodo = { ...todo, completed: !todo.completed };
        axios.put(`http://localhost:3001/todos/${todo.id}`, updatedTodo)
            .then(() => this.fetchData())
        console.log(this.state.todos)
    }

    handleDeleteClick = (id) => {
        console.log('id', id)
        axios.delete(`http://localhost:3001/todos/${id}`)
            .then(() => this.fetchData())
    }

    render() {
        return (
            <div>
                <ul>
                    <li><Link to="/home">Home</Link></li>
                    <li><Link to="/about">About</Link></li>
                </ul>
                <Switch>
                    <Route path="/home" render={() => {
                        return (
                            <TodoList
                                todos={this.state.todos}
                                handleDeleteClick={this.handleDeleteClick}
                                handleDoneClick={this.handleDoneClick} />
                        )
                    }} />
                    <Route path="/about" component={About} />
                </Switch>
            </div>
        )
    }
}


