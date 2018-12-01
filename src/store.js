import { createStore, combineReducers, applyMiddleware } from 'redux';
import { createLogger } from 'redux-logger';
import thunk from 'redux-thunk';
import checkListReducer from './reducers/checkListReducer';
import linksReducer from './reducers/linksReducer';

const logger      = createLogger();
const rootReducer = combineReducers({checkListReducer,linksReducer});
const store       = createStore(rootReducer,applyMiddleware(thunk,logger));

export default store;