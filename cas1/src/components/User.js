import React from 'react';

export class User extends React.Component {
    render() {
        return (
            <div id="user">
                <h2>Address: {this.props.korisnik.address}</h2>
            </div>
        )
    }
}