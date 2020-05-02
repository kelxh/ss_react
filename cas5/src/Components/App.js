import React from 'react';
import { Todos } from './Todos'
export class App extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      days: ["Monday", "Tuesday", "Wednesday"],
      car: {
        model: "Volvo",
        year: 2009
      },
      todos: [
        { id: 1, todo: "React Course", done: false },
        { id: 2, todo: "Eat lunch", done: false },
        { id: 3, todo: "Go to sleep", done: false }
      ],
      newTodo: ""
    }

  }

  updateCar = (carModel, carYear) => {
    this.setState({
      car: {
        ...this.state.car,
        model: carModel,
        year: carYear
      }
    })
  }

  addDays = () => {
    this.setState({
      days: ["Sunday", ...this.state.days, "Thursdays"]
    })
  }
  /////
  handleChange = (event) => {
    this.setState({
      [event.target.name]: event.target.value
    })
  }

  addTodo = (item) => {
    if (item !== "") {
      var objekt = {
        id: this.state.todos.length + 1,
        todo: item,
        done: false
      }
      this.setState({
        todos: [...this.state.todos, objekt],
        newTodo: ""
      })
    }
    else {
      alert("vnesi vrednost");
    }

  }

  markedCheckedTodos = (todoObject) => {
    this.setState({
      todos: [...this.state.todos.map(row =>
        (row.id === todoObject.id) ? { id: row.id, todo: row.todo, done: !row.done } : row)]
    })
  }


  render() {
    return (
      <div id="app">
        {/* <h2>{this.state.car.model}</h2>
        <p>{this.state.car.year}</p>
        <button
          type="button"
          onClick={() => this.updateCar("Nissan", 2012)}>
          Change Details
        </button>
        {this.state.days.map((day, i) => {
          return (
            <p key={i}>{day}</p>
          )
        })}
        <button type="button" onClick={() => this.addDays()}>Add Days</button> */}
        <input
          type="text"
          name="newTodo"
          value={this.state.newTodo}
          name="newTodo"
          placeholder="Add new todo"
          onChange={this.handleChange}
        />
        <button
          onClick={() => this.addTodo(this.state.newTodo)}>
          Add Todo
        </button>
        <Todos markChecked={this.markedCheckedTodos} todoList={this.state.todos} />
      </div>
    )
  }
}


