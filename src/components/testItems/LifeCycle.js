import React, { Component } from 'react';

export default class LifeCycle extends Component {
  componentDidMount() {
    // the component did mount
    console.log(this.componentDidMount.name);
  }

  componentWillMount() {
    // fired when the component is about to mount before componentDidMount
    console.log(this.componentWillMount.name);
  }

  componentDidUpdate() {
    // fired when there is some sort of update to the component
    console.log(this.componentDidUpdate.name);
  }

  componentWillUpdate() {
    // fired when the component is about to update before componentDidUpdate
    console.log(this.componentWillUpdate.name);
  }

  render() {
    return (
      <div>
        <h1 className="display-4">
          <span className="text-danger">TEST:</span> LifeCycle
        </h1>
      </div>
    );
  }
}
