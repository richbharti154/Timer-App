import React, { useState, useEffect } from 'react';
import './style.css';

export default function App() {
  const [sec, setSec] = useState(0);
  const [min, setMin] = useState(0);
  const [hr, setHr] = useState(0);
  // const [saveTime , setSaveTime] = useState({})
  const [isActive, setIsActive] = useState(true);

  function startTimer() {
    if (isActive) {
      setSec(sec + 1);
      if (sec == 59) {
        setSec(0);
        setMin(min + 1);
      } else if (min == 59) {
        setMin(0);
        setHr(hr + 1);
      } else if (hr == 2) {
        setSec(0);
        setMin(0);
        setHr(0);
      }
    }
  }

  const myinterval = setTimeout(() => {
    startTimer();
  }, 1000);

  function handlePause() {
    if (isActive) {
      setIsActive(false);
    } else {
      setIsActive(true);
    }
    clearTimeout(myinterval);
  }

  function handleReset() {
    setSec(0);
    setMin(0);
    setHr(0);
  }

  return (
    <div className="main">
      <marquee className="marq" direction="left" loop="">
        <div className="geek1">ASHAR.... A DREAMER....</div>
      </marquee>
      <div>
        <span className="timer">{hr} : </span>
        <span className="timer">{min} : </span>
        <span className="timer">{sec}</span>
      </div>

      <div className="btnWrap">
        <button className={isActive ? 'btn' : 'btnTogg'} onClick={handlePause}>
          {isActive ? 'Pause' : 'Resume'}
        </button>
        <button className="btn" onClick={handleReset}>
          Reset
        </button>
      </div>
    </div>
  );
}
