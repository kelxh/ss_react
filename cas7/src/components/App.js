import React from 'react';
import {Switch, Route, Link} from 'react-router-dom';
import {Gallery} from './Gallery'
import axios from 'axios'
import base_url from '../constants'

export class App extends React.Component {
 constructor(props){
   super(props)
   this.state = {
     photos:[],
     selectedPhoto:""
   }
 }

 fetchPhotos = () => {
  axios({
    url: `${base_url}/photos`,
    method: "GET"
  })
    .then(res => this.setState({
      photos: res.data
    }))
    .catch(err => {
      console.log(err);
    })
}

componentDidMount() {
  this.fetchPhotos();
}
openPhoto = (photoUrl) => {
  this.setState({
    selectedPhoto:photoUrl
  })
}

closePhoto = () => {
  this.setState({
    selectedPhoto:""
  })
}

  render() {
    console.log(this.state)
    return (
      <div id="app">
        <ul>
          <li><Link to="/">Home</Link></li>
          <li><Link to="/gallery">Gallery</Link></li>
        </ul>
        <Switch>
          <Route path="/gallery" render={()=>{
            return(
              <Gallery 
                closePicture={this.closePhoto}
                popupPhoto={this.state.selectedPhoto}
                openPhoto={this.openPhoto}
                photoList={this.state.photos}/>
            )
          }}/>
        </Switch>
      </div>
    )
  }
}



