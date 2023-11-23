import React, { useState, useEffect } from "react";
import CountUp from "react-countup";
import { useInView } from "react-intersection-observer";

const ScrollCountUp = ({ endValue, duration, separator }) => {
  const [startCounting, setStartCounting] = useState(false);
  const [ref, inView] = useInView({
    triggerOnce: true,
  });

  useEffect(() => {
    if (inView) {
      setStartCounting(true);
    }
  }, [inView]);

  return (
    <div ref={ref} style={{ margin: "0" }}>
      {startCounting && (
        <CountUp end={endValue} duration={duration} separator={separator} />
      )}
    </div>
  );
};

export default ScrollCountUp;
