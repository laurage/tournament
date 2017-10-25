import React, { Component } from 'react';

import { Tile } from '../Common/Tile.styles.jsx';
import { Button } from '../Common/Button.styles.jsx'

import { connect } from 'react-redux';
import { updatePlayers } from '../Actions/PlayersActions';
import { addPlayer } from '../Actions/PlayersActions';


export class CreateTournament extends Component {
  constructor() {
    super();
    this.shufflePlayers = this.shufflePlayers.bind(this);
  }

// shufflePlayers belongs to the Backend, as this is business logic
  // shufflePlayers() {
  //   const shuffledPlayers = this.props.players.playersList;
  //   for (var i = shuffledPlayers.length - 1; i > 0; i--) {
  //     var j = Math.floor(Math.random() * (i + 1));
  //     var temp = shuffledPlayers[i];
  //     shuffledPlayers[i] = shuffledPlayers[j];
  //     shuffledPlayers[j] = temp;
  //   }
  // }
  render() {
    console.log("props createTournament2",this.props);
    // this.props.addPlayer(4, "emile");
    // this.props.updatePlayers();
    return (
      <Tile styleNextTile>
        <Button onClick={ this.shufflePlayers }>Create</Button>
      </Tile>
    )
  }
}

const mapStateToProps = state => ({
  players: state.players,
})

const mapDispachToProps = {
  addPlayer,
  updatePlayers,
}

export default connect(
  mapStateToProps,
  mapDispachToProps
)(CreateTournament);
