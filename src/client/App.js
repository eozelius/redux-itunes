import React, { Component } from 'react'
import { Provider } from 'react-redux'
import configureStore from './configureStore'
import ItunesContainer from './containers/ItunesContainer'

class App extends Component {
  render() {
    const store = configureStore()
    return (
      <Provider store={store}>
        <div className="App">
          <ItunesContainer />
        </div>
      </Provider>
    );
  }
}

export default App
