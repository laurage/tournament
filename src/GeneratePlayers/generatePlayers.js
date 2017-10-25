import React, { Component } from 'react';
import Footer from '../Footer/footer';

import { Tile } from '../Common/Tile.styles.jsx';
import { Button } from '../Common/Button.styles.jsx'
import { Input } from '../Common/Input.styles.jsx'
import { AlignCenterWrapper } from '../Common/AlignCenterWrapper.styles.jsx'

import { connect } from 'react-redux';
import { addPlayer, removePlayer, inputPlayer } from '../Actions/PlayersActions';

class GeneratePlayers extends Component {
  constructor() {
    super();
    this.removePlayer = this.removePlayer.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
    this.handleChange = this.handleChange.bind(this);
    this.shufflePlayers = this.shufflePlayers.bind(this);
    this.state = {
      counter: 0};
  }

  removePlayer(playerId) {
    this.props.removePlayer(playerId);
  }

  handleSubmit(e) {
    e.preventDefault();
    this.props.addPlayer(this.state.counter, this.capitalize(this.props.players.input));
    this.props.inputPlayer("");

    this.setState({
      counter: this.state.counter + 1,
    })
  }

  handleChange(e) {
    this.props.inputPlayer(e.target.value);
  }

  capitalize(string) {
    const separators = ['-', ' '];
    let capitalizedString = string.toLowerCase();
    separators.forEach((separator) => {
        capitalizedString = capitalizedString.split(separator)
        .map((string) => string.charAt(0).toUpperCase() + string.slice(1))
        .join(separator);
      }
    )
    return capitalizedString;
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
    const players = this.props.players.playersList.map((player) =>
      <li
        key={ player.playerId }>
        < Player name={ player.playerName }
        playerId= { player.playerId }
        removePlayer={ this.removePlayer }/>
      </li>
    );

    return(
      <div>

        < PlayerForm handleChange={ this.handleChange } handleSubmit={ this.handleSubmit } input={ this.props.players.input  } />
        <ul>{ players }</ul>
        < Footer shufflePlayers={ this.shufflePlayers }/>

      </div>
    )
  }
}

function PlayerForm({ addPlayer, handleChange, handleSubmit, input }) {
  return (
    <div>
      < InputPlayer handleChange={ handleChange } handleSubmit={ handleSubmit } input={ input }  />
    </div>
  )
}

function InputPlayer({ handleChange, handleSubmit, input }){
  return (
    <div>
      <form>
        <AlignCenterWrapper>
          <Input onChange={ handleChange } placeholder={ "Player\'s name" } value={ input }></Input>
          <Tile styleAddTile>
          <Button onClick={ handleSubmit } type="submit">Add</Button>
          </Tile>
        </AlignCenterWrapper>
      </form>
    </div>
  )
}

function Player({playerId, removePlayer, name}) {
  return (
    <Tile stylePlayerTile>
      <div> {name} </div>
      < RemovePlayerBtn playerId={ playerId } removePlayer={ removePlayer } />
    </Tile>
  )
}

function RemovePlayerBtn({playerId, removePlayer}) {
  return <button onClick={() => removePlayer(playerId)}>X</button>
}

export const mapStateToProps = state => ({
  players: state.players,
})

export const mapDispachToProps = {
  addPlayer,
  removePlayer,
  inputPlayer,
}

export default connect(
  mapStateToProps,
  mapDispachToProps
)(GeneratePlayers);
