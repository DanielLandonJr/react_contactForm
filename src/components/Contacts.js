import React, { Component } from 'react';
import Contact from './Contact';
import { Consumer } from '../context';

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
