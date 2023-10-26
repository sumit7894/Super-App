import React, { useEffect, useState } from 'react'
import pressure from "../../assets/images/pressure.png";
const Weather = () => {
  const lineStyle = {
    borderLeft:"1px solid #FFFFFF",
    height:"70px",
  };
  const [date,setDate] = useState();
  const [time, setTime] = useState();
  const [weatherData,setWeatherData] = useState();
  useEffect(()=>{
    fetchWeatherData();
  },[])
  const fetchWeatherData = async()=>{
    const data = await fetch(
      "https://api.weatherapi.com/v1/current.json?key=6f71fb652208469a9e8131144232410&q=India&aqi=no"
    );
    const JSON = await data.json();
    setWeatherData(JSON);
  }
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
    <div style={{height:"27%",width:"90%",fontFamily:"Roboto",backgroundColor:"#101744",borderRadius:"12px",color:"white"}}>
        <div style={{backgroundColor:"#FF4ADE",display:"flex",justifyContent:"space-around",
        height:"30%",width:"100%",borderTopLeftRadius:"12px",borderTopRightRadius:"12px",alignItems:"center"
        ,fontSize:"1.4rem",fontWeight:"600"
        }}>
            <div>{date}</div>
            <div>{time}</div>
        </div>
        <div style={{display:"flex",alignItems:"center",justifyContent:"space-evenly",color:"white",marginTop:"2%"}}>
          <div>
            <div><img src={weatherData?.current?.condition?.icon}
            style={{width:"4rem",height:"4rem",}} 
            alt='cloud'/></div>
            <div style={{fontSize:"1.2rem"}}>
            {weatherData?.current?.condition?.text}
            </div>
          </div>
          <div style={lineStyle}></div>
          <div style={{display:"flex",flexDirection:"column",alignItems:"center"}}>
            <span style={{fontSize:"2rem"}}>
              {weatherData?.current?.feelslike_c}<span>&deg;C</span></span>
              <div style={{display:"flex",marginTop:"10%",justifyContent:"center",alignItems:"center",margin:"2%"}}>
                <div><img src={pressure} alt='pressure_icon'/></div>
              <div>
              <div style={{}}><span>{weatherData?.current?.pressure_mb}m bar</span></div>
              <div>Pressure</div>
              </div>
              </div>
          </div>
          <div style={lineStyle}></div>
          <div>
            <div><span>{weatherData?.current?.wind_kph}km/h</span></div>
            <div>Wind</div>
            <div style={{marginTop:"15%"}}><span>{weatherData?.current?.humidity}%</span></div>
            <div>Humidity</div>
          </div>
          <div></div>
        </div>
    </div>
  )
}

export default Weather