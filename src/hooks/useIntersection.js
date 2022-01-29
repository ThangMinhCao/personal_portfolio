import { useState, useEffect } from "react";

/**
 * Reference: https://www.webtips.dev/webtips/react-hooks/element-in-viewport
 */
const useIntersection = (ref) => {
  const [isVisible, setState] = useState(false);

  useEffect(() => {
    const element = ref.current;
    const observer = new IntersectionObserver(
      ([entry]) => {
        setState(entry.isIntersecting);
      }, { rootMargin: "500px"}

      // }, { threshold: 0.1 }
    );

    element && observer.observe(element);
    return () => observer.unobserve(element);
  }, []);

  return isVisible;
};

export default useIntersection;
