import React, { Component } from 'react';
import './App.css';
import Header from './Header/header.js';
import Footer from './Footer/footer.js';
import { Main } from './Common/Main.styles.jsx'
import GeneratePlayers from './GeneratePlayers/generatePlayers';
import CreateTournament from './CreateTournament/createTournament';

import { ThemeProvider } from 'styled-components';
import { theme } from './assets/theme.js';

import { Provider } from 'react-redux';
import { store } from './store';


class App extends Component {
  render() {
    console.log("props app", this.state);

    return (
      <ThemeProvider theme={theme}>
        <Provider store={store}>
          <div>
            < Header />
            <Main>
              < GeneratePlayers />
            </Main>
            < CreateTournament />
          </div>
        </Provider>
      </ThemeProvider>
    );
  }
}
// < Footer />

export default App;
