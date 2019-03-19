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
  registerForm: {
    display: 'inline-block',
    width: '25%',
  },
  root: {
    textAlign: 'center',
    flexGrow: 1,
  },
};


class Register extends Component {
  state = {
    email: '',

    password: '',
    passwordConfirm: '',

    nameFirst: '',
    nameLast: '',
  };

  handleChange = name => (event) => {
    this.setState({
      [name]: event.target.value,
    });
  };


  render() {
    const { classes } = this.props;
    const {
      email,
      password,
      passwordConfirm,
      nameFirst,
      nameLast,
    } = this.state;

    return (
      <div className={classes.root}>
        <form noValidate autoComplete="off" className={classes.registerForm}>
          <Typography variant="h6">
          Register
          </Typography>
          <Grid container spacing={8}>
            <Grid item xs={6}>
              <TextField
                id="standard-first-name"
                label="First Name"
                margin="dense"
                variant="outlined"
                fullWidth
                value={nameFirst}
                onChange={this.handleChange('nameFirst')}
              />
            </Grid>
            <Grid item xs={6}>
              <TextField
                id="standard-last-name"
                label="Last Name"
                margin="dense"
                variant="outlined"
                fullWidth
                value={nameLast}
                onChange={this.handleChange('nameLast')}
              />
            </Grid>

            <Grid item xs={12}>
              <TextField
                fullWidth
                id="standard-email"
                label="Email"
                margin="dense"
                variant="outlined"
                value={email}
                onChange={this.handleChange('email')}
              />
            </Grid>

            <Grid item xs={12}>
              <TextField
                fullWidth
                id="standard-password"
                label="Password"
                type="password"
                margin="dense"
                variant="outlined"
                value={password}
                onChange={this.handleChange('password')}
              />
            </Grid>
            <Grid item xs={12}>
              <TextField
                fullWidth
                id="standard-confirm-password"
                label="Confirm Password"
                type="password"
                margin="dense"
                variant="outlined"
                value={passwordConfirm}
                onChange={this.handleChange('passwordConfirm')}
              />
            </Grid>

            <Grid item xs={12}>
              <Button
                onClick={this.handleLogin}
                size="large"
                variant="contained"
                color="secondary"
              >
                  Register
              </Button>
            </Grid>
          </Grid>
        </form>
      </div>
    );
  }
}

Register.propTypes = {
  classes: PropTypes.objectOf(PropTypes.shape()).isRequired,
};


export default withStyles(styles)(Register);
