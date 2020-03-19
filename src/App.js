import React, { Component } from 'react';

import Title from './components/Title';
import Form from './components/Form';
import Weather from './components/Weather';

import './App.css';

const API_KEY = "e4cd7b1f7d335d9b20e9bf8e78a06fb6";

class App extends Component{

  state = {
    temprature: undefined,
    city: undefined,
    country: undefined,
    humidity: undefined,
    windspeed: undefined,
    description: undefined,
    error: undefined
  }

  getWeather = async (event) => {
    event.preventDefault();
    const city = event.target.elements.city.value;

    if(city == "") return

    const api_call = await fetch(`https://api.openweathermap.org/data/2.5/weather?q=${city}&APPID=${API_KEY}`);
    const data = await api_call.json();
    console.log(data);

    if(data.cod=="404"){
      this.setState({
        error: "Wrong Details",
        temprature: undefined,
        city: undefined,
        country: undefined,
        humidity: undefined,
        windspeed: undefined,
        description: undefined
      });
      return
    }

    this.setState({
      temprature: data.main.temp,
      city: data.name,
      country: data.sys.country,
      humidity: data.main.humidity,
      windspeed: data.wind.speed,
      description: data.weather[0].description,
      error: undefined
    });
  }

  render(){

    return (
      <div className="container">
        <Title />
        <br/>

        <div className="row">
            <div className="col-lg-4"></div>
            <div className="col-lg-4 user-form-div">
              <Form getWeather={this.getWeather} />
            </div>
            <div className="col-lg-4"></div>
        </div>
        <div className="row">
            <div className="col-lg-4"></div>
            <div className="col-lg-4 weather-data">
              <Weather 
                temprature = {this.state.temprature}
                city = {this.state.city}
                country = {this.state.country}
                humidity = {this.state.humidity}
                description = {this.state.description}
                windspeed = {this.state.windspeed}
                error = {this.state.error}
              />
            </div>
            <div className="col-lg-4"></div>
        </div>

      </div>
    )
  }
}

export default App;