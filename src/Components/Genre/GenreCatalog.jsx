import React from 'react'
import Styles from "./genre.module.css";
const GenreCatalog = () => {
  return (
    <div className={Styles.body}>
    <div className={Styles.left}>
    <p className={Styles.heading}>Super app</p>
    <p className={Styles.subHeading}>
    Choose your entertainment category</p>
    <div style=
    {{display:"flex",flexWrap:"wrap",width:"100%",
    backgroundColor:"red"}}>
    <div className={Styles.selectedChoice}>
      Romance <button style=
      {{border:'none',backgroundColor:"#72DB73",}}>
        X</button>
    </div>
    <div className={Styles.selectedChoice}>
      Romance <button style=
      {{border:'none',backgroundColor:"#72DB73",}}>
        X</button>
    </div>
    <div className={Styles.selectedChoice}>
      Romance <button style=
      {{border:'none',backgroundColor:"#72DB73",}}>
        X</button>
    </div>

    </div>
    <p className={Styles.alert}>Minimum 3 category required</p> 
    </div>
    </div>
  )
}

export default GenreCatalog