import React, { Component } from 'react';
import './App.css';
import Header from './Header/header.js';
import Footer from './Footer/footer.js';
import { Main } from './Common/Main.styles.jsx'
import GeneratePlayers from './GeneratePlayers/generatePlayers';
import { About } from './About/about';

import { ThemeProvider } from 'styled-components';
import { theme } from './assets/theme.js';

import { Provider } from 'react-redux';
import { store } from './store';

import { Router, Route, IndexRoute, browserHistory } from 'react-router';
const router = (
  <Router history={browserHistory}>
    <Route path="/" component={Main}>
      <IndexRoute component={GeneratePlayers}></IndexRoute>
    </Route>
  </Router>
);


class App extends Component {

  render() {
    return (
      <ThemeProvider theme={theme}>
        <Provider store={store}>
          <div>
            < Header />
            <Main>
              < GeneratePlayers />
            </Main>
            < Footer />
            < About />
          </div>
        </Provider>
      </ThemeProvider>
    );
  }
}

export default App;
