import axios from 'axios';

const API_KEY = '26eb0077cc6fd84a044735a8e5eb8668';
const ROOT_URL = `http://api.openweathermap.org/data/2.5/forecast?appid=${API_KEY}`;

export const FETCH_WEATHER = 'FETCH_WEATHER';

export function fetchWeather(city) {
    let url = `${ROOT_URL}&q=${city},ca`;
    let request = axios.get(url);

    return {
        type: FETCH_WEATHER,
        payload: request
    }
}