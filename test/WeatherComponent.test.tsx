import React from 'react';
import {render, fireEvent} from '@testing-library/react-native';
import WeatherComponent from '../WeatherComponent';

describe('WeatherComponent', () => {
  it('renders correctly and handles service toggle', () => {
    const {getByText, getByPlaceholderText} = render(<WeatherComponent />);

    // Check initial rendering
    expect(getByPlaceholderText('Enter location')).toBeTruthy();

    // Simulate toggling service
    fireEvent.press(getByText(/Switch to Tomorrow.io/));
    expect(getByText(/Switch to WeatherAPI/)).toBeTruthy();
  });
});
