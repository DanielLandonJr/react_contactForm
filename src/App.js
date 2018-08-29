import React, { Component } from 'react';

// components
import Header from './components/Header';
import Contact from './components/Contacts';

// css
import './App.css';

// this is the main Component, everything links into here
class App extends Component {
  render() {
    // can put any js code inside render but before return
    return (
      // this code must return a single Element, a div

      // everything inside the div tag below is what is displayed for the component
      <div className="App">
        <Header />
        <Contact />
      </div>
    );
  }
}

export default App;
