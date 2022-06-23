import React, { useState, useEffect } from "react"

const Pomodoro = () =>{
    const [minutes, setMinutes] = useState(25);
    const [seconds, setSeconds] = useState(0);
    const [displayMessage, setDisplayMessage] = useState(false);
    const [start, setStart] = useState(false)

    useEffect(()=>{
      if(start){
          let interval = setInterval(() => {
            clearInterval(interval);

            if (seconds === 0) {
              if (minutes !== 0) {
                setSeconds(59);
                setMinutes(minutes - 1);
              } else {
                let minutes = displayMessage ? 24 : 4;
                let seconds = 59;

                setMinutes(minutes);
                setSeconds(seconds);
                setDisplayMessage(!displayMessage);
              }
            } else {
              setSeconds(seconds - 1);
            }
          }, 1000)
      }          
    },[seconds,start])
 
    const timerMinutes = minutes < 10 ? `0${minutes}`: minutes;
    const timerSeconds = seconds < 10 ? `0${seconds}`: seconds;

  return (
    <div className="pomodoro">
      <div className="message">
        {displayMessage && <div>Break time! New session starts in:</div>}
      </div>
      <div className="timer">
        {timerMinutes}:{timerSeconds}
      </div>
      <div className="btn-container">
        {start ? <button type="button" className="btn" onClick={()=>setStart(!start)}>Stop</button> : <button type="button" className="btn" onClick={()=>setStart(!start)}>Start</button>}
      </div>
    </div>
  )
}


export default Pomodoro