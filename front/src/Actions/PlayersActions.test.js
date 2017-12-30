import React from 'react';
import ReactDOM from 'react-dom';
import * as PlayersActions from './PlayersActions';

let argument;
const disp = (arg) => {
  argument = arg;
}



const api = {
  getPlayers() {
    return Promise.resolve([])
  },
  setPlayer(player) {
    return Promise.resolve({playerId: 1, playerName: player.playerName})
  }
}
// it('...', () => {
//  const thunk = PlayersActions.getPlayers(undefined, api)
//  return thunk(dispatch)
//   .then(() =>
//      expect(argument).toEqual({
//        type: "SET_PLAYERS",
//        players: [],
//      })
//    )
// });

// it('dispatches setPlayers when calling getPlayers', () => {
//  const thunk = PlayersActions.getPlay([], undefined, api)
//  thunk(dispatch)
//  expect(argument).toEqual({
//    type: "SET_PLAYERS",
//    players: [],
//  })
// });


/// with sinon

//
//
// it('dispatches setPlayers when calling getPlayers', () => {
//  const dispatch = sinon.spy();
//  const thunk = PlayersActions.getPlay([], undefined, api)
//  thunk(dispatch)
//  expect(dispatch.firstCall()).toEqual({
//    type: "SET_PLAYERS",
//    players: [],
//  })
// });

it(`dispatches addPlayer when calling setPlayer`, () => {
  const thunk = PlayersActions.setPlayer({playerName: "Paul"}, undefined, api);
  // Jest
  return thunk(disp)
  .then(() =>
    expect(argument).toEqual(
      {
        type: "ADD_PLAYER",
        playerId: 1,
        playerName: "Paul"
      }
    )
  )

})
