'use client';

import { getWeather } from '@/lib/actions';
import { useCoordinatesStore } from '@/lib/stores';
import { useQuery } from '@tanstack/react-query';
import Sunset from './Sunset';
import Wind from './Wind';
import Visibility from './Visibility';
import Pressure from './Pressure';
import Humidity from './Humidity';

export default function OtherInformation() {
  const { lat, lon } = useCoordinatesStore();

  const {
    data: otherInfoWeatherList,
    isLoading,
    error,
  } = useQuery({
    queryKey: ['otherInfoWeather', lat, lon],
    queryFn: () => getWeather(lat, lon),
  });

  return (
    <>
      <Sunset
        otherInfoWeatherList={otherInfoWeatherList}
        isLoading={isLoading}
        error={error}
      />
      <Wind
        otherInfoWeatherList={otherInfoWeatherList}
        isLoading={isLoading}
        error={error}
      />
      <Humidity
        otherInfoWeatherList={otherInfoWeatherList}
        isLoading={isLoading}
        error={error}
      />
      <Visibility
        otherInfoWeatherList={otherInfoWeatherList}
        isLoading={isLoading}
        error={error}
      />
      <Pressure
        otherInfoWeatherList={otherInfoWeatherList}
        isLoading={isLoading}
        error={error}
      />
    </>
  );
}
