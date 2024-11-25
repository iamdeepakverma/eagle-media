import React from 'react'
import Header from '../Header/Header'
import Services from '../Service/Services'
import WhoWeare from '../About/WhoWeare'
import PageLoader from '../Loader/PageLoader'

const Home = () => {
  return (
    <div>
      <Header/>
      <Services/>
      {/* <PageLoader/> */}
      <WhoWeare/>
    </div>
  )
}

export default Home
