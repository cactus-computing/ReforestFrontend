import React, { Component } from 'react';
import './App.css';

import { BrowserRouter as Router, Route, Link as RouterLink} from "react-router-dom";
import Link from '@material-ui/core/Link';
import Typography from '@material-ui/core/Typography';
import TextField from '@material-ui/core/TextField';
import Button from '@material-ui/core/Button';
import Fab from '@material-ui/core/Fab';

// Themes
import { createMuiTheme, MuiThemeProvider } from '@material-ui/core/styles';
import purple from '@material-ui/core/colors/purple';
import green from '@material-ui/core/colors/green';


const theme = createMuiTheme({
  palette: {
    type: 'dark',
    primary: purple,
    secondary: green
  },
});

class App extends Component {
  render() {
    return (
      <MuiThemeProvider theme={theme}>
        <Router>
          <div className="App">
            <header className="App-header">
            <Typography component="h2" variant="h1" gutterBottom>
                Reforest
              </Typography>
            </header>

            <Route path="/" exact component={Navigation} />
            <Route path="/register" exact component={Register} />
            <Route path="/login" exact component={Login} />   
          </div>
        </Router>
      </MuiThemeProvider>
    );
  }
}

function Login() {
  return (
    <div>
      <Typography variant="h6" gutterBottom>
        Login
      </Typography>    
      <form noValidate autoComplete="off">
        <TextField
            id="outlined-name"
            label="Email"
            margin="normal"
            variant="outlined"
          />

        <TextField
            id="outlined-name"
            label="Password"
            type="password"
            margin="normal"
            variant="outlined"
          />
      </form>
      <Button size="large" variant="contained" color="secondary">
        Login
      </Button>
    </div>
  );
}

function Register() {
  return <h2>Register</h2>;
}

function Navigation() {
  return (
    <div>
      <ul>
        <li>
          <Link component={RouterLink} to="/login">
            <Fab color='secondary' variant="extended">               
              Login
            </Fab>
          </Link>
        </li>
        <li>
          <Link component={RouterLink} to="/register">
            <Fab color='secondary' variant="extended">               
              Register
            </Fab>
          </Link>
        </li>
      </ul>     
    </div>
  );
}

export default App;
