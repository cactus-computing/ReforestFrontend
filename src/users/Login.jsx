import React, { Component } from 'react';
import PropTypes from 'prop-types';

import {
  Typography,
  TextField,
  Button,
  Grid,
} from '@material-ui/core/';
import { withStyles } from '@material-ui/styles';


const styles = {
  loginForm: {
    display: 'inline-block',
    width: '25%',
  },
  root: {
    textAlign: 'center',
    flexGrow: 1,
  },
};

class Login extends Component {
  state = {
    email: '',
    password: '',
  };

  handleChange = name => (event) => {
    this.setState({
      [name]: event.target.value,
    });
  };

  handleLogin = () => {
    fetch('/users/login', {
      method: 'POST',
      headers: {
        Accept: 'application/json',
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(this.state),
    });
    // .then(response => /*console.log(response.json())*/);
  }

  render() {
    const { classes } = this.props;
    const { email, password } = this.state;

    return (
      <div className={classes.root}>
        <form noValidate autoComplete="off" className={classes.loginForm}>
          <Typography variant="h6">
          Login
          </Typography>
          <Grid container spacing={8}>
            <Grid item xs={12}>
              <TextField
                id="standard-email"
                label="Email"
                margin="normal"
                fullWidth
                variant="outlined"
                value={email}
                onChange={this.handleChange('email')}
              />
            </Grid>
            <Grid item xs={12}>
              <TextField
                id="standard-password"
                label="Password"
                type="password"
                margin="normal"
                fullWidth
                variant="outlined"
                value={password}
                onChange={this.handleChange('password')}
              />
            </Grid>
            <Grid item xs={12}>
              <Button onClick={this.handleLogin} size="large" variant="contained" color="secondary">
                Login
              </Button>
            </Grid>
          </Grid>
        </form>
      </div>
    );
  }
}

Login.propTypes = {
  classes: PropTypes.objectOf(PropTypes.shape()).isRequired,
};


export default withStyles(styles)(Login);
