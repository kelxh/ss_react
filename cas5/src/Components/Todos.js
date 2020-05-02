import React from 'react';

export class Todos extends React.Component {

    render() {
        return (
            <div>
                <ol>
                    {this.props.todoList.map((todo, i) => {
                        return (
                            <li className={todo.done ? "marked-done" : ""}key={i}>
                                <span>{todo.todo}</span>
                                <input 
                                    type="checkbox"
                                    checked={todo.done}
                                    value={todo.done}
                                    onChange={() => this.props.markChecked(todo)}
                                />
                            </li>
                        )
                    })}
                </ol>
            </div>
        )
    }
}