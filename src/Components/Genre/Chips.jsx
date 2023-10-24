import React from 'react'
import Styles from './chips.module.css';
const Chips = ({categories,setCategories,color}) => {
  const handleClick=(genre)=>{
      categories.splice(categories.indexOf(genre),1);
      setCategories([...categories]);
  }
  
  return (
    <div style={{display:"flex",flexWrap:"wrap",width:"100%",justifyContent:"center"}}>
      {categories.map((genre)=>
      <div className={Styles.selectedChoice} key={genre}>
      {genre} 
      <button style={{border:'none',backgroundColor:"#148A08"}} className={Styles.cross} onClick={()=>handleClick(genre)}>
        X 
      </button>
    </div>
      )}
    </div>
  )
}

export default Chips