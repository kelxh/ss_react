import React from 'react';
import ReactDOM from 'react-dom';
import {BrowserRouter, Route}from 'react-router-dom'
import {App}from './components/App'

//To start fake REST 
//npx json-server -p 3001 --watch db.json
//db.json has some data from https://jsonplaceholder.typicode.com/todos

ReactDOM.render(
  <BrowserRouter>
    <Route path="/" component={App}/>  
  </BrowserRouter>,
  document.getElementById('root')
);

