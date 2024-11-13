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
    </main>
  );
}
