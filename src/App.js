import React, { Component } from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';

import { Provider } from './context';

// components
import Header from './components/layout/Header';
import Contacts from './components/contacts/Contacts';
import AddContact from './components/contacts/AddContact';
import LifeCycle from './components/testItems/LifeCycle';

// pages
import About from './components/pages/About';
import NotFound from './components/pages/NotFound';

// css
import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';

class App extends Component {
  render() {
    return (
      // in order to use the this.context.js data we must wrap everything in the app inside the provider tags
      <Provider>
        <Router>
          <div className="App">
            <Header />
            <div className="container">
              <Switch>
                <Route exact path="/" component={Contacts} />
                <Route exact path="/contact/add" component={AddContact} />
                <Route exact path="/about" component={About} />
                {/* test routes, things that are not part of the final project but for testing or demonstration */}
                <Route exact path="/test/lifecycle" component={LifeCycle} />
                {/* 404 */}
                <Route component={NotFound} />
              </Switch>
            </div>
          </div>
        </Router>
      </Provider>
    );
  }
}

export default App;
