import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { Consumer } from '../context';

export default class Contacts extends Component {
  state = {
    // determine initial display of contact info
    showContactInfo: false
  };

  onDeleteClick = (id, dispatch, event) => {
    // call the dispath item in the state to remove contact
    dispatch({ type: 'DELETE_CONTACT', payload: id });
  };

  render() {
    const { id, name, email, phone } = this.props.contact;

    const { showContactInfo } = this.state;

    return (
      // wrap everything inside consumer so we can access the state
      <Consumer>
        {value => {
          const { dispatch } = value;
          return (
            <div className="card card-body mb-3">
              <h4>
                {name}{' '}
                <i
                  onClick={() => {
                    this.setState({
                      showContactInfo: !this.state.showContactInfo
                    });
                  }}
                  className="fas fa-sort-down"
                  style={{ cursor: 'pointer' }}
                />
                <div
                  className="fas fa-times"
                  style={{ cursor: 'pointer', color: 'red', float: 'right' }}
                  onClick={this.onDeleteClick.bind(this, id, dispatch)}
                />
              </h4>
              {showContactInfo ? (
                <ul className="list-group">
                  <li className="list-group-item">eMail: {email}</li>
                  <li className="list-group-item">Phone: {phone}</li>
                </ul>
              ) : null}
            </div>
          );
        }}
      </Consumer>
    );
  }
}

// prop types
Contacts.propTypes = {
  contact: PropTypes.object.isRequired
};
