'use client';

import { useEffect, useState } from 'react';
import { useCoordinatesStore } from '@/lib/stores';

export default function RequestLocationAccess() {
  const setCoordinates = useCoordinatesStore((state) => state.setCoordinates);
  const [error, setError] = useState<string | null>(null);
  const [permissionStatus, setPermissionStatus] = useState<
    'prompt' | 'granted' | 'denied' | null
  >(null);
  const [isGone, setIsGone] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => {
      setIsGone(true);
    }, 3000);
    return () => clearTimeout(timer);
  }, []);

  useEffect(() => {
    const checkPermission = async () => {
      if ('permissions' in navigator) {
        const status = await navigator.permissions.query({
          name: 'geolocation',
        });
        setPermissionStatus(status.state);
        status.onchange = () => setPermissionStatus(status.state);
      }
    };

    const fetchLocation = () => {
      if (navigator.geolocation) {
        navigator.geolocation.getCurrentPosition(
          (position) => {
            const { latitude, longitude } = position.coords;
            setCoordinates(latitude, longitude);
            setError(null);
          },
          (err) => {
            setError(`Error: ${err.message}`);
          }
        );
      } else {
        setError('Geolocation is not supported by your browser.');
      }
    };

    checkPermission();

    if (permissionStatus === 'granted' || permissionStatus === 'prompt') {
      fetchLocation();
    } else if (permissionStatus === 'denied') {
      setError(
        'Access to location is denied. Please enable location access for better service.'
      );
    }
  }, [setCoordinates, permissionStatus]);

  return (
    <>
      {permissionStatus === 'denied' && (
        <main className="absolute z-[9999] top-0 right-0 p-2 md:p-4">
          {error && (
            <div
              className={`relative bg-red-100 shadow px-4 py-2 rounded-xl transition-opacity duration-[5s] ${
                isGone ? 'opacity-0 pointer-events-none' : 'opacity-100'
              }`}
            >
              <p className="text-red-500">{error}</p>
            </div>
          )}
        </main>
      )}
    </>
  );
}
