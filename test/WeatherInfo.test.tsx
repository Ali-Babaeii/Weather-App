import React from 'react';
import {render} from '@testing-library/react-native';
import WeatherInfo from '../components/WeatherInfor';

describe('WeatherInfo Component', () => {
  it('renders correctly with provided props', () => {
    const {getByText} = render(
      <WeatherInfo location="Berlin" temperature="25°C" condition="Sunny" />,
    );

    expect(getByText(/Location:/)).toBeTruthy();
    expect(getByText(/Berlin/)).toBeTruthy();
    expect(getByText(/Temperature:/)).toBeTruthy();
    expect(getByText(/25°C/)).toBeTruthy();
    expect(getByText(/Condition:/)).toBeTruthy();
    expect(getByText(/Sunny/)).toBeTruthy();
  });
});
