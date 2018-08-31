import React, { Component } from 'react';

const Context = React.createContext();

// evaluate action type
const reducer = (state, action) => {
  switch (action.type) {
    case 'DELETE_CONTACT':
      // spread operator
      return {
        ...state,
        // filter the state so that is no longer contains the item to delete
        contacts: state.contacts.filter(
          contact => contact.id !== action.payload
        )
      };
    default:
      return state;
  }
};

export class Provider extends Component {
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
    ],
    // action passed in the state that then calls reducer and passes the state and action to the reducer
    dispatch: action => this.setState(state => reducer(state, action))
  };

  render() {
    return (
      // this makes the entire state available to the application, i could narrow it down to a couple items but this works better in my opinion
      <Context.Provider value={this.state}>
        {this.props.children}
      </Context.Provider>
    );
  }
}

// exporting like this will allow us to just use 'Cunsumer' in our code
// also exporting everything like we are doing will allow us to access 'global' functions as well as data
export const Consumer = Context.Consumer;
