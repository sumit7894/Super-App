import React, { useEffect, useState } from 'react'

const Weather = () => {
  const [date,setDate] = useState();
  const [time, setTime] = useState();
    useEffect(()=>{
      const date = new Date();
      var hour = date.getHours();
      var minutes = date.getMinutes();
      const amOrpm = hour>=12 ? 'PM' : 'AM';
      hour = hour>12 ? hour-12 : hour;
      minutes = minutes < 10 ? "0" + minutes : minutes;
      const formattedTime = hour + ":" + minutes + " " + amOrpm;
      setTime(formattedTime);
    },[]);
    useEffect(()=>{
    const today = new Date();
    const year = today.getFullYear();
    var month = today.getMonth();
    var date = today.getDate();
    date = date<10 ? "0" + date: date;
    month = month<10 ? "0" + month : month;
    const formattedDate = date + "-" + month + "-" + year;
    setDate(formattedDate);
    },[]);
  return (
    <div style={{height:"40%",width:"100%",backgroundColor:"red",marginTop:"1%",borderRadius:"12px"}}>
        <div style={{backgroundColor:"#FF4ADE",display:"flex",justifyContent:"space-around",
        height:"30%",width:"100%",borderTopLeftRadius:"12px",borderTopRightRadius:"12px",alignItems:"center"
        ,fontSize:"2rem",color:"white",fontFamily:"Roboto",fontWeight:"600"
        }}>
            <div>{date}</div>
            <div>{time}</div>
        </div>
    </div>
  )
}

export default Weather