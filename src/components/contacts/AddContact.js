import React, { Component } from 'react';
import { Consumer } from '../../context';
import uuid from 'uuid';
import TextInputGroup from '../layout/TextInputGroup';

export default class AddContact extends Component {
  // form objects are part of the state
  state = {
    name: '',
    email: '',
    phone: ''
  };

  onChange = event => {
    // allows us to change the values in the fields, does not update the state
    this.setState({ [event.target.name]: event.target.value });
  };

  onSubmit = (dispatch, event) => {
    event.preventDefault();

    // get values from state
    const { name, email, phone } = this.state;

    const newContact = {
      id: uuid(),
      name: name,
      email: email,
      phone: phone
    };

    dispatch({ type: 'ADD_CONTACT', payload: newContact });

    // clear the fields
    this.setState({
      name: '',
      email: '',
      phone: ''
    });
  };

  render() {
    const { name, email, phone } = this.state;

    return (
      <Consumer>
        {value => {
          const { dispatch } = value;

          return (
            <div className="card mb-3">
              <div className="card-header">Add Contact</div>
              <div className="card-body">
                <form onSubmit={this.onSubmit.bind(this, dispatch)}>
                  {/* because value has been set for the fileds this now considered a controlled component. need to create event handler for change to make any changes to the fields */}
                  <TextInputGroup
                    label="Name:"
                    name="name"
                    value={name}
                    placeHolder="Enter Name ..."
                    type="text"
                    onChange={this.onChange}
                  />
                  <TextInputGroup
                    label="Email:"
                    name="email"
                    value={email}
                    placeHolder="Enter Email ..."
                    type="email"
                    onChange={this.onChange}
                  />
                  <TextInputGroup
                    label="Phone:"
                    name="phone"
                    value={phone}
                    placeHolder="Enter Phone Number ..."
                    type="text"
                    onChange={this.onChange}
                  />
                  <input
                    type="submit"
                    value="Add Contact"
                    className="btn btn-dark btn-block"
                  />
                </form>
              </div>
            </div>
          );
        }}
      </Consumer>
    );
  }
}
