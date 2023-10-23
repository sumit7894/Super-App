import React from 'react';
import { useState } from 'react';
import Styles from "./genre.module.css";
import Chips from './Chips';
import Block from './Block';
import Action from "../../assets/images/action.png";
import Drama from "../../assets/images/drama.png";
import Romance from "../../assets/images/romance.png";
import Thriller from "../../assets/images/thriller.png";
import Western from "../../assets/images/western.png";
import Horror from "../../assets/images/horror.png";
import Fantasy from "../../assets/images/fantasy.png";
import Music from "../../assets/images/music.png";
import Fiction from "../../assets/images/fiction.png";
import { useNavigate } from 'react-router-dom';
const GenreCatalog = () => {
  const Navigate = useNavigate();
  const genre = [
    {
    id:"Action",
    color:"#FF5209",
    image:<img src={Action} alt='action' style={{width:"180px",padding:"10px"}}/>
  },
  {
    id:"Drama",
    color:"#D7A4FF",
    image:<img src={Drama} alt='drama' style={{width:"180px",padding:"10px"}}/>
  },
  {
    id:"Romance",
    color:"#11B800",
    image:<img src={Romance} alt='romance' style={{width:"180px",padding:"10px"}}/>
  },
  {
    id:"Thriller",
    color:"#84C2FF",
    image:<img src={Thriller} alt='thriller' style={{width:"180px",padding:"10px"}}/>
  },
  {
    id:"Western",
    color:"#902500",
    image:<img src={Western} alt='western' style={{width:"180px",padding:"10px"}}/>
  },
  {
    id:"Horror",
    color:"#7358FF",
    image:<img src={Horror} alt='horror' style={{width:"180px",padding:"10px"}}/>
  },
  {
    id:"Fantasy",
    color:"#FF4ADE",
    image:<img src={Fantasy} alt='fantasy' style={{width:"180px",padding:"10px"}}/>
  },
  {
    id:"Music",
    color:"#E61E32",
    image:<img src={Music} alt='music' style={{width:"180px",padding:"10px"}}/>
  },
  {
    id:"Fiction",
    color:"#6CD061",
    image:<img src={Fiction} alt='fiction' style={{width:"180px",padding:"10px"}}/>
  },
]
const [categories,setCategories] = useState([]);
const handleNext =()=>{
  if(categories.length<3){
      return
  }else{
    window.localStorage.setItem("genres",JSON.stringify([...categories]));
    Navigate("/browse");
  }
}
  return (
    <div className={Styles.body}>
    <div className={Styles.left}>
    <p className={Styles.heading}>Super app</p>
    <p className={Styles.subHeading}>
    Choose your entertainment category</p>
    <Chips categories={categories} color={"#148A08"} setCategories={setCategories}/>
    {categories.length<3 &&(<p className={Styles.alert}>Minimum 3 category required</p>)} 
    </div>
    <div className={Styles.right}>
    {genre.map((data,idx)=>
    <Block data= {data} idx={idx} key={data.id} categories={categories} setCategories={setCategories}/>
    )}
    </div>
      <button className={Styles.next} onClick={handleNext}>Next Page</button>
    </div>
  )
}

export default GenreCatalog;