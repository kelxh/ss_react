import React from 'react';
import {Switch, Route} from 'react-router-dom'
import {Contact} from './Contact';
import {About} from './About';
import {Home} from './Home'
import {Navigation} from './Navigation';
import {UserList} from './UserList';
import axios from 'axios';



export class App extends React.Component {
  constructor(props){
    super(props)
    this.state={
        users:[]
    }
}

componentDidMount(){
    this.fetchUsers();
}

fetchUsers = () => {
    axios({
        url:`https://jsonplaceholder.typicode.com/users`,
        method: "GET",
    })
    .then(res => {
       this.setState({
           users:res.data
       })
    })
    .catch(err => {
        alert(err)
    })
}

  render(){
    return(
      <div id="app">
        <h2>Hello</h2>
        <Navigation />
        <Switch>
          <Route exact path="/home" component={Home} />
          <Route path="/home/contact" component={Contact} />
          <Route path="/about" component={About} />
          <Route path="/user-list" render={() => {
            return <UserList users={this.state.users} />
          }} />
        </Switch>
      </div>
    )
  }
}

