import React from 'react';
import { Movie } from './Movie';

export class App extends React.Component {

    render() {
        const movies = [
            {
                cover: 'https://m.media-amazon.com/images/M/MV5BOWRhYWFkMDEtNTFjZC00OWJkLWJmMWQtNzI2OWRjZjVjOGYyXkEyXkFqcGdeQXVyMzQwMTY2Nzk@._V1_SY1000_CR0,0,692,1000_AL_.jpg',
                title: "Escape from Pretoria ",
                publicationYear: 2020,
                genre: "Action and Comedy",
                director: "Peter Berg",
                producedby: ['Mar Blaney', 'Jackie Sheppard', 'David Barron'],
                starring: ['Daniel Radicliffe', 'Daniel Webber', 'Ian Hart', 'Mark Leonard'],
                cinematography: 'Geoffrey Hall',
                runningTime: 106
            },
            {
                cover: 'https://m.media-amazon.com/images/M/MV5BMTdkOTEwYjMtNDA1YS00YzVlLTg0NWUtMmQzNDZhYWUxZmIyXkEyXkFqcGdeQXVyMTkxNjUyNQ@@._V1_.jpg',
                title: "Spenser Confidential ",
                publicationYear: 2020,
                genre: "Thriller",
                director: "Francis Annan",
                producedby: ['Neal H. Mortitz', 'Toby Ascher', 'Mark Wahlberg', 'Stephan Levinson', 'Peter Berg'],
                starring: ['Mark Wahlberg', 'Winston Duke', 'Alan Arking', 'Iliza Shlesinger', 'Marc Maron', 'Austin Post'],
                cinematography: 'Tobias A.Schliessler',
                runningTime: 111
            },
            {
                cover: 'https://m.media-amazon.com/images/M/MV5BOTdmNTFjNDEtNzg0My00ZjkxLTg1ZDAtZTdkMDc2ZmFiNWQ1XkEyXkFqcGdeQXVyNTAzNzgwNTg@._V1_.jpg',
                title: "1917",
                publicationYear: 2019,
                genre: "Thriller",
                director: "Sam Mendes",
                producedby: ['Sam Mendes', 'Pippa Harris', 'Jayne-Ann Tenggren', 'Callum McDougall', 'Brian Oliver'],
                starring: ['George MacKay', 'Dean-Charles Chapman', 'Mark Strong', 'Andrew Scott', 'Richard Madden', 'Claire Duburcq'],
                cinematography: 'Roger Deakins',
                runningTime: 119
            }

        ]

        return (
            <div id="app">
                <Movie data={movies} />
            </div>

        )
    }
}