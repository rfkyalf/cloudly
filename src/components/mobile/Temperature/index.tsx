'use client';

import { getWeather } from '@/lib/actions';
import { useCoordinatesStore } from '@/lib/stores';
import { celvinToCelsius, getDay, getHours } from '@/lib/utils';
import { useQuery } from '@tanstack/react-query';
import Image from 'next/image';
import { FaChevronDown, FaChevronUp } from 'react-icons/fa6';

export default function TemperatureSection() {
  const { lat, lon } = useCoordinatesStore();

  const {
    data: weatherData,
    isLoading,
    error,
  } = useQuery({
    queryKey: ['weather', lat, lon],
    queryFn: () => getWeather(lat, lon),
  });

  const isDay = weatherData?.weather[0].icon?.includes('d');

  if (isLoading) return <div>Loading...</div>;

  if (error) return <div>{error.message}</div>;

  return (
    <section
      className={`w-full flex flex-col items-center pt-14 pb-4 rounded-b-3xl shadow-xl
        ${
          isDay
            ? 'bg-gradient-to-t from-blue-600 via-blue-500 to-blue-600'
            : 'bg-gradient-to-t from-indigo-600 via-indigo-500 to-indigo-600'
        }
        `}
    >
      <h3 className="text-[1.2rem] text-neutral-200 pt-2">
        {getDay(weatherData?.dt, weatherData?.timezone)}
      </h3>
      <h4 className="text-[0.9rem] text-neutral-300">
        {getHours(weatherData?.dt)}
      </h4>
      <Image
        src={`/${weatherData?.weather[0].icon}.png`}
        alt={weatherData?.weather[0].description}
        width={500}
        height={500}
        className="size-36 object-contain my-4"
        priority
      />
      <h3 className="text-[1.2rem] text-neutral-200">{weatherData?.name}</h3>
      <h1 className="text-[4rem] text-neutral-100">
        {celvinToCelsius(weatherData?.main.temp)}°
      </h1>
      <h2 className="text-[1rem] text-neutral-300 capitalize">
        {weatherData?.weather[0].description}
      </h2>
      <div className="flex items-center gap-x-8 text-[1rem] text-neutral-100 mt-4">
        <span className="flex items-center gap-x-2">
          <FaChevronUp className="size-3 text-neutral-300" />
          <span>{celvinToCelsius(weatherData?.main.temp_max)}°</span>
        </span>
        <span className="flex items-center gap-x-2">
          <FaChevronDown className="size-3 text-neutral-300" />
          <span>{celvinToCelsius(weatherData?.main.temp_min)}°</span>
        </span>
      </div>
    </section>
  );
}
