import { useEffect, useState } from 'react';
import { useInputEvent } from './useInputEvent';

const konamiCode = [
  'ArrowUp',
  'ArrowUp',
  'ArrowDown',
  'ArrowDown',
  'ArrowLeft',
  'ArrowRight',
  'ArrowLeft',
  'ArrowRight',
  'KeyB',
  'KeyA',
];

export const useKonamiCode = () => {
  const [isSucces, setIsSucces] = useState(false);
  const [index, setIndex] = useState(0);
  const key = useInputEvent();
  useEffect(() => {
    if (key === null) return;
    if (key === konamiCode[index]) {
      const newIndex = index + 1;
      setIndex(newIndex);
    } else {
      setIndex(0);
    }

    if (index + 1 === konamiCode.length) {
      setIsSucces(true);
    }
  }, [key]);

  return isSucces;
};
