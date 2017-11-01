import { createStore } from 'redux'

import { combineReducers } from 'redux';
import { playerReducer } from './Reducers/PlayersReducer'

export const rootReducer = combineReducers({
  players: playerReducer
})

export const store = createStore(rootReducer,
  window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__(), //add this line to use Redux Tools in the browser
);
