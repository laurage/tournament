import React, { Component } from 'react';
import Footer from '../Footer/footer';

import { Tile } from '../Common/Tile.styles.jsx';
import { Button } from '../Common/Button.styles.jsx'
import { Input } from '../Common/Input.styles.jsx'
import { AlignCenterWrapper } from '../Common/AlignCenterWrapper.styles.jsx'

import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import { addPlayer } from '../Actions/PlayersActions';
const counter = 0;

class GeneratePlayers extends Component {
  constructor() {
    super();
    this.removePlayer = this.removePlayer.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
    this.shufflePlayers = this.shufflePlayers.bind(this);
  }

 componentWillMount() {
   this.props.addPlayer(4, "Ivy");
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
    console.log("props", this.props);
    console.log(e.target.value);
    const playerName = e.target.querySelector('input');

    console.log("props2", this.props);
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
    //render runs again everytime there is a new props, so if we do this.props.addplayer in there, it will rerender again and againg => infinite loop

    console.log("PROPS", this.props);
    console.log("state", this.state);
    // const players = this.props.players.map((player) =>
    // <li
    //   key={ player.key }>
    //   < Player name={ player.name }
    //   index={ player.key }
    //   removePlayer={ this.removePlayer }/>
    // </li>
    // );
    //
    return(
      <div>
      {this.props.players.map(player=><div>{player.playerName}</div>)}
      </div>
    )
    //   <div>
    //     < PlayerForm handleSubmit={ this.handleSubmit } />
    //     <ul>{ players }</ul>
    //     < Footer shufflePlayers={ this.shufflePlayers }/>
    //   </div>
  // );
  }
}

function PlayerForm({ addPlayer, handleSubmit }) {
  return (
    <div>
      < InputPlayer handleSubmit={ handleSubmit }  />
    </div>
  )
}

function InputPlayer({ handleSubmit }){
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

export const mapStateToProps = state => ({
  players: state.players,
})

export const mapDispachToProps = {
  addPlayer,
}

export default connect(
  mapStateToProps,
  mapDispachToProps
)(GeneratePlayers);
