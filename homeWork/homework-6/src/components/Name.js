import React from 'react';
import {connect} from 'react-redux';
import {SayName} from '../actions/SayName';

class Name extends React.Component {
   componentDidMount(){
    this.props.sayName()
   } 
    render(){
        return(
        <h2>Name: {this.props.name}</h2>    
        )
    }
}
const mapStateToProps = (state) => {
    return {
      name: state.SayNameReducer.name
    }
  }
const mapDispatchToProps = (dispatch) => {
    return{
        sayName: ()=>{
            dispatch(SayName())
        }
    }
  }
  export default connect(mapStateToProps, mapDispatchToProps)(Name)