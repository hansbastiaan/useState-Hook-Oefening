import React, { useState } from "react";

const Timer = () => {
  const now = new Date().toLocaleTimeString();

  const [time, setTime] = useState(now);

  const updateTime = () => {
    const newTime = new Date().toLocaleTimeString();

    setTime(newTime);
  };

  setInterval(updateTime, 1000);

  return (
    <div>
      <h1>{time}</h1>
      {/* <button onClick={updateTime}>Get Time</button> */}
    </div>
  );
};

export default Timer;
