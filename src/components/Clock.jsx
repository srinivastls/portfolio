import { useState, useEffect } from "react";

function Clock() {

  const [currentTime, setCurrentTime] = useState(new Date());

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentTime(new Date());
    }, 1000);

    return () => clearInterval(interval);
  }, []);

  const hours = currentTime.getHours().toString().padStart(2, '0');
  const minutes = currentTime.getMinutes().toString().padStart(2, '0');
  const date = currentTime.getDate().toString().padStart(2, '0');
  const month = (currentTime.getMonth() + 1).toString().padStart(2, '0');

  const formattedTime = (
    <>
      {date}/{month} &nbsp; {hours}:{minutes}
    </>
  );
  const clockStyle = {
    fontSize: '1rem',
    fontFamily: 'Faculty Glyphic, sans-serif',
    textAlign: 'center',
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    width: 'fit-content',
    padding: '0 0 0 5px'
  }

  return (
    <div style={clockStyle}>
      <span>{formattedTime}</span>
    </div>
  )

};

// function updateTime() {
//   const now = new Date();
//   const hours = now.getHours().toString().padStart(2, '0');
//   const minutes = now.getMinutes().toString().padStart(2, '0');

//   const date = now.getDate().toString()
//   const formattedTime = `${date}${hours}:${minutes}`;
  
//   document.getElementById('clock').textContent = formattedTime;

//   // Calculate the exact time until the next second
//   const nextSecond = new Date(now.getTime() + 1000);
//   nextSecond.setMilliseconds(0); // Align to the start of the next second
//   const delay = nextSecond.getTime() - now.getTime();

//   setTimeout(() => requestAnimationFrame(updateTime), delay);
// }

// window.onload = updateTime; // Start immediately

export default Clock;