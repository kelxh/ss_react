import React from 'react';
import {connect} from 'react-redux';
import {sayHello, SayHello} from './../actions/SayHello';
import {SayLastName} from './../actions/SayHello';


class Hello extends React.Component {

   componentDidMount(){
    this.props.sayHello()
    this.props.sayLastName()
   } 

    render(){
        return(
        <h2>Hello, {this.props.name} {this.props.lastName}</h2>
        )
    }
}

const mapStateToProps = (state) => {
    return {
      name: state.SayHelloReducer.name,
      lastName:state.SayHelloReducer.lastName
    }
  }
  
const mapDispatchToProps = (dispatch) => {
    return{
        sayHello: ()=>{
            dispatch(SayHello())
        },
        sayLastName: ()=> {
            dispatch(SayLastName())
        }
    }
  }

  export default connect(mapStateToProps, mapDispatchToProps)(Hello)