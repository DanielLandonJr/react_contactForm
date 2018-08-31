import React, { Component } from 'react';
import axios from 'axios';

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
    case 'ADD_CONTACT':
      // spread operator
      return {
        ...state,
        contacts: [action.payload, ...state.contacts]
      };
    case 'UPDATE_CONTACT':
      // spread operator
      return {
        ...state,
        contacts: state.contacts.map(
          contact =>
            contact.id === action.payload.id
              ? (contact = action.payload)
              : contact
        )
      };
    default:
      return state;
  }
};

export class Provider extends Component {
  state = {
    // contacts: [
    //   {
    //     id: 1,
    //     name: 'John Doe',
    //     email: 'jdoe@gmail.com',
    //     phone: '111.111.1111'
    //   }
    // ],
    contacts: [],
    // action passed in the state that then calls reducer and passes the state and action to the reducer
    dispatch: action => this.setState(state => reducer(state, action))
  };

  async componentDidMount() {
    // make call to api to get place holder data
    try {
      const response = await axios.get(
        'https://jsonplaceholder.typicode.com/users'
      );

      this.setState({ contacts: response.data });
    } catch (error) {
      console.log(error);
    }
  }

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
