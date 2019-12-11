import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import * as serviceWorker from './serviceWorker';
import { createStore, applyMiddleware, compose } from 'redux';
import { Provider } from 'react-redux';
import reducer from './reducers'
import thunk from 'redux-thunk'
// import actionCreators from './actionCreators'

const middleware = compose(
  applyMiddleware(thunk.withExtraArgument("http://localhost:3000/")),
  (window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__() : (f => f))
)

// const middleware = applyMiddleware(thunk) // without redux dev tools
const store = createStore(reducer, middleware)

// store.dispatch(actionCreators.createCake("Black Forest Gatêaux"))
// store.dispatch(actionCreators.createCake("Torta de Tres Leches"))

// store.dispatch(actionCreators.createGerbil("Myrtle"))
// store.dispatch(actionCreators.createGerbil("Conrad"))

// console.log(store.getState())

ReactDOM.render(<Provider store={ store }>
                  <App />
                </Provider>, document.getElementById('root'));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
