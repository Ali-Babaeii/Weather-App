import React from 'react';
import {SafeAreaView, StyleSheet} from 'react-native';
import WeatherComponent from './WeatherComponent';

const App: React.FC = () => {
  return (
    <SafeAreaView style={styles.container}>
      <WeatherComponent />
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
  },
});

export default App;
