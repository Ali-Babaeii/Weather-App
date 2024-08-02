import axios from 'axios';
import {WeatherData, WeatherService} from './weatherService';

const API_KEY = '9aa3563e6e0a4c739f193437240208';

const weatherApiService: WeatherService = {
  async fetchWeather(location: string): Promise<WeatherData | null> {
    try {
      const response = await axios.get(
        `https://api.weatherapi.com/v1/current.json?key=${API_KEY}&q=${location}&aqi=no`,
      );
      const data = response.data;
      return {
        temperature: `${data.current.temp_c}°C`,
        condition: data.current.condition.text,
        location: data.location.name,
      };
    } catch {
      return null;
    }
  },
};

export default weatherApiService;
