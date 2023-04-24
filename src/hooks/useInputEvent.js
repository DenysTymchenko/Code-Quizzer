import { useEffect, useState } from 'react';

// global - refers to the global object in the JavaScript environment in which this code is executed.
// The code is adding and removing event listeners to the global object,
// which allows it to capture all keyboard events on the page, where it's used.
export const useInputEvent = () => {
  const [key, setKey] = useState(null);

  useEffect(() => {
    const keyDownHandler = ({ code }) => setKey(code);
    const keyUpHandler = () => setKey(null);

    global.addEventListener('keydown', keyDownHandler);
    global.addEventListener('keyup', keyUpHandler);

    return () => {
      global.removeEventListener('keydown', keyDownHandler);
      global.removeEventListener('keyup', keyUpHandler);
    };
  }, []);

  return key;
};
