import React from 'react';

export const TodoList = ({ todos, handleDeleteClick, handleDoneClick }) => {
    return (
        <div style={{
            display: "flex",
            flexDirection: "column",
            justifyContent: "center",
            alignItems: "center"}}
            >
            <table border="1">
                <thead>
                    <tr>
                        <th>todo</th>
                        <th>delete</th>
                        <th>do/done</th>
                    </tr>
                </thead>
                <tbody>
                    {
                        todos.map(todo =>
                            <tr key={todo.id}>
                                <td style={todo.completed ? {textDecoration: "line-through"}: null}>{todo.title}</td>
                                <td>
                                    <button onClick={() => handleDeleteClick(todo.id) }>Delete</button>
                                </td>
                                <td>
                                    <button onClick={() => handleDoneClick(todo) }>{todo.completed ? 'Done': 'Do'}</button>
                                </td>
                            </tr>
                        )
                    }
                </tbody>
            </table>
        </div>
    )
}