import React from 'react';
import {View, Text, StyleSheet} from 'react-native';

interface WeatherInfoProps {
  location: string;
  temperature: string;
  condition: string;
}

const WeatherInfo: React.FC<WeatherInfoProps> = ({
  location,
  temperature,
  condition,
}) => {
  return (
    <View style={styles.weatherInfo}>
      <Text style={styles.infoTitle}>Location: {location}</Text>
      <Text style={styles.infoTitle}>Temperature: {temperature}</Text>
      <Text style={styles.infoTitle}>Condition: {condition}</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  weatherInfo: {
    marginTop: 16,
    gap: 10,
  },
  infoTitle: {
    fontSize: 24,
    fontWeight: '600',
  },
});

export default WeatherInfo;
