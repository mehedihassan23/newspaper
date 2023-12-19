import React from 'react'

import './MainLayoutStyle.css'
import HeadTItle from '../Shared/HeadTitle/HeadTItle'
import Navigation from '../Shared/Navigation/Navigation'
import LatestBar from '../components/LatestBar/LatestBar'
import LeftNav from '../components/LeftNav/LeftNav'
import RightNav from '../components/RightNav/RightNav'
import MainContent from '../components/MainContent/MainContent'


const Main = () => {
  return (
     <>
       <HeadTItle />
       <LatestBar />
       <Navigation />
        <div className="mainLayOut">
            <div className="leftNav">
              <LeftNav />
            </div>
            <div className="maincontent">
              <h4>Bangladesh News Home Page</h4>
               <MainContent />
               <MainContent />
               <MainContent />
               <MainContent />
            </div>
            <div className="rightNav">
               <RightNav />
            </div>
      </div>
     </>
  )
}

export default Main
