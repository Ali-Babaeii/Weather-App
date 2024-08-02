import React from 'react';
import {TouchableOpacity, Text, StyleSheet} from 'react-native';

interface FetchButtonProps {
  onPress: () => void;
  styles: {
    fetchButton: object;
    fetchButtonText: object;
  };
}

const FetchButton: React.FC<FetchButtonProps> = ({onPress, styles}) => {
  return (
    <TouchableOpacity
      style={[baseStyles.fetchButton, styles.fetchButton]}
      onPress={onPress}>
      <Text style={[baseStyles.fetchButtonText, styles.fetchButtonText]}>
        Fetch Weather
      </Text>
    </TouchableOpacity>
  );
};

const baseStyles = StyleSheet.create({
  fetchButton: {
    width: '100%',
    padding: 20,
    alignItems: 'center',
    borderRadius: 30,
  },
  fetchButtonText: {
    color: 'white',
    fontSize: 18,
    fontWeight: 'bold',
  },
});

export default FetchButton;
