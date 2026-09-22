'use client'
import { useTheme } from "next-themes";
import React, { useSyncExternalStore } from "react";
import { BsFillMoonFill, BsFillSunFill } from 'react-icons/bs';

const subscribe = () => () => {};

const FloatingAction = () => {
  const {resolvedTheme, setTheme} = useTheme();
  // false during SSR and hydration, true once on the client — avoids a theme icon mismatch
  const mounted = useSyncExternalStore(subscribe, () => true, () => false);

  if (!mounted) {
    return null
  }

// console.log(resolvedTheme)
  return (
    <div className="text-end cursor-pointer">
    <button type="button" 
    onClick={() => setTheme(resolvedTheme === 'dark' ? 'light' : 'dark')}
    className={`focus:ring-gray-300 text-md text-gray-700 hover:text-gray-500 dark:text-gray-300 dark:hover:text-gray-100 dark:focus:ring-gray-700 dark:border-gray-700 rounded-full`}>
        <p>
          {resolvedTheme === 'dark' ? <BsFillSunFill className="text-lg"/> : <BsFillMoonFill/>}
        </p>
        </button>
        </div>
  );
};

export default FloatingAction;
