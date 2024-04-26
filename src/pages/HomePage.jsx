import React, { useState, useEffect } from 'react';
import Slideshow from 'components/Slider/Slider';
import Loader from 'components/Loader/Loader';

export const HomePage = () => {
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const timeout = setTimeout(() => {
      setIsLoading(false);
    });
    return () => clearTimeout(timeout);
  }, []);

  return <>{isLoading ? <Loader /> : <Slideshow />}</>;
};
