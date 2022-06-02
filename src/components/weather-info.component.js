import React, { Component } from "react";

export default class WeatherInfo extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <p>
        Today's weather:{" "}
        {this.props.data.charAt(0).toUpperCase() + this.props.data.slice(1)}
      </p>
    );
  }
}
