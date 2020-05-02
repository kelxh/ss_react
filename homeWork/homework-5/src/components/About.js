import React, { Component } from "react";

export class About extends Component {
  constructor(props) {
    super(props);
    this.state = {
      firstName: "",
      lastName: "",
      address: "",
      isChecked: false,
    };
  }
  handleChange = (event) => {
    this.setState({
      [event.target.name]: event.target.value,
    });
  };
  handleAlert = (firstName, lastName, address) => {
    alert(`
    First name: ${firstName}, 
    Last name: ${lastName},  
    Address: ${address}`);
  };

  handleToggle = () => {
    (!this.state.isChecked)
    ?this.setState({ isChecked: true})
    :this.setState( { isChecked: false})
  };
  render() {
    return (
      <form
        onSubmit={() =>
          this.handleAlert(this.state.firstName, this.state.lastName, this.state.address)}
      >
        <label>
          Disable?
          <input
            type="checkbox"
            name="isChecked"
            value={this.state.isChecked}
            onChange={this.handleToggle}
          />
        </label>
        <br />
        <label>
          First Name
        <input
            type="text"
            placeholder="firstName"
            name="firstName"
            value={this.state.firstName}
            disabled={this.state.isChecked}
            onChange={this.handleChange}
          />
        </label>
        <br />

        <label>
          Last Name
        <input
            type="text"
            placeholder="lastName"
            name="lastName"
            value={this.state.lastName}
            disabled={this.state.isChecked}
            onChange={this.handleChange}
          />
        </label>
        <br />

        <label>
          Address
        <input
            type="text"
            placeholder="address"
            name="address"
            value={this.state.address}
            disabled={this.state.isChecked}
            onChange={this.handleChange}
          />
        </label>
        <br />
        <input 
          type="submit" 
          value="Submit" 
          disabled={this.state.isChecked}
          />
      </form>
    );
  }
}
