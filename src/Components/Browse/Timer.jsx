import React, { useState } from 'react'
import { CountdownCircleTimer } from 'react-countdown-circle-timer'
import arrowUp from "../../assets/images/arrow-up.png";
import arrowDown from "../../assets/images/arrow-down.png"; 
const Timer = () => {
  const [playing,setPlaying] = useState(false);
  const [hours,setHours] = useState(0);
  const [minutes,setMinutes] = useState(0);
  const [seconds,setSeconds] = useState(0);
  function formatTime(totalSeconds){
    const totalMinutes = Math.floor(totalSeconds/60);
    const seconds = totalSeconds %60;
    const hours = Math.floor(totalMinutes / 60);
    const minutes = totalMinutes % 60;
    return `${hours.toString().padStart(2, '0')}:${minutes.toString().padStart(2, '0')}:${seconds.toString().padStart(2, '0')}`;
  }
  const incrementHour =()=>{
    if(hours === 59)
      return
    setHours((hours)=>hours+1);
  }
  const decrementHour = ()=>{
    if(hours === 0)
      return
    setHours((hours)=>hours-1);
  }
  const incrementMinute = ()=>{
    if(minutes === 59){
      return
    }
    setMinutes((minutes) => minutes +1)
  }
  const decrementMinute=()=>{
    if(minutes === 0){
      return 0
    }
    setMinutes((minutes)=>minutes -1)
  }
  const incrementSeconds = ()=>{
    if(seconds === 59)
      return
    setSeconds((seconds)=>seconds+1);
  }
  const decrementSeconds = ()=>{
    if(seconds === 0){
      return
    }
    setSeconds((seconds)=>seconds-1 )
  }
  return (
    <div style={{
        backgroundColor:"#1E2343",
        marginTop:"4%",
        width:"150%",
        height:"30%",
        borderRadius:"20px",
        padding:"10px",
        display:"flex",
        alignItems:"center",
    }}>
    <div style={{marginLeft:"10%"}}>
    <CountdownCircleTimer
    isPlaying={playing}
    duration={hours*60*60 + minutes*60 + seconds}
    colors={['#FF6A6A']}
    colorsTime={[]}
  >
    {({ remainingTime }) => <span style={{fontSize:"2rem",color:"white",fontFamily:"Roboto"}}>{formatTime(remainingTime)}</span>}
  </CountdownCircleTimer>
    </div>

    <div style={{marginLeft:"20%"}}>
    <div style={{
      display:"flex",alignItems:"center"
      }}>
    <div style={{marginRight:"30px",textAlign:"center"}}>
      <p>Hours</p>
      <div><img src={arrowUp} alt='arrow' onClick={incrementHour} style={{cursor:"pointer"}} /></div>
      <p><span style={{color:"white", fontSize:"1.4rem"}}>{hours.toString().padStart(2, '0')}</span></p>
      <div><img src={arrowDown} alt='arrow'style={{cursor:"pointer"}} onClick={decrementHour}/></div>
    </div>
      <div style={{textAlign:"center",fontSize:"2rem",color:"white",letterSpacing:"70%",marginTop:"18%",marginRight:"5%"}}>:</div>
    <div style={{marginRight:"30px",textAlign:"center"}}>
      <p>Minutes</p>
      <div><img src={arrowUp} alt='arrow' onClick={incrementMinute} style={{cursor:"pointer"}}/></div> 
      <p><span style={{color:"white", fontSize:"1.4rem"}}>{minutes.toString().padStart(2, '0')}</span></p>
      <div><img src={arrowDown} alt='arrow' onClick={decrementMinute} style={{cursor:"pointer"}}/></div>
    </div>
    <div style={{textAlign:"center",fontSize:"2rem",color:"white",letterSpacing:"70%",marginTop:"18%",marginRight:"5%"}}>:</div>
    <div style={{textAlign:"center"}}>
      <p>Seconds</p>
      <div><img src={arrowUp} alt='arrow' onClick={incrementSeconds} style={{cursor:"pointer"}}/></div>
      <p><span style={{color:"white", fontSize:"1.4rem"}}>{seconds.toString().padStart(2, '0')}</span></p>
      <div><img src={arrowDown} alt='arrow' onClick={decrementSeconds} style={{cursor:"pointer"}}/></div>
    </div>
    </div>
    <div><button style={{
      width:"100%",height:"2rem",borderRadius:"20px",backgroundColor:"#FF6A6A",border:"#FF6A6A",marginTop:"10px",marginBottom:"10px",cursor:"pointer"
      }} onClick={()=>setPlaying((prev)=>!prev)}>
        <span style={{color:"white",fontFamily:"Roboto",fontSize:"1.4rem"}}>{playing ? "Pause" : "Start"}</span>
      </button></div>
    </div>
    
</div>
  )}

export default Timer