import { useState, useRef } from "react";

export default function TimerChallenge({ title, targetTime }) {
  const [timerExpired, setTimerExpired] = useState(false);
  const [timerStarted, setTimerStarted] = useState(false);
  const timer = useRef();
  const handleStart = () => {
    setTimerStarted(true);
    timer.current = setTimeout(() => {
      setTimerExpired(true);
    }, targetTime * 1000);
  };

  const handleStop = () => {
    clearTimeout(timer.current);
    setTimerExpired(false);
    setTimerStarted(false);
  };

  return (
    <section className="challenge">
      <h2>{title}</h2>
      {timerExpired && <p className="challenge-expired">Time's up!</p>}
      <p className="challenge-time">
        {targetTime} second{targetTime > 1 ? "s" : ""}
      </p>
      <button onClick={timerStarted ? handleStop : handleStart}>
        {timerStarted ? "Stop" : "Start"} Challenge
      </button>
      <p className={timerStarted ? "active" : undefined}>
        {timerStarted ? "Time is running..." : "Timer inactive"}
      </p>
    </section>
  );
}
