import { useState, useRef } from "react";
import ResultModal from "./ResultModal";

export default function TimerChallenge({ title, targetTime }) {
  const [timerRemaining, setTimerRemaining] = useState(targetTime * 1000);
  const timer = useRef();
  const dialog = useRef();

  const isTimerActive =
    timerRemaining > 0 && timerRemaining < targetTime * 1000;

  const handleStart = () => {
    timer.current = setInterval(() => {
      setTimerRemaining((prev) => prev - 10);
    }, 10);
  };

  const handleStop = () => {
    dialog.current.open();
    clearInterval(timer.current);
  };

  const handleReset = () => {
    setTimerRemaining(targetTime * 1000);
  };

  if (timerRemaining <= 0) {
    // clearInterval(timer.current);
    //   setTimerRemaining(targetTime * 1000);
    // dialog.current.open();
    handleStop();
  }
  return (
    <>
      <ResultModal
        targetTime={targetTime}
        remainingTime={timerRemaining}
        ref={dialog}
        onReset={handleReset}
      />
      <section className="challenge">
        <h2>{title}</h2>
        <p className="challenge-time">
          {targetTime} second{targetTime > 1 ? "s" : ""}
        </p>
        <button onClick={isTimerActive ? handleStop : handleStart}>
          {isTimerActive ? "Stop" : "Start"} Challenge
        </button>
        <p className={isTimerActive ? "active" : undefined}>
          {isTimerActive ? "Time is running..." : "Timer inactive"}
        </p>
      </section>
    </>
  );
}
