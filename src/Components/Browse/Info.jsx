import React from 'react'
import userImage from "../../assets/images/user-image.png";
const Info = () => {
    const info = JSON.parse(window.localStorage.getItem("userData"));
    const genres = JSON.parse(window.localStorage.getItem("genres"));
  return (
    <div style={{
        width:"98%", height:"60%",backgroundColor:"#5746EA", borderRadius:"34px",display:"flex",alignItems:"center"}}>
        <img src={userImage} alt='user' style={{height:"98%"}}/>
        <div style={{height:"90%",width:"75%",display:"flex",
        flexDirection:"column",marginLeft:"1.4%",padding:"8px",fontFamily:"Roboto"}}>
        <span style={{color:"white",fontSize:"2rem"}}>{info.name}</span>
        <span style={{color:"white",fontSize:"2rem"}}>{info.mail}</span>
        <span style={{color:"white",fontSize:"3rem"}}>{info.username}</span>
        <div style={{display:"flex",flexWrap:"wrap",margin:"1rem",height:"60%"}}>
            {genres.map((genre)=>
            <div style={{height:"35%", width:"25%", backgroundColor:"#9F94FF",margin:"0.2rem"
            ,display:"flex",justifyContent:"center",alignItems:"center",borderRadius:"35px"}} key={genre}>
            {genre}</div>
            )}
        </div>
        </div>
    </div>
  )
}

export default Info