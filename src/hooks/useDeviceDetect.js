import { useEffect, useState } from 'react';

export const useDeviceDetect = () => {
  const [isMobile, setMobile] = useState(false);

  useEffect(() => {
    const isBrowser = typeof window !== `undefined`;
    if (!isBrowser) return null;
    const mobile = Boolean(
      'ontouchstart' in window || navigator.maxTouchPoints
    );
    setMobile(mobile);
  }, []);

  return { isMobile };
};
