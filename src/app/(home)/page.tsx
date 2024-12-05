import FiveDayForecastSection from '@/components/5DayForecast';
import DailyForecastSection from '@/components/DailyForecast';
import GetLocationbyGPS from '@/components/getLocationbyGPS';
import OtherInformation from '@/components/OtherInformation';
import AirPollution from '@/components/OtherInformation/AirPollution';
import Search from '@/components/Search';
import TemperatureSection from '@/components/Temperature';
import dynamic from 'next/dynamic';

const DynamicMap = dynamic(() => import('@/components/Map/Map'), {
  ssr: false,
});

export default function Home() {
  return (
    <main className="bg-neutral-200/50 min-h-screen relative">
      <div className="md:wrapper relative">
        <Search />
        <div className="flex flex-col md:flex-row md:gap-x-4 w-full md:pt-[70px]">
          <TemperatureSection />
          <div className="flex flex-col gap-y-4 md:gap-y-4 w-full px-2 md:px-0 md:w-[60%] lg:w-[70%]">
            <DailyForecastSection />
            <FiveDayForecastSection />
          </div>
        </div>
        <div className="grid grid-cols-2 md:grid-cols-3 w-full gap-2 md:gap-4 px-2 md:px-0 py-4">
          <AirPollution />
          <OtherInformation />
        </div>
        <div className="grid grid-cols-1 w-full gap-2 md:gap-4 px-2 md:px-0 h-[250px] md:h-[500px] pb-4">
          <DynamicMap />
        </div>
      </div>
      <GetLocationbyGPS />
    </main>
  );
}
