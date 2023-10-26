import React, { useState } from 'react'

const Notes = () => {
    const [text,setText] = useState(
        JSON.parse(window.localStorage.getItem("text"))
    );
    const handleChange =(e)=>{
        setText(e.target.value);
        window.localStorage.setItem("text",JSON.stringify(text))
    };
  return (
    <div 
    style={{height:"55vh",width:"39vw",backgroundColor:"#F1C75B",
    borderRadius:"20px",position:"relative",top:"-16%",left:"-4%"}}>
    <div style={{
    position:"absolute",left:"8%",color:"black",fontSize:"1.6rem",
    fontFamily:"Roboto",top:"8%",fontWeight:"600",letterSpacing:"2%"
    }}>
       <span> All notes </span>
    </div>
    <div>
    <textarea style={{width:"90%",height:"80%",margin:"auto",top:"18%",
    left:"8%",position:"absolute",background:"transparent",
    border:"none",outline:"0",fontFamily:"Roboto",fontSize:"1.4rem"
    }} value={text} onChange={(e)=>handleChange(e)}/>
    </div>
    </div>
  )
}

export default Notes