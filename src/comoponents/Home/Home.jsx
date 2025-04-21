import React from 'react'
import Header from '../Header/Header'
import Services from '../Service/Services'
import Coungter from '../Counter/Coungter'
import HomeAbout from '../About/HomeAbout'
import Testimonials from '../Testimonail/Testimonial'
import PrimaryGolas from '../PrimaryGolas/PrimaryGolas'
import HowWeWork from '../HowWeWork/HowWeWork'
// import WhoWeare from '../About/WhoWeare'
// import PageLoader from '../Loader/PageLoader'

const Home = () => {
  return (
    <div>
      <Header/>
      <HomeAbout/>
      <Services/>
      <Coungter/>
      <HowWeWork/>
      <PrimaryGolas/>
      {/* <Testimonials/> */}
    </div>
  )
}

export default Home
