import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';

class App extends Component {
  constructor() {
    super();
    this.state = {playersNumber: 1}
    this.increasePlayersNumber = this.increasePlayersNumber.bind(this)
  }

  increasePlayersNumber() {
    this.setState( {playersNumber: this.state.playersNumber+1 } )
  }

  render() {
    const playerFields = [];
    for (var i = 0; i < this.state.playersNumber; i++) {
      playerFields.push(<li>< Players addPlayerField={this.increasePlayersNumber}/></li>);
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
        <ul>{playerFields}</ul>
      </div>
    );
  }
}

function Players({addPlayerField}) {
  return (
    <div>
      < NameForm />
      < AddPlayerFieldBtn addPlayerField={addPlayerField} />
    </div>
  )
}



function NameForm(){
  return (
    <div>
      <form>
        <input></input>
      </form>
    </div>
  )
}

function AddPlayerFieldBtn({addPlayerField}) {
  return <button onClick={addPlayerField.bind(this)}>Add a player</button>
}


export default App;
