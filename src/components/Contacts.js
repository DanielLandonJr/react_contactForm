// this type of component will have state....or data that can change

// created using emmet command rcc then tab.
import React, { Component } from 'react';
import PropTypes from 'prop-types';

export default class Contacts extends Component {
  render() {
    // to get props value use this.props.propName
    // destructure the this.props to get the parts that we want
    const { name, email, phone } = this.props;
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

// prop defaults
Contacts.defaultProps = {
  name: 'Name Not Found',
  email: 'No Email Found',
  phone: 'No Phone Found'
};

// prop types
Contacts.propTypes = {
  name: PropTypes.string.isRequired,
  email: PropTypes.string.isRequired,
  phone: PropTypes.string.isRequired
};
