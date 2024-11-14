'use client';

import { getSearch } from '@/lib/actions';
import { useCoordinatesStore } from '@/lib/stores';
import { useQuery } from '@tanstack/react-query';
import { useState } from 'react';
import SearchBar from './SearchBar';
import SearchSuggest from './SearchSuggest';

export default function Search() {
  const setCoordinates = useCoordinatesStore((state) => state.setCoordinates);
  const [query, setQuery] = useState('');

  const {
    data: searchList,
    isLoading,
    error,
  } = useQuery({
    queryKey: ['search', query],
    queryFn: () => getSearch(query),
  });

  return (
    <section className="absolute flex flex-col w-full items-center justify-center top-4">
      <SearchBar setQuery={setQuery} />
      <SearchSuggest
        searchList={searchList}
        query={query}
        isLoading={isLoading}
        error={error}
        onSelectLocation={(lat, lon) => {
          setCoordinates(lat, lon);
          setQuery('');
        }}
      />
    </section>
  );
}
