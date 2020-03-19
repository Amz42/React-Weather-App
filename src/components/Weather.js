import React, { Component } from 'react';

class Weather extends Component {
    render() {
        const {temprature,city,country,humidity,description,windspeed,error} = this.props;
        let temp = temprature-273;
        temp = temp.toFixed(2);
        let weather_icon;
        switch(description){
            case "haze": weather_icon="https://image.flaticon.com/icons/svg/728/728092.svg"; break;
            case "broken clouds": weather_icon="https://image.flaticon.com/icons/svg/2693/2693327.svg"; break;
            case "few clouds": weather_icon="https://image.flaticon.com/icons/svg/2698/2698250.svg"; break;
            case "drizzle rain": weather_icon="https://image.flaticon.com/icons/svg/557/557678.svg"; break;
            case "overcast clouds": weather_icon="https://image.flaticon.com/icons/svg/414/414825.svg"; break;
            case "light rain": weather_icon="https://image.flaticon.com/icons/svg/615/615559.svg"; break;
            case "scattered clouds": weather_icon="https://image.flaticon.com/icons/svg/2698/2698250.svg"; break;
            case "clear sky": weather_icon="https://image.flaticon.com/icons/svg/890/890347.svg"; break;
            case "light snow": weather_icon="https://image.flaticon.com/icons/svg/2675/2675922.svg"; break;
            case "smoke": weather_icon="https://image.flaticon.com/icons/svg/2333/2333636.svg"; break;
            case "mist": weather_icon="https://image.flaticon.com/icons/svg/175/175872.svg"; break;
            case "moderate rain": weather_icon="https://image.flaticon.com/icons/svg/456/456165.svg"; break;
        }
        return (
            <div>
                {                
                    <div className="card text-center">
                        <div className="card-body">
                            {
                                city && country &&
                                <React.Fragment>
                                    <img className="card-img-top" src={weather_icon} width="100" height="100"/>
                                    <h6 className="card-text">{description}</h6>
                                    <hr />
                                    <h5 className="card-title">
                                        <i className="fas fa-map-marked-alt"></i>
                                        &nbsp; {city}, {country}
                                    </h5>
                                    <p className="card-text">
                                        <i className="fas fa-thermometer-three-quarters"></i>
                                        &nbsp; {temp} &#8451;
                                    </p>
                                    <p className="card-text">
                                        Humidity {humidity} %
                                    </p>
                                    <p className="card-text">Windspeed {windspeed} m/s</p>
                                </React.Fragment>
                            }
                            {
                                city === undefined && error === undefined && 
                                <h3 className="text-muted">No Data To Display...</h3>
                            }
                            {
                                error &&
                                <div className="alert alert-danger">
                                    <strong>{error}</strong>
                                </div> 
                            }
                        </div>
                    </div>
                }
            </div>
        )
    }
}

export default Weather;


// broken clouds
// haze
// few clouds
// drizzle rain
// `overcast clouds`
// light rain
// scattered clouds
// clear sky
// light snow
// smoke
// mist
// 