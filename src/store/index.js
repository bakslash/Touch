
import {applyMiddleware, createStore } from 'redux';
import thunk from 'redux-thunk';
import {compose} from 'redux';
import reducer from '../reducers';
const middleware = applyMiddleware(thunk)
export default createStore(reducer, compose(
    middleware,
    window.devToolsExtension ? window.devToolsExtension() : f => f
    
))