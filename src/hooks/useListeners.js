import { useState, useEffect } from "react";

export function useScroll() {
  if (typeof window !== 'undefined') {
    const [pageYOffset, setPageYOffset] = useState(window.pageYOffset);

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
}

export function useResize(minWidth = 600) {
  if (typeof window !== 'undefined') {
    const mq = window.matchMedia(`(min-width: ${minWidth}px)`);
    const [desktop, setDesktop] = useState(mq.matches);

    const listener = e => {
      setDesktop(mq.matches)
    }

    useEffect(() => {
      window.addEventListener('resize', listener);
      return () => {
        window.removeEventListener('resize', listener);
      }
    }, []);

    return { desktop }
  }
}