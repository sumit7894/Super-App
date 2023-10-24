import React from 'react'
import Styles from './browse.module.css';
import Info from './Info';

const BrowsePage = () => {
  return (
    <div>
    <div className={Styles.body}>
      <div className={Styles.left}>
      <Info/>
      </div>
    </div>
    </div>
  )
}

export default BrowsePage