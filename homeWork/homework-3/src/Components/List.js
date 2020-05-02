import React from 'react';

export function List(props) {

    return(
        <ol>
            {props.listItems.map((listItem, i) => {
                return(
                    <div key={i}>
                        <li key={listItem.id} className="position">
                            {listItem.todo} 
                        </li>&nbsp;
                        <button className="position" onClick={() => props.deleteItem(listItem.id)}>Delete</button>
                        <hr />
                    </div>
                )
            })}
        </ol>
    )
}