import { useState } from "react";

export default function TimerChallenge({ title, targetTime }) {
  const [timerExpired, setTimerExpired] = useState(false);
  const [timerStarted, setTimerStarted] = useState(false);

  const handleStart = () => {
    setTimerStarted(true);
    setTimeout(() => {
      setTimerExpired(true);
    }, targetTime * 1000);
  };

  const handleStop = () => {
    setTimerStarted(false);
    setTimerExpired(false);
  };

  return (
    <section className="challenge">
      <h2>{title}</h2>
      {timerExpired && <p className="challenge-expired">Time's up!</p>}
      <p className="challenge-time">
        {targetTime} second{targetTime > 1 ? "s" : ""}
      </p>
      <button onClick={handleStart}>
        {timerStarted ? "Stop" : "Start"} Challenge
      </button>
      <p className={timerStarted ? "active" : undefined}>
        {timerStarted ? "Time is running..." : "Timer inactive"}
      </p>
    </section>
  );
}
