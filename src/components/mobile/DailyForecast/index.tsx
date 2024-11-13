'use client';

import { getForecast } from '@/lib/actions';
import { useCoordinatesStore } from '@/lib/stores';
import { celvinToCelsius, getHoursFromString } from '@/lib/utils';
import { useQuery } from '@tanstack/react-query';
import Image from 'next/image';

export default function DailyForecastSection() {
  const { lat, lon } = useCoordinatesStore();

  const { data: dailyForecastData } = useQuery({
    queryKey: ['daily-forecast', lat, lon],
    queryFn: () => getForecast(lat, lon),
  });

  return (
    <section className="w-[90%] mx-auto py-4">
      <h3 className="text-[1rem] text-neutral-500">Daily Forecast</h3>
      <div className="flex items-center gap-x-2 mt-3 overflow-x-auto">
        {dailyForecastData?.list.slice(0, 8).map(
          (
            {
              weather,
              main,
              dt_txt,
            }: {
              weather: { icon: string }[];
              main: { temp: number };
              dt_txt: string;
            },
            index: number
          ) => (
            <div
              key={index}
              className="w-[70px] h-[110px] max-h-[110px] shrink-0 bg-neutral-50 shadow rounded-lg flex flex-col items-center justify-center gap-y-2"
            >
              <span className="text-[0.9rem] text-neutral-500">
                {getHoursFromString(dt_txt)}
              </span>
              <Image
                src={`/${weather[0].icon}.png`}
                width={40}
                height={40}
                alt="cloudy"
                className="size-10 object-contain"
              />
              <span className="text-[0.9rem] text-neutral-800 font-bold">
                {celvinToCelsius(main.temp)}°
              </span>
            </div>
          )
        )}
      </div>
    </section>
  );
}
