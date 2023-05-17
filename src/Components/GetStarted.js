import React from 'react'
import { Fade } from "react-reveal";

const GetStarted = () => {
  return (
    <Fade bottom>
    <div className='py-5' >
        <div className='container'>
        <div className="row">
        <div className="col-lg-8 col-md-8 col-sm-12 col-xm-12 bg-theme started rounded p-5 mx-auto text-center">
        <h3 className="fs-2 text-light">
        Get started with Business Agent
            </h3>
            <p className="fs-6 get-started-para text-light">Start, grow, and manage your business. We're with you each step of the way.</p>
            <button className="loginbtn mt-5">Start my busniness</button>
        </div>
      </div>
        </div>
    </div>
    </Fade>
  )
}

export default GetStarted