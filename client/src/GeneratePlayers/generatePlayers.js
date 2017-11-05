import React, { Component } from 'react';
import Footer from '../Footer/footer';

import { Tile } from '../Common/Tile.styles.jsx';
import { Button } from '../Common/Button.styles.jsx'
import { Input } from '../Common/Input.styles.jsx'
import { AlignCenterWrapper } from '../Common/AlignCenterWrapper.styles.jsx'

import { connect } from 'react-redux';
import { addPlayer, removePlayer, inputPlayer, getPlayers } from '../Actions/PlayersActions';

import { capitalize } from '../helpers';

class GeneratePlayers extends Component {
  constructor() {
    super();
    this.removePlayer = this.removePlayer.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
    this.handleChange = this.handleChange.bind(this);
    this.state = {
      counter: 0};
  }

  componentWillMount(){
    this.props.getPlayers();
  }

  removePlayer(playerId) {
    this.props.removePlayer(playerId);
  }

  handleSubmit(e) {
    e.preventDefault();
    this.props.addPlayer(this.state.counter, capitalize(this.props.players.input));
    this.props.inputPlayer("");

    this.setState({
      counter: this.state.counter + 1,
    })
  }

  handleChange(e) {
    this.props.inputPlayer(e.target.value);
  }

  render() {
    console.log("props generatePlayers",this.props);

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
        <h1>message</h1>
        <div>{this.props.players}</div>
        < PlayerForm handleChange={ this.handleChange } handleSubmit={ this.handleSubmit } input={ this.props.players.input  } />
        <ul>{ players }</ul>
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

const mapStateToProps = state => ({
  players: state.players,
})

const mapDispachToProps = {
  getPlayers,
  addPlayer,
  removePlayer,
  inputPlayer,
}

export default connect(
  mapStateToProps,
  mapDispachToProps
)(GeneratePlayers);
