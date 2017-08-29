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
    this.handleChange = this.handleChange.bind(this)
  }


  // increasePlayersNumber() {
  //   // Why are we ONLY pushing in the array for it to work?
  //   // I thought I needed to setState of playerFields: this.state.playerFields to update playerfields.
  //   // Should I use a non mutating way of doing this?
  //   this.state.players.push(<li className="player-item" key={ this.state.playersNumber+1 }>< Player name="Laura" index={ this.state.playersNumber+1 } removePlayerField={this.removePlayerField}/></li>);
  //   this.setState( {
  //     playersNumber: this.state.playersNumber+1,
  //
  //   } )
  //   console.log('playersNumber: ', this.state.playersNumber+1);
  // }

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
    })
  }

  handleChange(e) {
    this.setState({
      input: e.target.value,
    })
  }

  // componentWillMount() {
  //   this.state.players.push(<li
  //     className="player-item"
  //     key={ this.state.counter }>
  //       < Player index={ this.state.counter } removePlayerField={this.removePlayerField}/>
  //   </li>);
  // }

  render() {
    console.log(this.state.players);
    const players = this.state.players.map((player) =>
    <li
      className="player-item"
      key={ player.key }>
      < Player name={ player.name }
      index={ player.key }
      removePlayer={this.removePlayer(player.key)}/>
    </li>
    );

    return (
      <div className="App">
        <div className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h2>Tournament</h2>
        </div>
        < PlayerForm handleChange={ this.handleChange } handleSubmit={ this.handleSubmit } />
        <ul>{players}</ul>
        < CreateTournament />
      </div>
    );
  }
}

function PlayerForm({ addPlayer, handleChange, handleSubmit }) {
  return (
    <div>
      < InputPlayer handleChange={ handleChange } handleSubmit={ handleSubmit } />
    </div>
  )
}

function InputPlayer({ handleChange, handleSubmit }){
  return (
    <div>
      <form>
        <input onBlur={handleChange}></input>
        <button onClick={handleSubmit} className="btn btn-sunshine" type="submit">Add this Player</button>
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
  return <button className="btn btn-sunshine" onClick={removePlayer}>X</button>
}

function CreateTournament() {
  return <button className="btn btn-ocean">Create</button>
}


export default App;
