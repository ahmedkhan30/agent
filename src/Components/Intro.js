import React from "react";
import { FaAngleRight } from "react-icons/fa";

const Intro = () => {
  return (
    <>
      <div className="container text-start intro">
        <div className="row">
          <div className="col-lg-6 col-md-6 col-sm-12 col-xm-12">
            <h3 className='intro-heading fs-1 lh-base'>Starting a New Business<br/> Can Be Stressful and <br/>Expensive</h3>
            {/* <p className="text-secondary lh-base pt-3 fs-5">There's a lot to do to file an LLC. Varying state <br/>requirements, numerous steps and lots of important <br/>documentation leave plenty of room for error. Mistakes <br/>can be costly — that's where we come in.</p> */}
             <div className='pt-5'><div className="row">
           <div className="col-lg-6 col-md-6 col-sm-12 col-xm-12  p-3 fs-5 intro-para"><FaAngleRight size='1.2rem'/> Get a Registered Agent</div>
            <div className="col-lg-6 col-md-6 col-sm-12 col-xm-12  p-3 fs-5 intro-para"><FaAngleRight size='1.2rem'/>Get a Start Busniness Account</div>
           </div>
           <div className="row">
           <div className="col-lg-6 col-md-6 col-sm-12 col-xm-12  p-3 fs-5 intro-para"><FaAngleRight size='1.2rem'/>Start an LLC</div>
            <div className="col-lg-6 col-md-6 col-sm-12 col-xm-12  p-3 fs-5 intro-para"><FaAngleRight size='1.2rem'/>Get Free Legal Docs</div>
           </div>
           <div className="row">
           <div className="col-lg-6 col-md-6 col-sm-12 col-xm-12  p-3 fs-5 intro-para"><FaAngleRight size='1.2rem'/>Start a Corporation</div>
            <div className="col-lg-6 col-md-6 col-sm-12 col-xm-12  p-3 fs-5 intro-para"><FaAngleRight size='1.2rem'/>Form a Non Profit</div>
           </div> 
           </div> 
           
           
          </div>
          <div className="col-lg-6 col-md-6 col-sm-12 col-xm-12 intro-img">
            <img src='https://www.northwestregisteredagent.com/wp-content/themes/nwra/assets/img/compass-test-v4.png' alt="" className="intro-img  w-100" />
          </div>
        </div>
        <div classname='row'>
           <div className="col-lg-12 col-md-12 col-sm-12 col-xm-12"> <h3 className='lh-base introText text-center'> Those who know use a registered agent service to start and maintain businesses. Northwest Companies are 900+ employees strong and maintain over 3 million businesses nationwide. All clients get dedicated Corporate Guides invested in your success.</h3></div>
        </div>
      </div>
    </>
  );
};

export default Intro;
