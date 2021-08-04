import { useEffect } from 'react';

export const useDisableBodyScroll = (open) => {
  useEffect(() => {
    const isBrowser = typeof window !== `undefined`
    if (!isBrowser) return null
    if (open) {
      document.body.style.height = '100vh';
    } else {
      document.body.style.height = '';
    }
  }, [open]);
};