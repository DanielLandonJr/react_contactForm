import React, { Component } from 'react';

export default class AddContact extends Component {
  // form objects are part of the state
  state = {
    name: '',
    email: '',
    phone: ''
  };

  render() {
    const { name, email, phone } = this.state;

    return (
      <div className="card mb-3">
        <div className="card-header">Add Contact</div>
        <div className="card-body">
          <form>
            {/* because value has been set for the fileds this now considered a controlled component. need to create event handler for change to make any changes to the fields */}
            <div className="form-group">
              <label htmlFor="name">Name:</label>
              <input
                type="text"
                name="name"
                id="name"
                className="form-control form-control-lg"
                placeholder="Enter Name ..."
                value={name}
              />
            </div>
            <div className="form-group">
              <label htmlFor="email">Email:</label>
              <input
                type="email"
                name="email"
                id="email"
                className="form-control form-control-lg"
                placeholder="Enter Email ..."
                value={email}
              />
            </div>
            <div className="form-group">
              <label htmlFor="phone">Phone:</label>
              <input
                type="text"
                name="phone"
                id="phone"
                className="form-control form-control-lg"
                placeholder="Enter Phone Number ..."
                value={phone}
              />
            </div>
            <input
              type="submit"
              value="Add Contact"
              className="btn btn-dark btn-block"
            />
          </form>
        </div>
      </div>
    );
  }
}
