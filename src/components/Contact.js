// this type of component will have state....or data that can change

// created using emmet command rcc then tab.
import React, { Component } from 'react';
import PropTypes from 'prop-types';

export default class Contacts extends Component {
  state = {
    showContactInfo: false
  };

  // custom components are not part of the normal lifecycle methods available...'this' will not normally work. If i declare the function using es6 arrow funtion (like below) then 'this' will work without having to do any weird binding using .bind(this) in the function call or constructor
  // onShowClick = event => {
  //   // cannot change state directly it is immutable???? so you have to do an indirect change like below
  //   // we want to flip between true/false so !this.state.showContactInfo will change the value to the opposite of what it currently is
  //   this.setState({ showContactInfo: !this.state.showContactInfo });
  // };

  render() {
    // to get props value use this.props.propName
    // destructure the this.props to get the parts that we want
    // this version has each item passed to it separately
    // const { name, email, phone } = this.props;
    // this version has everything passed in as one object and then split apart
    const { name, email, phone } = this.props.contact;

    // pull showContactInfo from the state
    const { showContactInfo } = this.state;

    return (
      <div className="card card-body mb-3">
        <h4>
          {/* you do not need to call the function as below */}
          {/* {name} <i onClick={this.onShowClick} className="fas fa-sort-down" /> */}
          {/* you can just include the code here in the onClick using arrow function, if that floats your boat */}
          {name}{' '}
          <i
            onClick={() => {
              this.setState({ showContactInfo: !this.state.showContactInfo });
            }}
            className="fas fa-sort-down"
          />
        </h4>
        {/* if showContactInfo true then show else not show */}
        {showContactInfo ? (
          <ul className="list-group">
            <li className="list-group-item">eMail: {email}</li>
            <li className="list-group-item">Phone: {phone}</li>
          </ul>
        ) : null}
      </div>
    );
  }
}

// prop types
Contacts.propTypes = {
  contact: PropTypes.object.isRequired
};
