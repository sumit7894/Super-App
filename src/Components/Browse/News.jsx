import React, { useEffect, useState } from 'react'

const News = () => {
    const [newsData,setNewsData] = useState('');
    const [date,setDate] = useState();
    const [time,setTime] = useState();
    useEffect(()=>{
        fetchData();
    },[])
    const fetchData = async ()=>{
        const data = await fetch(
            "https://newsapi.org/v2/everything?q=tesla&from=2023-09-24&sortBy=publishedAt&apiKey=205e5a253f5a458a943e98f7213288a2"
        );
        const json = await data.json();
        if(json.status === 'error'){
            setNewsData("");
        }
        else{
            setNewsData(json?.articles[0]);
        }
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
    <div>
        <div style={{position:"relative"}}>
        <img src={newsData?.urlToImage} 
        style=
        {{objectFit:"fill",height:"50vh",width:"23vw",borderTopLeftRadius:"12px",borderTopRightRadius:"12px"}}
        alt='pic'/>
        
        <div style={{backgroundColor:"rgba(0, 0, 0, 0.74)",height:"40%",width:"100%",position:"absolute",bottom:"1%",fontFamily:"Roboto"}}>
            <div style={{color:"white",fontFamily:"Roboto",fontSize:"1.25rem",marginTop:"5%",marginLeft:"5%"}}>{newsData?.title}</div>
            <div style={{color:"white",marginLeft:"5%",marginTop:"4%",display:"flex"}}>
                <div style={{borderRight:"1px solid white",marginRight:"5px",paddingRight:"5px"}}>{date}</div>
                <div style={{marginRight:"5px"}}>{time}</div>
            </div>
        </div>
        </div>
        <div style={{margin:"3%",color:"black",fontFamily:"Roboto",wordSpacing:"60%"}}>
            {newsData?.content}
        </div>
    </div>
  )
}

export default News