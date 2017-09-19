import { createStore, applyMiddleware, compose } from 'redux'
import { rootReducer } from './Reducers/PlayersReducer'
import players from './data/players.js'
import thunk from 'redux-thunk';
import { routerReducer, routerMiddleware } from 'react-router-redux';
import createHistory from 'history/createHashHistory';
import { browserHistory } from 'react-router';
import { syncHistoryWithStore} from 'react-router-redux';

export const store = createStore(rootReducer,
  window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__(),
);

// compose(applyMiddleware(thunk))
