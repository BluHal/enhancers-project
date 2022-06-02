import React, { Component } from "react";
import CityInfoStyle from "./CityInfo.module.css";
import axios from "axios";
import BusinessInfo from "./business-info-container.component";
import WeatherInfo from "./weather-info.component";

export default class CityInfo extends Component {
  constructor(props) {
    super(props);
    this.state = {
      citiesInfo: [],
    };
  }

  componentDidMount() {
    axios.get(`http://localhost:5000/getCitiesInfo`).then((res) => {
      const citiesInfo = res.data;
      this.setState({
        citiesInfo: citiesInfo,
      });
    });
  }

  render() {
    if (this.state.citiesInfo.length == 0) {
      return (
        <div className={CityInfoStyle.loader}>
          <h1>Loading...</h1>
        </div>
      );
    }
    return (
      <div className={CityInfoStyle.gridWrapper}>
        {this.state.citiesInfo.map((cityInfo) => (
          <div className="CityInfo" key={cityInfo.name}>
            <h1>{cityInfo.name}</h1>
            <WeatherInfo data={cityInfo.weather}></WeatherInfo>
            <BusinessInfo data={cityInfo.businesses}></BusinessInfo>
          </div>
        ))}
      </div>
    );
  }
}
