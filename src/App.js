import React, { Component } from 'react'
import './App.css'
import { Provider } from 'react-redux'
import configureStore from './configureStore'

class App extends Component {
  render() {
    const store = configureStore()
    return (
      <Provider store={store}>
        <div className="App">
          hello
        </div>
      </Provider>
    );
  }
}

export default App;
