import React, { Component } from 'react';
import './App.css';
import Header from './Header/header.js';
import Footer from './Footer/footer.js';
import { Main } from './Common/Main.styles.jsx'
import GeneratePlayers from './GeneratePlayers/generatePlayers';

class App extends Component {
  render() {
    return (
      <div className="App">
        < Header />
        <Main>
          < GeneratePlayers />
        </Main>
        < Footer />
      </div>
    );
  }
}

export default App;
