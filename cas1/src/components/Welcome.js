import React from 'react';

class Welcome extends React.Component {

    render(){
        console.log(this.props);
        return(
            <div id="welcome">
                <h2>Welcome, {this.props.name} {this.props.prezime}</h2>
                <p>{this.props.age}</p>
                {this.props.flag ===true ? 
                    <h2>This is a conditional header 1</h2> : <h3>Conditional False</h3>}
                {
                    this.props.flag && <h2>This is a conditional header</h2>
                }
                
            </div>
        )
    }
}

export default Welcome;