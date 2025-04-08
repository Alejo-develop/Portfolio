import { useAnimation, useInView } from "framer-motion";
import { useEffect, useRef, useState } from "react";

const UseReveal = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true });
  const [hasIntersected, setHasIntersected] = useState(false);
  const mainControls = useAnimation();
  const slideControls = useAnimation();

  useEffect(() => {
    if (isInView) {
      mainControls.start("visible");
      slideControls.start("visible");
      setHasIntersected(true);
    }
  }, [isInView, mainControls, slideControls]);

  return {
    ref,
    mainControls,
    slideControls,
    hasIntersected,
  };
};

export default UseReveal;
