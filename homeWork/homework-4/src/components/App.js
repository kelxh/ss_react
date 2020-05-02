import React from 'react';
import axios from 'axios';
import { Switch, Route, Link } from 'react-router-dom';
import { Photos } from './Photos';
import { Todo } from './Todo';
import { Navigation } from './Navigation';

export class App extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      photos: []
    }
  }
  fetchPosts = () => {
    axios({
      url: `https://jsonplaceholder.typicode.com/photos`,
      method: "GET"
    })
      .then(res => this.setState({
        photos: res.data.slice(0, 11)
      }))
      .catch(err => {
        console.log(err);
      })
  }

  componentDidMount() {
    this.fetchPosts();
  }

  render() {
    return (
      <div id="app">
        <Navigation />
        <Switch>
          <Route exact path="/photos" render={() =>
            <Photos photos={this.state.photos} />
          } />
          <Route path="/todo" component={Todo} />
        </Switch>
      </div>
    )
  }
}
