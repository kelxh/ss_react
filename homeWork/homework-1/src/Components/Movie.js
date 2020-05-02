import React from 'react';


export class Movie extends React.Component {

    render() {
        const imgStyle = {
            width: '200px',
            height: '300px',
        };

        return (
            <div id="app">
                {this.props.data.map((movie, i) => {
                    return <ul key={i}>
                        <img src={movie.cover} style={imgStyle}></img>
                        <li>
                            Title: <span style={{ fontWeight: 'bold' }}>{movie.title}</span>
                        </li>
                        <li>
                            Publication Year: <span style={{ fontWeight: 'bold' }}>{movie.publicationYear}</span>
                        </li>
                        <li>
                            Genre: <span style={{ fontWeight: 'bold' }}>{movie.genre}</span>
                        </li>
                        <li>
                            Director: <span style={{ fontWeight: 'bold' }}>{movie.director}</span>
                        </li>
                        <li>
                            Produced by: <span style={{ fontWeight: 'bold' }}>{movie.producedby.join(', ')} </span>
                        </li>
                        <li>
                            Starring: <span style={{ fontWeight: 'bold' }}>{movie.starring.join(', ')} </span>
                        </li>
                        <li>
                            Cinematography by: <span style={{ fontWeight: 'bold' }}>{movie.cinematography}</span>
                        </li>
                        <li>
                            Running time: <span style={{ fontWeight: 'bold' }}>{movie.runningTime}</span>
                        </li>
                    </ul>
                })}
            </div>
        )
    }
}