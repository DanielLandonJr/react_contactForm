import React, { Component } from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';

import { Provider } from './context';

// components
import Header from './components/layout/Header';
import Contacts from './components/contacts/Contacts';
import AddContact from './components/contacts/AddContact';
import EditContact from './components/contacts/EditContact';
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
      // in order to use this.context.api the entire app must be wrapped in the provider tag
      <Provider>
        {/* fix needed to allow gh-pages to work correctly */}
        <Router basename={process.env.PUBLIC_URL}>
          <div className="App">
            <Header />
            <div className="container">
              {/* routes must be wrapped in switch so a 404 can be included at the bottom of the route list */}
              <Switch>
                <Route exact path="/" component={Contacts} />
                <Route exact path="/contact/add" component={AddContact} />
                {/* need id as well */}
                <Route exact path="/contact/edit/:id" component={EditContact} />
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
