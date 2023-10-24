import React from 'react'
import Styles from './browse.module.css';
import Info from './Info';
import Weather from './Weather';
const BrowsePage = () => {
  return (
    <div>
    <div className={Styles.body}>
      <div className={Styles.left}>
      <Info/>
      <Weather/>
      </div>
    </div>
    </div>
  )
}

export default BrowsePage