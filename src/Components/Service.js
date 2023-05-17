import React from "react";
import { Fade } from "react-reveal";
import { FaAngleRight } from "react-icons/fa";

const data = [
  {
    img:'https://www.clevver.io/wp-content/themes/Clevvers/images/icons/icon-main-shelf.svg',
    top: "LET US FORM YOUR",
    middle: "Registered Agent",
    bottom: "INSTANT SERVICE",
  },
  {
    img:'https://www.clevver.io/wp-content/themes/Clevvers/images/icons/icon-main-offshore.svg',
    top: "LET US FORM YOUR",
    middle: "Form an LLC",
    bottom: "INSTANT SERVICE",
  },
  {
    img:'https://www.clevver.io/wp-content/themes/Clevvers/images/icons/icon-main-crypto.svg',
    top: "LET US FORM YOUR",
    middle: "Form a Non LLC",
    bottom: "INSTANT SERVICE",
  },
  {
    img:'https://www.clevver.io/wp-content/themes/Clevvers/images/icons/icon-main-compliance.svg',
    top: "LET US FORM YOUR",
    middle: "Form an S Corporation",
    bottom: "INSTANT SERVICE",
  },
  {
    img:'https://www.clevver.io/wp-content/themes/Clevvers/images/icons/icon-main-mail.svg',
    top: "LET US FORM YOUR",
    middle: "Form an C Corporation",
    bottom: "INSTANT SERVICE",
  },
  {
    img:'https://www.clevver.io/wp-content/themes/Clevvers/images/icons/icon-main-help.svg',
    top: "LET US FORM YOUR",
    middle: "Form an C Corporation",
    bottom: "INSTANT SERVICE",
  }
];
const Service = () => {
  return (
    <div className="service">
      <div className="container-fluid">
        <div className="row">
          <div className="col-lg-12 col-md-12 col-sm-12 col-xm-12">
            <Fade right>
              <h3 className="intro-heading fs-2 text-center">
              SPECIAL INTEREST SERVICES
              </h3>
            </Fade>

            <div className="container service-card pt-5">
              {/* <div className="service-card "> */}
                {data.map((item) => (
                  <div className="llc  text-start">
                    <img src={item.img} alt='' width='100'/>
                    <h6 className="head1  ">{item.top}</h6>
                    <h4 className="head2 bg-color">{item.middle}</h4>
                    <h6 className="head3">
                      {item.bottom} <FaAngleRight size="1rem" />
                    </h6>
                  </div>
                ))}
              {/* </div> */}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Service;
