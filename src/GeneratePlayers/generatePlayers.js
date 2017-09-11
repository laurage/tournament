import React, { Component } from 'react';
import Footer from '../Footer/footer';

import { Tile } from '../Common/Tile.styles.jsx';
import { Button } from '../Common/Button.styles.jsx'
import { Input } from '../Common/Input.styles.jsx'
import { AlignCenterWrapper } from '../Common/AlignCenterWrapper.styles.jsx'

import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import * as actionCreators from '../Actions/PlayersActions';

class GeneratePlayers extends Component {
  constructor() {
    super();
    this.state = {
      players: [],
      counter: 0,
      input: "",
    }
    this.removePlayer = this.removePlayer.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
    // this.handleChange = this.handleChange.bind(this);
    this.shufflePlayers = this.shufflePlayers.bind(this);
  }

  removePlayer(index) {
    const { players } = this.state;
    let shortenPlayers = players.filter(player => Number(player.key) !== index );
    this.setState( {
      players:  shortenPlayers,
    } )
  }

  handleSubmit(e) {
    e.preventDefault();
    console.log(e.target.input);
    const playerName = this.refs.playerName.value;
    this.props.addPlayer(1, playerName);
    // const { players, counter, input } = this.state;
    // this.setState( {
    //   players: [...players, {
    //     key: counter,
    //     name: this.capitalize(input),
    //   }],
    //   counter: this.state.counter + 1,
    //   input: "",
    // })
  }

  // handleChange(e) {
  //   this.setState({
  //     input: e.target.value,
  //   })
  // }

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
    const players = this.state.players.map((player) =>
    <li
      key={ player.key }>
      < Player name={ player.name }
      index={ player.key }
      removePlayer={ this.removePlayer }/>
    </li>
    );

    return(
      <div>
        < PlayerForm handleSubmit={ this.handleSubmit } input={ this.state.input } />
        <ul>{ players }</ul>
        < Footer shufflePlayers={ this.shufflePlayers }/>
      </div>
    );
  }
}

function PlayerForm({ addPlayer, handleSubmit, input }) {
  return (
    <div>
      < InputPlayer handleSubmit={ handleSubmit } input={ input } />
    </div>
  )
}

function InputPlayer({ handleSubmit, input }){
  return (
    <div>
      <form>
        <AlignCenterWrapper>
          <Input onClick={ handleSubmit } placeholder={ "Player\'s name" }></Input>
          <Tile styleAddTile>
            <Button type="submit">Add</Button>
          </Tile>
        </AlignCenterWrapper>
      </form>
    </div>
  )
}

function Player({index, removePlayer, name}) {
  return (
    <Tile stylePlayerTile>
      <div> {name} </div>
      < RemovePlayerBtn index= { index } removePlayer={removePlayer} />
    </Tile>
  )
}

function RemovePlayerBtn({removePlayer, index}) {
  return <button onClick={() => removePlayer(index)}>X</button>
}

function mapStateToProps(state) {
  return {
    players: state.players
  }
}

function mapDispachToProps(dispatch) {
  return bindActionCreators(actionCreators, dispatch);
}

const App = connect(mapStateToProps, mapDispachToProps)(GeneratePlayers);

export default App;
