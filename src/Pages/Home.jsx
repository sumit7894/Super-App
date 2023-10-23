import React from 'react'
import Banner from '../Components/Home/Banner';
import SingupForm from '../Components/Home/SignupForm';
const Home = () => {
  return (
    <div style={{display:"flex"}}>
      <Banner/>
      <SingupForm/>
    </div>
  )
}

export default Home;