import React from 'react';
import Welcome from './Welcome';
import { User } from './User';
import { FruitsList } from './FruitsList';

export class App extends React.Component {
  render() {
    var user = {
      name: 'Kire',
      address: 'Mavrovo',
      age: 25,
      city: "Gostivar"
    }

    var fruits = ["banana", "apple", "potato"];
    return (
      <div id="app">
        <h2>Hello</h2>
        <Welcome
          name={"Filip"}
          prezime={'Dzukovski'}
          age={25}
          flag={true} />

        <User
          korisnik={user}
        />
        <FruitsList 
          ovosje={fruits}/>
      </div>
    );
  }
}

// PascalCase AppHeader
// camelCase camelCase
