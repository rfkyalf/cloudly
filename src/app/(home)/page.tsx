import Search from '@/components/mobile/Search';
import TemperatureSection from '@/components/mobile/Temperature';

export default function Home() {
  return (
    <main className="bg-neutral-100 min-h-screen relative">
      <Search />
      <TemperatureSection />
    </main>
  );
}
