import React from 'react';
import './App.css';

import { BrowserRouter as Router, Route, Link as RouterLink } from 'react-router-dom';
import {
  Link,
  Typography,
  Fab,
  Grid,
} from '@material-ui/core/';

// Themes
import { createMuiTheme, MuiThemeProvider } from '@material-ui/core/styles';
import { cyan, green } from '@material-ui/core/colors/';

// Components
import Register from './users/Register';
import Login from './users/Login';


const theme = createMuiTheme({
  palette: {
    type: 'dark',
    primary: cyan,
    secondary: green,
  },
  typography: {
    useNextVariants: true,
  },
});

function Navigation() {
  return (
    <nav>
      <Grid container spacing={16}>
        <Grid item xs={6}>
          <Link component={RouterLink} to="/login">
            <Fab color="secondary" variant="extended">
              Login
            </Fab>
          </Link>
        </Grid>
        <Grid item xs={6}>
          <Link component={RouterLink} to="/register">
            <Fab color="secondary" variant="extended">
              Register
            </Fab>
          </Link>
        </Grid>
      </Grid>
    </nav>
  );
}

function App() {
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

export default App;
