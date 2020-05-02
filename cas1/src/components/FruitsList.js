import React from 'react';

export class FruitsList extends React.Component {

    render() {
        console.log(this.props);
        return (
            <div id="fruits">
                <h2>Furits {this.props.ovosje}</h2>
                {this.props.ovosje.map((fruit, i) => {
                    return (
                        <h3 key={i}>{fruit}</h3>
                    )
                })}
            </div>
        )
    }
}