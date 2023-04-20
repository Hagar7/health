import { keyframes } from "@emotion/react";
import React, { useCallback, useRef, useState } from "react";
import { Reveal } from "react-awesome-reveal";

export default function Counter({ start = 0, end, timer = 50 }) {
  const [count, setCount] = useState(null);

  const customAnimation = keyframes`
  from { 
  }
  to {
  }`;

  const ref = useRef(start);
  const accumulator = end / 200;
  const updateCounter = useCallback(() => {
    if (ref.current < end) {
      const result = Math.ceil(ref.current + accumulator);
      if (result > end) return setCount(end);
      setCount(result);
      ref.current = result;
    }
    setTimeout(updateCounter, timer);
  }, [accumulator, end, timer]);

  return (
    <Reveal
      keyframes={customAnimation}
      onVisibilityChange={(inView) => {
        if (inView) {
          updateCounter();
        }
      }}
      triggerOnce
    >
      <div className="cnt">{count}</div>
    </Reveal>
  );
}
