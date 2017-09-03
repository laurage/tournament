import React, { Component } from 'react';
import './App.css';
import Header from './Header/header.js';
import Footer from './Footer/footer.js';
import GeneratePlayers from './GeneratePlayers/generatePlayers';

class App extends Component {
  render() {
    return (
      <div className="App">
        < Header />
        < GeneratePlayers />
      </div>
    );
  }
}

export default App;
