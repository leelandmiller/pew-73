import { useState, useEffect } from "react";

export function useScroll() {
  const [pageYOffset, setPageYOffset] = useState(0);

  const listener = e => {
    setPageYOffset(window.pageYOffset)
  };

  useEffect(() => {
    window.addEventListener('scroll', listener);
    return () => {
      window.removeEventListener('scroll', listener);
    };
  }, []);

  return {
    pageYOffset
  };
  // if (typeof window !== 'undefined') {
    
  // } else {
  //   return {
  //     pageYOffset: 0
  //   }
  // }
}

export function useResize(minWidth = 600) {
  const [desktop, setDesktop] = useState(true);
  
  const listener = e => {
    const mq = window.matchMedia(`(min-width: ${minWidth}px)`);
    setDesktop(mq.matches)
  }

  useEffect(() => {
    window.addEventListener('resize', listener);
    return () => {
      window.removeEventListener('resize', listener);
    }
  }, []);

  return { desktop }
  // if (typeof window !== 'undefined') {
    
  // } else {
  //   return {
  //     desktop: true
  //   }
  // }
}