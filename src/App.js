import React, { Component } from 'react';
import './App.css';

import { BrowserRouter as Router, Route, Link as RouterLink} from "react-router-dom";
import Link from '@material-ui/core/Link';
import Typography from '@material-ui/core/Typography';
import Fab from '@material-ui/core/Fab';

// Components
import Login from './users/Login';

// Themes
import { createMuiTheme, MuiThemeProvider } from '@material-ui/core/styles';
import cyan from '@material-ui/core/colors/cyan';
import green from '@material-ui/core/colors/green';


const theme = createMuiTheme({
  palette: {
    type: 'dark',
    primary: cyan,
    secondary: green
  },
  typography: {
    useNextVariants: true,
  }
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

function Register() {
  return <h2>Register</h2>;
}

function Navigation() {
  return (
    <div>
      <nav>
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
      </nav>
    </div>
  );
}

export default App;
