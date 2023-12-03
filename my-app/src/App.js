import React from 'react'
import Profile from './Component/Profile'
import Contact from './Component/Contact'
import Nav from './Component/Nav'
import Detail from './Component/Detail'
import Assisment_Project_Status1 from './Component/AP_status1'
import Assisment_Project_Status2 from './Component/AP_status2'

export default function App() {
  return (
    <div className=' container border my-3 rounded rounded-3 '>
      <div className="row row-col-lg-2 container col-lg-12">
        <Nav />
        <div className="col-lg-4">
          <Profile />
          <Contact />
        </div>
        <div className="col-lg-8 ">
          <Detail />
          <div className=" d-lg-flex d-lg-block col-lg-12 col-md-12 container mt-4">
            <div className="col-lg-6 col-md-12" width="80%"><Assisment_Project_Status1 /></div>
            <div className="col-lg-6 col-md-12"><Assisment_Project_Status2 /></div>
          </div>
        </div>

      </div>
    </div>
  )
}
