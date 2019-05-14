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
}

export function useResize(minWidth = 600) {
  const [desktop, setDesktop] = useState();
  
  const listener = e => {
    const mq = window.matchMedia(`(min-width: ${minWidth}px)`);
    setDesktop(mq.matches)
  }

  useEffect(() => {
    if (desktop === undefined) {
      listener();
    }
    window.addEventListener('resize', listener);
    return () => {
      window.removeEventListener('resize', listener);
    }
  }, []);

  return { desktop }
}