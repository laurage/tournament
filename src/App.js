import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';

class App extends Component {
  constructor() {
    super();
    this.state = {playersNumber: 3}
  }

  // changePlayersNumber() {
  //
  // }

  render() {
    const playerFields = [];
    for (var i = 0; i < this.state.playersNumber; i++) {
      playerFields.push(< Players />);
    };

    return (
      <div className="App">
        <div className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h2>Welcome to React</h2>
        </div>
        <p className="App-intro">
          To get started, edit <code>src/App.js</code> and save to reload.
        </p>
        <div>{playerFields}</div>
      </div>
    );
  }
}

class Players extends Component {

  addPlayerField() {

  }

  render() {
    return (
      <div>
        < NameForm />
        < AddPlayerFieldBtn />
      </div>
    )
  }
}


class NameForm extends Component {
  render() {
    return (
      <div>
        <form>
          <input></input>
        </form>
      </div>
    )
  }
}

class AddPlayerFieldBtn extends Component {
  render() {
    return (
      <button onClick={this.changePlayersNumber}>Add a player</button>
    )
  }
}

export default App;
