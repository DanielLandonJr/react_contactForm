import React, { Component } from 'react';
import Contact from './Contact';

export default class Contacts extends Component {
  // no need for constructor if all you need is the state
  state = {
    contacts: [
      {
        id: 1,
        name: 'John Doe',
        email: 'jdoe@gmail.com',
        phone: '111.111.1111'
      },
      {
        id: 2,
        name: 'Karen Smith',
        email: 'ksmith@gmail.com',
        phone: '222.222.2222'
      },
      {
        id: 3,
        name: 'Henry Johnson',
        email: 'hjohnson@gmail.com',
        phone: '333.333.3333'
      }
    ]
  };

  deleteContact = (id, event) => {
    // remove contacts from state
    const { contacts } = this.state;

    const newContacts = contacts.filter(contact => contact.id !== id);

    this.setState({
      contacts: newContacts
    });
  };

  render() {
    // pull contacts from state
    const { contacts } = this.state;

    return (
      // we dont need to use a div tag Here. we dont really want to add another div tag to the dom but we do need to wrap this in some sort of 'container'. we can use React.Fragment instead
      <React.Fragment>
        {/* <div> */}
        {contacts.map(contact => (
          // each item must have a unique identifier...in this case we will use the id from state
          // pass entire contact object instead of each item separately
          // deleteClickHandler is a property that will allow the contact to call back to this class to delete item from state
          <Contact
            key={contact.id}
            contact={contact}
            deleteClickHandler={this.deleteContact.bind(this, contact.id)}
          />
          // // pass individual items to contact
          // <Contact
          //   key={contact.id}
          //   name={contact.name}
          //   email={contact.email}
          //   phone={contact.phone}
          // />
        ))}
        {/* </div> */}
      </React.Fragment>
    );
  }
}
