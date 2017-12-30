import React from 'react';
import ReactDOM from 'react-dom';
import * as PlayersReducer from './PlayersReducer';

const initialState = PlayersReducer.initialState;

it(`returns the correct state for the INPUT_PLAYER action`, () => {
  const action = {
    type: "INPUT_PLAYER",
    input: "R",
  }

  expect(PlayersReducer.playerReducer(initialState, action).input).toEqual("R")
});

it(`returns the correct state for the ADD_PLAYER action`, () => {
  const action = {
    type: "ADD_PLAYER",
    playerId: "1",
    playerName: "Paul"
  }

  expect(PlayersReducer.playerReducer(initialState, action).playersList).toContainEqual({
    playerId: "1",
    playerName: "Paul"
  })
});
