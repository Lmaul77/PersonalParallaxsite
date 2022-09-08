import * as React from "react";
import { useScrollData } from "scroll-data-hook";

const ScrollCheck = () => {
  const {
    scrolling,
    time,
    speed,
    direction,
    position,
    relativeDistance,
    totalDistance,
  } = useScrollData({
    onScrollStart: () => {
      console.log("Started scrolling");
    },
    onScrollEnd: () => {
      console.log("Finished scrolling");
    },
  });

  return (
    <div className="scrollcheck">
      <p>
        Current position: {position.x}/{position.y}
      </p>
    </div>
  );
};

export default ScrollCheck;
