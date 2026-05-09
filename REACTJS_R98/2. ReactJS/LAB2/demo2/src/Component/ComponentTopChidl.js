import React, { Component } from "react";

class ComponentTopChidl extends Component {
  render() {
    let { DataAppToTopChild } = this.props;
    return <div>{DataAppToTopChild}</div>;
  }
}

export default ComponentTopChidl;
