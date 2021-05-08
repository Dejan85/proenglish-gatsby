import React, { useState } from 'react';

export const useScrollIndicator = (): any => {
  const [scroll, setScroll] = useState();
  const scrollIndicator = () => {
    window.onscroll = () => {
      const scrollCord =
        document.body.scrollTop || document.documentElement.scrollTop;
      const height =
        document.documentElement.scrollHeight -
        document.documentElement.clientHeight;
      const scrolled = (scrollCord / height) * 100;

      setScroll((): any => scrolled);
    };

    return (
      <div className="scroll__indicator" style={{ width: `${scroll}%` }} />
    );
  };

  return {
    scrollIndicator,
    scroll,
  };
};
