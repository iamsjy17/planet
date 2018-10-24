import { createStore, compose, combineReducers } from 'redux';
import * as modules from './modules';

const reducers = combineReducers(modules);

const isDev = process.env.NODE_ENV === 'development';
const devtools = isDev && window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__;
const composeEnhancers = devtools || compose;

const configure = preloadedState => createStore(reducers, preloadedState, composeEnhancers());

export default configure;
