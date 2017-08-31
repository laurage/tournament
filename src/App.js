import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
// const initialNumberOfPlayers = 1;

class App extends Component {

  constructor() {
    super();
    this.state = {
      players: [],
      counter: 0,
      input: "",
    }
    this.removePlayer = this.removePlayer.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
    this.handleChange = this.handleChange.bind(this);
    this.shufflePlayers = this.shufflePlayers.bind(this);
  }

  removePlayer(index) {
    let shortenPlayers = this.state.players.filter(player => Number(player.key) !== index );
    this.setState( {
      players:  shortenPlayers,
    } )
  }

  handleSubmit(e) {
    this.state.players.push({
      key: this.state.counter,
      name: this.state.input,
    });
    e.preventDefault();
    this.setState( {
      players: this.state.players,
      counter: this.state.counter + 1,
      input: "",
    })
  }

  handleChange(e) {
    this.setState({
      input: e.target.value,
    })
    console.log(this.state);
  }

  shufflePlayers() {
    const shuffledPlayers = this.state.players;
    for (var i = shuffledPlayers.length - 1; i > 0; i--) {
      var j = Math.floor(Math.random() * (i + 1));
      var temp = shuffledPlayers[i];
      shuffledPlayers[i] = shuffledPlayers[j];
      shuffledPlayers[j] = temp;
    }

    this.setState({
      players: shuffledPlayers,
    })
  }

  render() {
    const players = this.state.players.map((player) =>
    <li
      className="player-item"
      key={ player.key }>
      < Player name={ player.name }
      index={ player.key }
      removePlayer={ this.removePlayer }/>
    </li>
    );

    return (
      <div className="App">
        <div className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h2>Tournament</h2>
        </div>
        < PlayerForm handleChange={ this.handleChange } handleSubmit={ this.handleSubmit } input={ this.state.input } />
        <ul>{players}</ul>
        < CreateTournament shufflePlayers={ this.shufflePlayers }/>
      </div>
    );
  }
}

function PlayerForm({ addPlayer, handleChange, handleSubmit, input }) {
  return (
    <div>
      < InputPlayer handleChange={ handleChange } handleSubmit={ handleSubmit } input={ input } />
    </div>
  )
}

function InputPlayer({ handleChange, handleSubmit, input }){
  // Used onBlur to only trigger a new state when clicking on the button,
  // but if I also want to erase the value in input on that click, I need to give a value to input
  // And that means I need to constantly give a value, which means I need to use onChange and not onBlur. Work around?
  
  return (
    <div>
      <form>
        <input onChange={ handleChange } value={ input }></input>
        <button onClick={ handleSubmit } className="btn btn-sunshine" type="submit">Add this Player</button>
      </form>
    </div>
  )
}

function Player({index, removePlayer, name}) {
  return (
    <div>
      <div> {name} </div>
      < RemovePlayerBtn index= { index } removePlayer={removePlayer} />
    </div>
  )
}

function RemovePlayerBtn({removePlayer, index}) {
  return <button className="btn btn-sunshine" onClick={() => removePlayer(index)}>X</button>
}

function CreateTournament({ shufflePlayers }) {
  return <button className="btn btn-ocean" onClick={ shufflePlayers }>Create</button>
}


export default App;
