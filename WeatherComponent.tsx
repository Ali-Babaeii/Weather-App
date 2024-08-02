import React, {useState, useEffect} from 'react';
import {View, TextInput, StyleSheet, Alert, Image, Text} from 'react-native';
import tomorrowIoService from './services/tomorrowIoService';
import weatherApiService from './services/weatherApiService';
import weather from './assets/images/weather.png'; // Default image
import WeatherInfo from './components/WeatherInfor';
import FetchButton from './components/FetchButton';
import ToggleButton from './components/ToggleButton';

type WeatherServiceKey = 'tomorrowIo' | 'weatherAPI';

const services = {
  tomorrowIo: tomorrowIoService,
  weatherAPI: weatherApiService,
};

const WeatherComponent: React.FC = () => {
  const [location, setLocation] = useState('');
  const [weatherData, setWeatherData] = useState<null | {
    temperature: string;
    condition: string;
    location: string;
  }>(null);
  const [service, setService] = useState<WeatherServiceKey>('weatherAPI');

  useEffect(() => {
    if (location) {
      fetchWeather();
    }
  }, [service]);

  const fetchWeather = async () => {
    if (!location) {
      Alert.alert(
        'Validation Error',
        'Location is required to fetch weather data.',
      );
      return;
    }

    try {
      const data = await services[service].fetchWeather(location);
      if (data) {
        setWeatherData(data);
      } else {
        Alert.alert('Error', 'Unable to fetch weather data.');
      }
    } catch (error) {
      console.error(error);
    }
  };

  const handleFetchWeather = () => {
    fetchWeather();
  };

  const handleToggleService = () => {
    setService(prevService =>
      prevService === 'tomorrowIo' ? 'weatherAPI' : 'tomorrowIo',
    );
  };

  const currentStyles =
    service === 'weatherAPI' ? weatherAPIStyles : tomorrowIoStyles;
  const serviceText =
    service === 'weatherAPI' ? 'Data from WeatherAPI' : 'Data from Tomorrow.io';

  return (
    <View style={styles.container}>
      <View style={{alignItems: 'center'}}>
        <TextInput
          style={[styles.input, currentStyles.input]}
          placeholder="Enter location"
          value={location}
          onChangeText={setLocation}
        />
      </View>

      <View
        style={{flex: 1, alignItems: 'center', justifyContent: 'space-evenly'}}>
        <Text style={styles.serviceText}>{serviceText}</Text>
        <Image style={styles.image} source={weather} />
        {weatherData && (
          <WeatherInfo
            location={weatherData.location}
            temperature={weatherData.temperature}
            condition={weatherData.condition}
          />
        )}
      </View>

      <View style={{alignItems: 'center', gap: 12}}>
        <FetchButton onPress={handleFetchWeather} styles={currentStyles} />
        <ToggleButton
          onPress={handleToggleService}
          currentService={service}
          styles={currentStyles}
        />
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 16,
  },
  image: {
    width: 220,
    height: 220,
    resizeMode: 'contain',
  },
  input: {
    height: 50,
    borderRadius: 14,
    borderWidth: 2,
    marginBottom: 12,
    width: '100%',
    paddingHorizontal: 8,
  },
  serviceText: {
    fontSize: 18,
    fontWeight: 'bold',
    marginBottom: 8,
  },
});

// Styles for Tomorrow.io service
const tomorrowIoStyles = StyleSheet.create({
  input: {
    borderColor: '#007aff',
  },
  fetchButton: {
    backgroundColor: '#007aff',
  },
  fetchButtonText: {
    color: 'white',
  },
  toggleButton: {
    borderColor: '#007aff',
  },
  toggleButtonText: {
    color: '#007aff',
  },
});

// Styles for WeatherAPI service
const weatherAPIStyles = StyleSheet.create({
  input: {
    borderColor: '#e91e63',
  },
  fetchButton: {
    backgroundColor: '#e91e63',
  },
  fetchButtonText: {
    color: 'white',
  },
  toggleButton: {
    borderColor: '#e91e63',
  },
  toggleButtonText: {
    color: '#e91e63',
  },
});

export default WeatherComponent;
