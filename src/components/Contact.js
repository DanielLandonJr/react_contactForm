// this type of component will have state....or data that can change

// created using emmet command rcc then tab.
import React, { Component } from 'react';
import PropTypes from 'prop-types';

export default class Contacts extends Component {
  render() {
    // to get props value use this.props.propName
    // destructure the this.props to get the parts that we want
    // this version has each item passed to it separately
    // const { name, email, phone } = this.props;
    // this version has everything passed in as one object and then split apart
    const { name, email, phone } = this.props.contact;

    return (
      <div className="card card-body mb-3">
        <h4>{name}</h4>
        <ul className="list-group">
          <li className="list-group-item">eMail: {email}</li>
          <li className="list-group-item">Phone: {phone}</li>
        </ul>
      </div>
    );
  }
}

// prop types
Contacts.propTypes = {
  contact: PropTypes.object.isRequired
};
