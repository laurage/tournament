import React, { Component } from 'react';
import './App.css';
import Header from './Header/header.js';
import Footer from './Footer/footer.js';
import { Main } from './Common/Main.styles.jsx'
import GeneratePlayers from './GeneratePlayers/generatePlayers';

import { ThemeProvider } from 'styled-components';
import { theme } from './assets/theme.js';


class App extends Component {

  render() {
    return (
      <ThemeProvider theme={theme}>
        <div>
          < Header />
          <Main>
            < GeneratePlayers />
          </Main>
          < Footer />
        </div>
      </ThemeProvider>
    );
  }
}

export default App;
