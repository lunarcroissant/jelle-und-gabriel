import { useState, useEffect } from "react";

import "./Countdown.css";

interface IProps {
  minutes: number;
  seconds: number;
  task: string;
  showTimer: any;
  setShowTimer: any;
}

const Timer = ({ minutes, seconds, task, showTimer, setShowTimer }: IProps) => {
  const [minute, setMinute] = useState(minutes);
  const [second, setSecond] = useState(seconds);

  const { show } = showTimer;

  const timerSound = new Audio(
    `${process.env.PUBLIC_URL}/arcade-score-interface-217.wav`
  );

  timerSound.play();

  useEffect(() => {
    let ticker = setInterval(() => {
      if (second > 0) {
        setSecond(second - 1);
      } else if (second === 0) {
        if (minute === 0) {
          clearInterval(ticker);
        } else {
          setMinute(minute - 1);
          setSecond(59);
        }
      }
    }, 1000);
    return () => {
      clearInterval(ticker);
    };
  }, [second, minute]);

  return (
    <>
      {showTimer ? (
        <div className="container">
          <div className="timer__clock">
            {minute}:{second < 10 ? <p>0</p> : null}
            {second}
          </div>
          <div className="blur-background">
            <div className="timer__task">{task}</div>
          </div>
        </div>
      ) : null}
    </>
  );
};

export default Timer;
