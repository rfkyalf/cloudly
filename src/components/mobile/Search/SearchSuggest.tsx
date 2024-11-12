import { FaLocationDot } from 'react-icons/fa6';

interface Location {
  display_name: string;
  lat: number;
  lon: number;
}

export default function SearchSuggest({
  query,
  isLoading,
  error,
  searchList,
  onSelectLocation,
}: {
  query: string;
  isLoading: boolean;
  error: Error | null;
  searchList: Location[];
  onSelectLocation: (lat: number, lon: number) => void;
}) {
  return (
    <>
      {query === '' ? null : (
        <div className="bg-neutral-50 w-[80%] rounded-b-xl shadow mt-[-20px] pt-[36px] px-4 pb-4">
          <div className="flex flex-col gap-y-4">
            {isLoading ? (
              <span className="text-[1rem] text-neutral-700">Loading</span>
            ) : error ? (
              <span className="text-[1rem] text-red-700">{error.message}</span>
            ) : searchList?.length === 0 ? (
              <span className="text-[1rem] text-neutral-700">
                Location not found
              </span>
            ) : (
              searchList?.map(
                ({ display_name, lat, lon }: Location, index: number) => (
                  <div
                    key={index}
                    onClick={() => onSelectLocation(lat, lon)}
                    className="flex items-center gap-x-4"
                  >
                    <FaLocationDot className="size-5 text-neutral-700" />
                    <p className="text-[1rem] text-neutral-700">
                      {display_name.substring(0, 20)}...
                    </p>
                  </div>
                )
              )
            )}
          </div>
        </div>
      )}
    </>
  );
}
