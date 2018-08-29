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

  render() {
    // pull contacts from state
    const { contacts } = this.state;

    return (
      <div>
        {contacts.map(contact => (
          // pass entire contact object instead of each item separately
          <Contact key={contact.id} contact={contact} />
          // // pass individual items to contact
          // <Contact
          //   key={contact.id}
          //   name={contact.name}
          //   email={contact.email}
          //   phone={contact.phone}
          // />
        ))}
      </div>
    );
  }
}
