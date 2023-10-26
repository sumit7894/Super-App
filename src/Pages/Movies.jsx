import React from 'react'
import Profile from '../assets/images/user-image.png'
import List from '../Components/Movies/List';
const Movies = () => {
  const movies = JSON.parse(window.localStorage.getItem("genres"));
  return (
    <>
    <div style={{height:"100vh",width:"100vw",backgroundColor:"black",overflowX:"hidden"}}>
        <div style={{fontFamily:"Single Day",color:"#72DB73",fontSize:"3rem",paddingTop:"2rem",marginLeft:"2rem"}}>
          Super App
          <p style={{color:"white",fontFamily:"Roboto",fontSize:"2rem",fontWeight:"600"}}>Entertainment according to your choice</p>
        </div>
        <img src={Profile} style={{position:"absolute",height:"5rem",width:"5rem",top:"3vh",right:"3vw",borderRadius:"50%"}} alt="user"/>
        <div style={{marginTop:"6vh",marginLeft:"4vw"}}>
        {movies.map((genre)=>
          <List key={genre} genre={genre}/>
        )}
        </div>
    </div>  
    </>
  )
}

export default Movies