import React from 'react';
import {Link} from 'react-router-dom';

export function Navigation(){
    return <div>
        <h3 style={{display:"inline-block"}}><Link to="/photos">Photos-"Functional Component"</Link></h3> &nbsp;
        <h3 style={{display:"inline-block"}}><Link to="/todo">Todo-"Stateful-Class Component"</Link></h3>
    </div>
}