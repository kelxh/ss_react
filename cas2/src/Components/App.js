import React from 'react';
import { Car } from './Car';
import { Comments } from './Comments';
import { User } from './User';


export class App extends React.Component {

  render() {
    var tablici = {oznakaNaTablica: "SK-0000-AB"};
    
    var vozila = [
      { brand: "Ford", model: "Focus", year: 2001 },
      { brand: "Opel", model: "Astra", year: 2006 },
      { brand: "Opel", model: "Vectra", year: 2010 }
    ]

    var registracija = [
      { grad: "skopje", oznaka: "SK", tablica:tablici },
      { grad: "Kumanovo", oznaka:"KU", tablica:tablici },
      { grad: "Gostivar", oznaka: "GV", tablica:tablici }
    ]

    var komentari = [
      {author: "Filip", content: "This is a Comment"},
      {author: "Aleksander", content: "Slaba konekcija"},
      {author: "Petar", content: "Nemam mikrofon.."}
    ]

    return (
      <div id="app">
        <h2>Hello</h2>
        <Car cars={vozila} registration={registracija} />
        <Comments 
        broj={55} 
        cifra={1} 
        date={"23-03-2020"}
        comments={komentari}/>
        <User name={"filip"} lastName={"Dzukovski"}/>
        <User name={"Stefan"} lastName={"Stefanovski"}/>
        <User name={"Bogdan"} lastName={"Bogdanoski"}/>
      </div>
    )
  }
}