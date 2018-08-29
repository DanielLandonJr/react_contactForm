// this type of component will have state....or data that can change

// created using emmet command rcc then tab.
import React, { Component } from 'react';

export default class Contacts extends Component {
  render() {
    return (
      <div>
        <h4>John Doe</h4>
        <ul>
          <li>eMail: jdoe@gmail.com</li>
          <li>Phone: 555.555.5555</li>
        </ul>
      </div>
    );
  }
}
