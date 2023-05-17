import React from "react";

import { FaAngleRight } from "react-icons/fa";

const BigCard = () => {
  return (
    <div className="service">
      <div className="container">
        <div className="row big-row">
          
            
                  <div className="bigcard col-lg-5 col-md-5 col-sm-12 col-xm-12 text-start ">
                    <img src='https://www.northwestregisteredagent.com/wp-content/themes/nwra/assets/img/NW-icons-finalish-01.svg' alt='' width='100'/>
                    <h3 className="big-head">Privacy By Default</h3>
                    <li className="big-point">Bussiness Address Included</li>
                    <li className="big-point">Free mail forwarding</li>
                    <li className="big-point">Wen never sale your data</li>
                    <h6 className="big-bottom">
                     EXPLORE PRIVACY BY DEFAULT<FaAngleRight size="1rem" />
                    </h6>
                  </div>
                  
                  <div className="bigcard col-lg-5 col-md-5 col-sm-12 col-xm-12 text-start ">
                    <img src='https://www.northwestregisteredagent.com/wp-content/themes/nwra/assets/img/NW-icons-finalish-01.svg' alt='' width='100'/>
                    <h3 className="head1  ">Privacy By Default</h3>
                    <li className="big-point">Bussiness Address Included</li>
                    <li className="big-point">Free mail forwarding</li>
                    <li className="big-point">Wen never sale your data</li>
                    <h6 className="big-bottom">
                     EXPLORE PRIVACY BY DEFAULT<FaAngleRight size="1rem" />
                    </h6>
                  </div>
                
            </div>
          </div>
        </div>

  );
};

export default BigCard;
