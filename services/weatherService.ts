export interface WeatherData {
  temperature: string;
  condition: string;
  location: string;
}

export interface WeatherService {
  fetchWeather(location: string): Promise<WeatherData | null>;
}
