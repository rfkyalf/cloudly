import FiveDayForecastSection from '@/components/5DayForecast';
import DailyForecastSection from '@/components/DailyForecast';
import Search from '@/components/Search';
import TemperatureSection from '@/components/Temperature';

export default function Home() {
  return (
    <main className="bg-neutral-200/50 min-h-screen relative">
      <div className="md:wrapper relative">
        <Search />
        <div className="flex flex-col md:flex-row md:gap-x-4 lg:gap-x-6 xl:gap-x-8 w-full md:pt-[70px]">
          <TemperatureSection />
          <div className="flex flex-col gap-y-4 md:gap-y-4 lg:gap-y-6 xl:gap-y-8 w-full px-2 md:px-0 md:w-[60%] lg:w-[70%]">
            <DailyForecastSection />
            <FiveDayForecastSection />
          </div>
        </div>
      </div>
    </main>
  );
}
