import React from 'react';

export class App extends React.Component {
  constructor(state) {
    super(state)
    this.state = {
      name: '',
      lastName: '',
      city: '',
      showTable: false
    }
  }

  handleChange = (event) => {
    this.setState({
      [event.target.name]: event.target.value
    })
  }

  handleSubmit = (event) => {
    this.setState({
      showTable: !this.state.showTable
    })
    event.preventDefault();
  }
  render() {
    return (
      <div>
        <h1>Homework-2</h1>
        <form onSubmit={this.handleSubmit}>
          <label>
            Name:
            <input
              type="text"
              name="name"
              placeholder="Name"
              value={this.state.name}
              onChange={this.handleChange}
            />
            <br />
            <br />
          </label>

          <label>
            Last Name:
            <input
              type="text"
              name="lastName"
              placeholder="Last Name"
              value={this.state.lastName}
              onChange={this.handleChange}
            />
            <br />
            <br />
          </label>

          <label>
            City:
            <input
              type="text"
              name="city"
              placeholder="City"
              value={this.state.city}
              onChange={this.handleChange}
            />
            <br />
            <br />
          </label>
          <input type="submit" value="Submit" />
        </form>
        <hr />

        {this.state.showTable &&
          <div>
            <table style={{ width: "300px", border: "1px solid black" }}>
              <tr>
                <th>Name</th>
                <td>{this.state.name}</td>
              </tr>
              <tr>
                <th>Last Name</th>
                <td>{this.state.lastName}</td>
              </tr>
              <tr>
                <th>City</th>
                <td>{this.state.city}</td>
              </tr>
            </table>
            <br />
            <button onClick={() => {
              this.setState({
                name: "",
                lastName: "",
                city: "",
                showTable: !this.state.showTable
              })
            }}>
              Remove/reset form
          </button>
          </div>
        }
      </div>
    )
  }
}