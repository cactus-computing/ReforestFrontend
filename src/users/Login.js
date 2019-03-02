import React, { Component } from 'react';
import Typography from '@material-ui/core/Typography';
import TextField from '@material-ui/core/TextField';
import Button from '@material-ui/core/Button';

class Login extends Component {
  state = {
    email: "",
    password: ""
  };

  handleChange = name => event => {
    this.setState({
      [name]: event.target.value,
    });
  };

  handleLogin = () => {
    fetch('/users/login', {
      method: "POST",
      redirect: "follow",
      body: JSON.stringify(this.state),
    })
      .then(response => console.log(response.json()))
  }

  render() {
    return (
      <div>  
        <form noValidate autoComplete="off">
          <Typography variant="h6">
          Login
          </Typography>  
          <ul>
            <li>
              <TextField
              id="standard-email"
              label="Email"
              margin="normal"
              variant="outlined"
              value={this.state.email}
              onChange={this.handleChange('email')}
              />
            </li>
            <li>
            <TextField
              id="standard-password"
              label="Password"
              type="password"
              margin="normal"
              variant="outlined"
              value={this.state.password}
              onChange={this.handleChange('password')}
              />
            </li>
          </ul>
        </form>
        <Button onClick={this.handleLogin} size="large" variant="contained" color="secondary">
          Login
        </Button>
      </div>
    );
  }
}

export default Login;
