// this type of component will have state....or data that can change

// created using emmet command rcc then tab.
import React, { Component } from 'react';

export default class Contacts extends Component {
  render() {
    // to get props value use this.props.propName
    // destructure the this.props to get the parts that we want
    const { name, email, phone } = this.props;
    return (
      <div>
        <h4>{name}</h4>
        <ul>
          <li>eMail: {email}</li>
          <li>Phone: {phone}</li>
        </ul>
      </div>
    );
  }
}
