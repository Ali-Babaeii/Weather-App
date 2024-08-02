import React from 'react';
import {render, fireEvent} from '@testing-library/react-native';
import ToggleButton from '../components/ToggleButton';

describe('ToggleButton Component', () => {
  it('renders correctly and handles press events', () => {
    const mockOnPress = jest.fn();
    const {getByText} = render(
      <ToggleButton
        onPress={mockOnPress}
        currentService="weatherAPI"
        styles={{
          toggleButton: {borderColor: 'red'},
          toggleButtonText: {color: 'red'},
        }}
      />,
    );

    const button = getByText(/Switch to Tomorrow.io/);
    expect(button).toBeTruthy();

    fireEvent.press(button);
    expect(mockOnPress).toHaveBeenCalled();
  });
});
