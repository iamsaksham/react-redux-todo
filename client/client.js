import React from 'react'
import { render } from 'react-dom'
import App from '../components/App'

import configureStore from '../redux/store'
import { Provider } from 'react-redux'

// provider connects store to actual components

let initialState = {
  todos: [{
    id: 0,
    completed: false,
    text: 'Initial Todo'
  }]
}

//configure and create store
//var store = createStore(reducers, initialState) //[]

let store = configureStore(initialState)

render(
  <Provider store={store}>
   <App/>
   </Provider>,
  document.getElementById('app')
)
