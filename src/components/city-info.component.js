import React, { Component } from "react";
import axios from "axios";

export default class CityInfo extends Component {
  constructor(props) {
    super(props);
    this.state = {
      citiesInfo: [],
    };
  }

  componentDidMount() {
    axios.get(`http://localhost:5000/cities`).then((res) => {
      console.log(res);
    });
  }

  render() {
    return (
      <div>
        <p>Cities Info Component</p>
      </div>
    );
  }
}
