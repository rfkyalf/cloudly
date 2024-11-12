import Image from 'next/image';
import { FaChevronDown, FaChevronUp } from 'react-icons/fa6';

export default function TemperatureSection() {
  return (
    <section className="w-full bg-gradient-to-t from-blue-600 via-blue-500 to-blue-600 flex flex-col items-center pt-14 pb-8 rounded-b-3xl shadow-xl">
      <Image
        src={'/27.png'}
        alt="Cloudly Logo"
        width={500}
        height={500}
        className="size-52 object-contain"
      />
      <h3 className="text-[1.2rem] text-neutral-200">Tasikmalaya</h3>
      <h1 className="text-[4rem] text-neutral-100">23°</h1>
      <h2 className="text-[1rem] text-neutral-300">Cloudy</h2>
      <div className="flex items-center gap-x-8 text-[1rem] text-neutral-100 mt-4">
        <span className="flex items-center gap-x-2">
          <FaChevronUp className="size-3 text-neutral-300" />
          <span>28°</span>
        </span>
        <span className="flex items-center gap-x-2">
          <FaChevronDown className="size-3 text-neutral-300" />
          <span>23°</span>
        </span>
      </div>
    </section>
  );
}
