import { createStore, applyMiddleware, compose } from 'redux';
import thunk from 'redux-thunk';
import createSagaMiddleware from 'redux-saga';
import reducer from './reducer';
import getListData from './saga';

const sagaMiddleware = createSagaMiddleware();
const composeEnhancers = typeof window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ ? window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__({}) : compose;
// const enhancer = composeEnhancers(applyMiddleware(thunk));
const enhancer = composeEnhancers(applyMiddleware(sagaMiddleware));
const store = createStore( reducer, enhancer);
sagaMiddleware.run(getListData);

export default store;