import React, { Component } from 'react';
import { connect } from 'react-redux';
import Chart from '../components/chart';
import GoogleMap from '../components/google_map';

class WeatherList extends Component {

    renderWeather(cityData) {
        let { lat, lon } = cityData.city.coord;
        let temps = cityData.list.map(weather => weather.main.temp);
        let pressures = cityData.list.map(weather => weather.main.pressure);
        let humidities = cityData.list.map(weather => weather.main.humidity);

        if (cityData.cod === '404') {
            return (
                <tr>
                    <td>No dice!</td>
                </tr>
            );
        }

        return (
            <tr key={cityData.city.id}>
                <td><GoogleMap lat={lat} lon={lon} /></td>
                <td><Chart data={temps} color="red" units="K" /></td>
                <td><Chart data={pressures} color="green" units="hPa" /></td>
                <td><Chart data={humidities} color="blue" units="%" /></td>
            </tr>
        );
    }

    render() {
        return (
            <table className="table table-hover">
                <thead>
                    <tr>
                        <th>City</th>
                        <th>Temperature (K)</th>
                        <th>Pressure (hPa)</th>
                        <th>Humidity (%)</th>
                    </tr>
                </thead>
                <tbody>
                    {this.props.weather.map(this.renderWeather)}
                </tbody>
            </table>
        );
    }
}

function mapStateToProps({weather}) {
    return {weather} // {weather} === {weather: weather}
}

export default connect(mapStateToProps)(WeatherList);
