import { createStore, combineReducers, applyMiddleware, compose } from 'redux'
import reduxPromise from 'redux-promise'
import reduxThunk from 'redux-thunk'
import filmReducer from './Reducer/filmReducer'

const reducer = combineReducers({
  dataIn:filmReducer,
})

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

const store = createStore(reducer, composeEnhancers(applyMiddleware(reduxPromise, reduxThunk)))

export default store