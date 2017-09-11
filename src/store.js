import { createStore } from 'redux'
import { rootReducer } from './Reducers/PlayersReducer'
import players from './data/players.js'

// create an object for the default data
const defaultState = {
  players
};

export const store = createStore(rootReducer, defaultState);
