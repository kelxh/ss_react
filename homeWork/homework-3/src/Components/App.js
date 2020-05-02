import React from 'react';
import { List } from './List';
import './App.css';

export class App extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            list: [
                { id: 1, todo: "Learn React", edit: false },
                { id: 2, todo: "Learn Node JS", edit: false },
                { id: 3, todo: "Learn Html & CSS", edit: false }
            ],
            newItem: ""
        }
    }
    handleChange = (event) => {
        this.setState({
            [event.target.name]: [event.target.value]
        })
    }

    addTodo = (nItem) => {
        console.log(nItem)
        this.setState({
            list: this.state.list.concat({
                id: this.state.list.length + 1,
                todo: nItem.toString(),
                edit: false
            }),
            newItem: ""
        })
    }
    deleteItem = (itemId) => {
        // console.log('delete')
        // console.log(itemId);
        this.setState({
            list: [...this.state.list.filter(item => item.id !== itemId)]
        })
    }
   
    render() {
        console.log(this.state);
        return (
            <div id="app">
                <div>
                    <input
                        type="text"
                        name="newItem"
                        value={this.state.newItem}
                        placeholder="Add new item"
                        onChange={this.handleChange}
                        className="positon"
                    />
                    <button onClick={() => this.addTodo(this.state.newItem)}>Add</button>
                    
                </div>
                <List listItems={this.state.list} deleteItem={this.deleteItem}/>
            </div>
        )
    }
}