import axios from 'axios';
import {WeatherData, WeatherService} from './weatherService';

const API_KEY = 'ARErSkmGQLeZG3V7G7JcIa51DQy8MFA9';

const tomorrowIoService: WeatherService = {
  async fetchWeather(location: string): Promise<WeatherData | null> {
    try {
      const response = await axios.get(
        `https://api.tomorrow.io/v4/weather/forecast?location=${location}&apikey=${API_KEY}`,
      );
      const data = response.data;
      return {
        temperature: `${data.data.timelines[0].intervals[0].values.temperature}°C`,
        condition: data.data.timelines[0].intervals[0].values.weatherCode,
        location,
      };
    } catch {
      return null;
    }
  },
};

export default tomorrowIoService;
