import React, { Component } from 'react';
import './App.css';
import Header from './Header/header.js';
import Footer from './Footer/footer.js';
import { Main } from './Common/Main.styles.jsx'
import GeneratePlayers from './GeneratePlayers/generatePlayers';

import { ThemeProvider } from 'styled-components';
import { theme } from './assets/theme.js';

import { Provider } from 'react-redux';
import { store } from './store';


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
          </div>
        </Provider>
      </ThemeProvider>
    );
  }
}

export default App;
