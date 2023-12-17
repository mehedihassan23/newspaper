import React from 'react'

import './MainLayoutStyle.css'
import HeadTItle from '../Shared/HeadTitle/HeadTItle'
import Navigation from '../Shared/Navigation/Navigation'
import LatestBar from '../components/LatestBar/LatestBar'


const Main = () => {
  return (
     <>
       <HeadTItle />
       <LatestBar />
       <Navigation />
        <div className="mainLayOut">
            <div className="leftNav">
              <h1>left nav</h1>
            </div>
            <div className="maincontent">
              <h1>main content</h1>
            </div>
            <div className="rightNav">
              <h1>Right nav</h1>
            </div>
      </div>
     </>
  )
}

export default Main