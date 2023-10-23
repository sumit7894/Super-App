import React from 'react'
import banner from '../../assets/images/banner.png';
import styles from './Banner.module.css';
const Banner = () => {
  return (
        
        <div className={styles.banner}>
        <img alt='hello'
        src={banner}
        className={styles.bannerImage}>
        </img>
        <h1
        className={styles.imageTitle}>
        Discover new things on <br/>Superapp
        </h1>
        </div>
        
  )
}

export default Banner