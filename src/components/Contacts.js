import React, { Component } from 'react';
import Contact from './Contact';
import { Consumer } from '../context';

export default class Contacts extends Component {
  deleteContact = (id, event) => {
    // remove contacts from state
    const { contacts } = this.state;

    const newContacts = contacts.filter(contact => contact.id !== id);

    this.setState({
      contacts: newContacts
    });
  };

  render() {
    return (
      // wrap everything inside consumer tag
      <Consumer>
        {value => {
          // pull contacts from the returned value from consumer
          const { contacts } = value;

          // all this is the same as before
          return (
            <React.Fragment>
              {contacts.map(contact => (
                <Contact
                  key={contact.id}
                  contact={contact}
                  deleteClickHandler={this.deleteContact.bind(this, contact.id)}
                />
              ))}
            </React.Fragment>
          );
        }}
      </Consumer>
    );
  }
}
