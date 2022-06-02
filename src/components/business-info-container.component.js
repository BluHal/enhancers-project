import React, { Component } from "react";

export default class BusinessInfoContainer extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <div className="BusinessesInfoContainer">
        <p>Businesses:</p>
        <ul>
          {this.props.data.map((business) => (
            <li>{business.name}</li>
          ))}
        </ul>
      </div>
    );
  }
}
