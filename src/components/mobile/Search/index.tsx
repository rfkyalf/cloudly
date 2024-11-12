import { FaLocationDot } from 'react-icons/fa6';

export default function Search() {
  return (
    <section className="absolute flex flex-col w-full items-center justify-center top-4">
      <input
        type="text"
        placeholder="Search location"
        className="relative px-4 py-2 w-[80%] rounded-xl shadow placeholder-neutral-400 text-neutral-800 placeholder:text-[1rem] text-[1rem] bg-neutral-50"
      />
      <div className="bg-neutral-50 w-[80%] rounded-b-xl shadow mt-[-20px] pt-[28px] px-4 pb-2">
        <div className="flex flex-col gap-y-2">
          <div className="flex items-center gap-x-4">
            <FaLocationDot className="size-5 text-neutral-800" />
            <p className="text-[1rem] text-neutral-800">Lorem ipsum</p>
          </div>
        </div>
      </div>
    </section>
  );
}
