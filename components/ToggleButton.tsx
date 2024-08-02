import React from 'react';
import {TouchableOpacity, Text, StyleSheet} from 'react-native';

interface ToggleButtonProps {
  onPress: () => void;
  currentService: string;
  styles: {
    toggleButton: object;
    toggleButtonText: object;
  };
}

const ToggleButton: React.FC<ToggleButtonProps> = ({
  onPress,
  currentService,
  styles,
}) => {
  return (
    <TouchableOpacity
      style={[baseStyles.toggleButton, styles.toggleButton]}
      onPress={onPress}>
      <Text style={[baseStyles.toggleButtonText, styles.toggleButtonText]}>
        {`Switch to ${
          currentService === 'tomorrowIo' ? 'WeatherAPI' : 'Tomorrow.io'
        }`}
      </Text>
    </TouchableOpacity>
  );
};

const baseStyles = StyleSheet.create({
  toggleButton: {
    width: '100%',
    padding: 20,
    alignItems: 'center',
    borderRadius: 30,
    borderWidth: 1,
  },
  toggleButtonText: {
    fontSize: 18,
    fontWeight: 'bold',
  },
});

export default ToggleButton;
