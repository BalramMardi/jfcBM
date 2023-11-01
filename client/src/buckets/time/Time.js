import React, { useEffect, useRef, useState } from "react";
import "./time.css";

export default function Time() {
  const [timerDays, setTimerDays] = useState("00");
  const [timerHours, setTimerHours] = useState("00");
  const [timerMin, setTimerMin] = useState("00");
  const [timerSec, setTimerSec] = useState("00");

  let interval = useRef();

  const startTimer = () => {
    const countdownDate = new Date(" 1 Jan,2024 00:00:00").getTime();

    interval = setInterval(() => {
      const now = new Date().getTime();
      const distance = countdownDate - now;
      const days = Math.floor(distance / (1000 * 60 * 60 * 24));

      const hours = Math.floor(
        (distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60)
      );

      const min = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));

      const sec = Math.floor((distance % (1000 * 60)) / 1000);

      if (distance < 0) {
        clearInterval(interval.current);
      } else {
        setTimerDays(days);
        setTimerHours(hours);
        setTimerMin(min);
        setTimerSec(sec);
      }
    }, 1000);
  };
  useEffect(() => {
    startTimer();
    return () => {
      clearInterval(interval.current);
    };
  });

  return (
    <div className="time-container">
      <div className="time-days time-slate">
        <div className="time-var">{timerDays}</div>
        <div className="time-let">Days</div>
      </div>
      :
      <div className="time-hour time-slate">
        <div className="time-var">{timerHours}</div>
        <div className="time-let">Hours</div>
      </div>
      :
      <div className="time-min time-slate">
        <div className="time-var">{timerMin}</div>
        <div className="time-let">Min</div>
      </div>
      :
      <div className="time-sec time-slate">
        <div className="time-var">{timerSec}</div>
        <div className="time-let">Sec</div>
      </div>
    </div>
  );
}
