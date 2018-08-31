import React, { Component } from 'react';

import { Provider } from './context';

// components
import Header from './components/Header';
import Contacts from './components/Contacts';

// css
import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';

class App extends Component {
  render() {
    return (
      // in order to use the this.context.js data we must wrap everything in the app inside the provider tags
      <Provider>
        <div className="App">
          <Header />
          <div className="container">
            <Contacts />
          </div>
        </div>
      </Provider>
    );
  }
}

export default App;
