import React, { Component } from 'react';

// components
import Header from './components/Header';
import Contacts from './components/Contacts';

// css
import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';

// this is the main Component, everything links into here
class App extends Component {
  render() {
    // can put any js code inside render but before return
    return (
      // this code must return a single Element, a div

      // everything inside the div tag below is what is displayed for the component
      <div className="App">
        {/* this will pass a value to functional component */}
        <Header />
        <div className="container">
          <Contacts />
        </div>
      </div>
    );
  }
}

export default App;
