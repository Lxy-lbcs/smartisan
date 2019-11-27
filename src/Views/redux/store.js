import { createStore, combinReducers, applyMiddleware, compose } from 'redux'
import reduxPromise from 'redux-promise'
import reduxThunk from 'redux-thunk'
const reducer = (prevState = {
  isTabbarShow: true
}, action) => {
  let {type,payload} = {action}
  switch (type) {
    case ' ':
     
      break;
  
    default:
      return prevState
  }
}
const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

const store = createStore(reducer, composeEnhancers(applyMiddleware(reduxPromise, reduxThunk)))

export default store