import React, { Component } from 'react';
import './App.css';
import Header from './Header/header.js';
import Footer from './Footer/footer.js';
import { Main } from './Common/Main.styles.jsx'
import GeneratePlayers from './GeneratePlayers/generatePlayers';
import About from './About/about';

import { ThemeProvider } from 'styled-components';
import { theme } from './assets/theme.js';

import { Provider } from 'react-redux';
import { store } from './store';

import { Switch, Route } from 'react-router-dom'

class App extends Component {

  render() {
    return (
      <ThemeProvider theme={theme}>
        <Provider store={store}>
          <div>
            < Header />
            <Main>
              <Switch>
                <Route exact path='/' component={GeneratePlayers}/>
                <Route exact path='/about' component={About}/>
              </Switch>
            </Main>
            < Footer />
          </div>
        </Provider>
      </ThemeProvider>
    );
  }
}

export default App;
