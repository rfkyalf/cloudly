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

  const { data: otherInfoWeatherList } = useQuery({
    queryKey: ['otherInfoWeather', lat, lon],
    queryFn: () => getWeather(lat, lon),
  });

  return (
    <>
      <Sunset otherInfoWeatherList={otherInfoWeatherList} />
      <Wind otherInfoWeatherList={otherInfoWeatherList} />
      <Humidity otherInfoWeatherList={otherInfoWeatherList} />
      <Visibility otherInfoWeatherList={otherInfoWeatherList} />
      <Pressure otherInfoWeatherList={otherInfoWeatherList} />
    </>
  );
}
