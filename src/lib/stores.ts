import { create } from 'zustand';

interface CoordinateState {
  lat: number;
  lon: number;
  setCoordinates: (lat: number, lon: number) => void;
}

export const useCoordinatesStore = create<CoordinateState>((set) => ({
  lat: 0,
  lon: 0,
  setCoordinates: (lat, lon) => set({ lat, lon }),
}));
