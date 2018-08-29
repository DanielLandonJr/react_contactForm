import React, { Component } from 'react';
import Contact from './components/Contacts';
import './App.css';

// this is the main Component, everything links into here
class App extends Component {
  render() {
    // can put any js code inside render but before return
    return (
      // this code must return a single Element, a div

      // everything inside the div tag below is what is displayed for the component
      <div className="App">
        <h1>The App Component</h1>
        <Contact />
      </div>
    );
  }
}

export default App;
