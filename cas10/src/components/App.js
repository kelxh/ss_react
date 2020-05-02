import React, { Component } from 'react';
import axios from 'axios';
import {Typography, Button, Grid, TableContainer, Table, TableHead, TableRow, Paper, TableCell, TableBody, TextField } from '@material-ui/core';

export default class App extends Component {
  constructor(props) {
    super(props)
    this.state = {
      users: undefined,
      name: '',
      username: '',
      email: ''
    }
  }
  componentDidMount() {
    this.fetchUsers();
  }

  fetchUsers= () => {
    axios({
      url: `https://jsonplaceholder.typicode.com/users`,
      method: 'GET'
    })
      .then((res) => {
        this.setState({
          users: res.data
        })
      })
      .catch((err) => {
        alert(err)
      })
  }

  // removePerson = (id) => {
  //   var array = [...this.state.users];
  //   if(id !== -1){
  //     array.splice(id, 1);
  //     this.setState({
  //       users: array
  //     })
  //   }
  // }
  removePerson = (id) => {
    axios({
      url: `https://jsonplaceholder.typicode.com/users/${id}`,
      method: 'DELETE'
    })
    .then(res => console.log(res))
    .catch(err => alert(err))
  }

  handleChange = (event) => {
    this.setState({
      [event.target.name]: event.target.value
    })
  }

  addUser = () => {
    var user = {
      id: this.state.users.length + 1,
      name: this.state.name,
      username: this.state.username,
      email: this.state.email
    }
    this.setState({
      users:[...this.state.users, user],
      name:'',
      username:'',
      email:''
    })
  }

  render() {
    console.log(this.state.users);
    return (
      <Grid container justify="center">
        <Grid item xs={2}>
          <Typography varian="body2">
            New User:
          </Typography>
          <TextField
            variant="outlined"
            placeholder="name"
            name="name"
            value={this.state.name}
            onChange={this.handleChange}
          />
             <TextField
            variant="outlined"
            placeholder="Username"
            name="username"
            value={this.state.username}
            onChange={this.handleChange}
          />
             <TextField
            variant="outlined"
            placeholder="Email"
            name="email"
            value={this.state.email}
            onChange={this.handleChange}
          />
          <Button 
            variant="contained"
            size="small"
            color="primary"
            onClick={() => this.addUser()}
          >Add</Button>
        </Grid>
        <Grid item xs={1}>
        </Grid>
        <Grid item xs={9}>
          <TableContainer component={Paper}>
            <Table  aria-label="simple table">
              <TableHead>
                <TableRow>
                  <TableCell>ID</TableCell>
                  <TableCell align="right">Name</TableCell>
                  <TableCell align="right">Username</TableCell>
                  <TableCell align="right">Email</TableCell>
                  <TableCell align="right">Actions</TableCell>
                </TableRow>
              </TableHead>
              <TableBody>
                {this.state.users && this.state.users.map((row, i) => (
                  <TableRow key={row.id}>
                    <TableCell component="th" scope="row">
                      {row.id}
                    </TableCell>
                    <TableCell align="right">{row.name}</TableCell>
                    <TableCell align="right">{row.username}</TableCell>
                    <TableCell align="right">{row.email}</TableCell>
                    <TableCell align="right">
                      <Button
                        color="secondary"
                        size="small"
                        variant="contained"
                        onClick={() => this.removePerson(row.id)}
                      >
                        Delete
                      </Button>
                    </TableCell>
                  </TableRow>
                ))}
              </TableBody>
            </Table>
          </TableContainer>
        </Grid>
      </Grid>
    )
  }
}
