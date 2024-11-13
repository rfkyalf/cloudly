import FiveDayForecastSection from '@/components/mobile/5DayForecast';
import DailyForecastSection from '@/components/mobile/DailyForecast';
import Search from '@/components/mobile/Search';
import TemperatureSection from '@/components/mobile/Temperature';

export default function Home() {
  return (
    <main className="bg-neutral-200/50 min-h-screen relative">
      <Search />
      <TemperatureSection />
      <DailyForecastSection />
      <FiveDayForecastSection />
      <div className="w-[90%] mx-auto grid grid-cols-2 gap-4 pb-4">
        <div className="h-[150px] bg-neutral-50 shadow-md rounded-lg"></div>
        <div className="h-[150px] bg-neutral-50 shadow-md rounded-lg"></div>
        <div className="h-[150px] bg-neutral-50 shadow-md rounded-lg"></div>
        <div className="h-[150px] bg-neutral-50 shadow-md rounded-lg"></div>
        <div className="h-[150px] bg-neutral-50 shadow-md rounded-lg"></div>
        <div className="h-[150px] bg-neutral-50 shadow-md rounded-lg"></div>
      </div>
    </main>
  );
}
