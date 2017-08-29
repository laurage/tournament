import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
const initialNumberOfPlayers = 1;

class App extends Component {

  constructor() {
    super();
    this.state = {
      playersNumber: initialNumberOfPlayers,
      playerFields: []
    }
    this.increasePlayersNumber = this.increasePlayersNumber.bind(this)
    this.removePlayerField = this.removePlayerField.bind(this)
  }

  increasePlayersNumber() {
    // Why are we ONLY pushing in the array for it to work?
    // I thought I needed to setState of playerFields: this.state.playerFields to update playerfields.
    // Should I use a non mutating way of doing this?
    this.state.playerFields.push(<li className="player-field-item" key={ this.state.playersNumber+1 }>< PlayerField index={ this.state.playersNumber+1 } removePlayerField={this.removePlayerField}/></li>);
    this.setState( {
      playersNumber: this.state.playersNumber+1
    } )
    console.log('playersNumber: ', this.state.playersNumber+1);
  }

  removePlayerField(index) {
    console.log('index: ', index);
    console.log('this: ', this);
    let shortenPlayerFields = this.state.playerFields.filter(playerField => Number(playerField.key) !== index );
    this.setState( {
      playersNumber: this.state.playersNumber-1,
      playerFields: shortenPlayerFields
    } )
  }
  componentWillMount() {
    this.state.playerFields.push(<li
      className="player-field-item"
      key={ initialNumberOfPlayers }>
        < PlayerField index={ initialNumberOfPlayers } removePlayerField={this.removePlayerField}/>
    </li>);
  }

  render() {
    console.log('initialNumberOfPlayers: ', initialNumberOfPlayers);

    // console.log(this.state.playerFields);
    return (
      <div className="App">
        <div className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h2>Tournament</h2>
        </div>
        <ul>{this.state.playerFields}</ul>
        < AddPlayerFieldBtn addPlayerField={this.increasePlayersNumber} />
        < CreateTournament />
      </div>
    );
  }
}

// This is iterating by itself through the playerFields array:
// <ul>{this.state.playerFields}</ul>

function PlayerField({index, removePlayerField}) {
  return (
    <div>
      < NameForm />
      < RemovePlayerFieldBtn index= { index } removePlayerField={removePlayerField} />
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
  return <button className="btn btn-sunshine" onClick={addPlayerField.bind(this)}>Add a Player</button>
  //<i className="fa fa-plus-circle" aria-hidden="true"></i>
}

function RemovePlayerFieldBtn({removePlayerField, index}) {
  return <button className="btn btn-sunshine" onClick={removePlayerField.bind(this, index)}>Remove a player</button>
}

function CreateTournament() {
  return <button className="btn btn-ocean">Create</button>
}


export default App;
