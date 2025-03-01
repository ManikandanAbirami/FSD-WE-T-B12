import { useState, useRef } from 'react'
function App() {
  const [seconds, setSeconds] = useState(0);
  // const [timerID, setTimerID] = useState({
  //   current: null
  // });
  const timerID = useRef(null);
  // console.log("useRef - timerID", timerID);

  const startTimer = () => {
    timerID.current = setInterval(() => {
      setSeconds(currentSeconds => currentSeconds + 1);
    }, 1000);
  }

  const stopTimer = () => {
    clearInterval(timerID.current);
  }

  return (
    <>
      <button onClick={startTimer}>Start</button>
      <button onClick={stopTimer}>Stop</button>
      <p>seconds: {seconds}</p>
    </>
  )
}

export default App
