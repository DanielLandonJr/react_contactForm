import React, { Component } from 'react';
import Contact from './Contact';
import { Consumer } from '../../context';

export default class Contacts extends Component {
  render() {
    return (
      // wrap everything inside consumer tag
      <Consumer>
        {value => {
          // pull contacts from the returned value from consumer
          const { contacts } = value;

          return (
            <React.Fragment>
              <h1 className="display-4 mb-2">
                <span className="text-danger">Contact</span> List
              </h1>
              {contacts.map(contact => (
                <Contact key={contact.id} contact={contact} />
              ))}
            </React.Fragment>
          );
        }}
      </Consumer>
    );
  }
}
