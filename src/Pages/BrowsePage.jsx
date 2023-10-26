import React from 'react'
import Styles from '../Components/Browse/browse.module.css'
import Info from '../Components/Browse/Info';
import Weather from '../Components/Browse/Weather';
import News from '../Components/Browse/News';
import Notes from '../Components/Browse/Notes';
import Timer from '../Components/Browse/Timer';
import { useNavigate } from 'react-router-dom';
const BrowsePage = () => {
  const Navigate = useNavigate();
  const handleClick =()=>{
    Navigate("/movies");
  }
  return (
    <div className={Styles.body}>
        <div className={Styles.left}>
      <Info/>
      <Weather/>
      <Timer/>
      </div>
      <Notes/>
      <div className={Styles.right}>
        <News/>
      </div>
      <div style={{position:"absolute",bottom:"1%",right:"5%"}}>
        <button style={{
          backgroundColor:"#148A08",borderRadius:"35px",height:"3rem",width:"10rem",color:"white",fontFamily:"Roboto",fontSize:"1.5rem",border:"148A08",cursor:"pointer"}}
          onClick={handleClick}>
          Browse 
        </button></div>
    </div>
  )
}

export default BrowsePage