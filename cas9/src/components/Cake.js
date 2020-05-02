import React from 'react';
import {connect} from 'react-redux';
import {buyCake} from './../actions/CakeActions';

class Cake extends React.Component {

    render(){
        return(
            <div id="cake">
               <h2>Broj na Torti:{this.props.torti}</h2> 
               <button
               onClick={() => {
                   this.props.kupiTorta(this.props.torti)
               }}>Buy Cake</button>
            </div>
        )
    }
}
const mapStateToProps = (state) => {
    return {
        torti: state.CakeReducer.cakes
    }
}

const mapDispatchToProps = (dispatch) => {
    return {
        kupiTorta: (cake) => {
            dispatch(buyCake(cake))
        }
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(Cake)