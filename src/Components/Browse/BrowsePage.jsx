import React from 'react'
import Styles from './browse.module.css';
import Info from './Info';
import Weather from './Weather';
import News from './News';
const BrowsePage = () => {
  return (
    <div className={Styles.body}>
      <div className={Styles.left}>
      <Info/>
      <Weather/>
      </div>
      <div className={Styles.right}>
        <News/>
      </div>
    </div>
  )
}

export default BrowsePage