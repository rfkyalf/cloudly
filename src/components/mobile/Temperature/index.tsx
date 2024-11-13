'use client';

import { getWeather } from '@/lib/actions';
import { useCoordinatesStore, useTemperatureStore } from '@/lib/stores';
import { celvinToCelsius, getDay, getHour } from '@/lib/utils';
import { useQuery } from '@tanstack/react-query';
import Image from 'next/image';
import { useEffect } from 'react';
import { FaChevronDown, FaChevronUp } from 'react-icons/fa6';

export default function TemperatureSection() {
  const { lat, lon } = useCoordinatesStore();
  const setTemperature = useTemperatureStore((state) => state.setTemperature);

  const {
    data: weatherData,
    isLoading,
    error,
  } = useQuery({
    queryKey: ['weather', lat, lon],
    queryFn: () => getWeather(lat, lon),
  });

  const temperature = weatherData?.main.temp;
  const icon = weatherData?.weather[0].icon;

  useEffect(() => {
    setTemperature(icon, temperature);
  }, [icon, temperature, setTemperature]);

  const isDay = weatherData?.weather[0].icon?.includes('d');

  if (isLoading)
    return (
      <section className="w-full h-[450px] bg-neutral-300 rounded-b-3xl">
        <div className="flex flex-col items-center justify-end gap-y-4 h-full animate-pulse pb-8">
          <div className="h-[20px] w-[30%] bg-neutral-400 rounded-xl" />
          <div className="size-[200px] bg-neutral-400 rounded-full" />
          <div className="h-[20px] w-[80%] bg-neutral-400 rounded-xl" />
          <div className="h-[20px] w-[80%] bg-neutral-400 rounded-xl" />
          <div className="h-[20px] w-[80%] bg-neutral-400 rounded-xl" />
        </div>
      </section>
    );

  if (error)
    return (
      <section className="w-full h-[450px] bg-red-300 rounded-b-3xl flex justify-center items-center px-8">
        <p className="text-[2rem] text-red-700 text-center">{error.message}</p>
      </section>
    );

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
        {getHour(weatherData?.dt, weatherData?.timezone)}
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
