import { useEffect } from 'react';

type KeyHandler = (event: KeyboardEvent) => void;

export const useKeyPress = (key: string, handler: KeyHandler) => {
  useEffect(() => {
    const handleKeyPress = (event: KeyboardEvent) => {
      if (event.key === key) {
        handler(event);
      }
    };

    window.addEventListener('keydown', handleKeyPress);

    return () => {
      window.removeEventListener('keydown', handleKeyPress);
    };
  }, [key, handler]);
};