import React from 'react'
import userImage from "../../assets/images/user-image.png";
const Info = () => {
    const info = JSON.parse(window.localStorage.getItem("userData"));
    const genres = JSON.parse(window.localStorage.getItem("genres"));
  return (
    <div style={{
        width:"90%", height:"35%",backgroundColor:"#5746EA", borderRadius:"34px",
        display:"flex",alignItems:"center",marginBottom:"1.5%"}}>
        <img src={userImage} alt='user' style={{height:"98%",marginLeft:"2%"}}/>
        <div style={{height:"90%",width:"75%",display:"flex",
        flexDirection:"column",marginLeft:"2%",padding:"8px",fontFamily:"Roboto"}}>
        <span style={{color:"white",fontSize:"1.2rem"}}>{info.name}</span>
        <span style={{color:"white",fontSize:"1.2rem"}}>{info.mail}</span>
        <span style={{color:"white",fontSize:"1.3rem"}}>{info.username}</span>
        <div style={{display:"flex",flexWrap:"wrap",margin:"1rem",height:"60%",overflowY:"auto"}}>
            {genres.map((genre)=>
            <div style={{height:"42%", width:"45%", backgroundColor:"#9F94FF",margin:"0.2rem"
            ,display:"flex",justifyContent:"center",alignItems:"center",borderRadius:"35px"}} key={genre}>
            {genre}</div>
            )}
        </div>
        </div>
    </div>
  )
}

export default Info