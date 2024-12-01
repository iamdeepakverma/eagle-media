import React from 'react'
import Header from '../Header/Header'
import Services from '../Service/Services'
import Coungter from '../Counter/Coungter'
// import WhoWeare from '../About/WhoWeare'
// import PageLoader from '../Loader/PageLoader'

const Home = () => {
  return (
    <div>
      <Header/>
      <Services/>
      {/* <PageLoader/> */}
      {/* <WhoWeare/> */}
      <Coungter/>
    </div>
  )
}

export default Home
