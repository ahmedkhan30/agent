import React from "react";
import { Fade } from "react-reveal";
const AgentInfor = () => {
  return (
    <div className="agent-info">
      <div className="container">
        <div className="row">
          <div className="col-lg-8 col-md-10 col-sm-12 col-xm-12 offset-md-2">
            <Fade right>
              <h3 className="agent-heading">What a Registered Agent Is</h3>
            </Fade>
          <Fade left>
          <p className="agent-para text-secondary lh-lg">
              At its core, a registered agent is an individual or company that
              accepts service of process—lawsuits—on behalf of the business.
              Every state and US jurisdiction outlines registered agent
              requirements for businesses in state statutes. These state laws
              typically require businesses such as LLCs, corporations,
              nonprofits and registered partnerships to appoint and maintain a
              registered agent.
            </p>
            <p className="agent-para text-secondary lh-lg">
              Registered agents must:
            </p>
            <ul>
              <li className="agent-para text-secondary">
                Have a physical address in the state where they’ve been
                appointed.
              </li>
              <li className="agent-para text-secondary">
                Be available at that address during normal business hours.
              </li>
              <li className="agent-para text-secondary">
                Accept service of process on behalf of the business.
              </li>
            </ul>
            <p className="agent-para text-secondary lh-lg">
              Ideally, however, your registered agent should do much more.
            </p>
          </Fade>

          
          </div>

          <div className="col-lg-8 col-md-10 col-sm-12 col-xm-12 offset-md-2">
            <Fade right>
              <h3 className="agent-heading">
                What a Registered Agent Should Be
              </h3>
            </Fade>
          <Fade left>
          <p className="agent-para text-secondary lh-lg">
              At Northwest Registered Agent, we value the investment you make in
              us. In turn, we invest in privacy, software, forms, and in-house
              experts and filers. Whether you hire us for service in just one
              state or in all 50, you’ll be provided with top-of-the-line tools
              and services, including:
            </p>
            <p className="agent-para text-secondary lh-lg">
              Registered agents must:
            </p>
            <ul>
              <li className="agent-para text-secondary">Privacy by Default</li>
              <li className="agent-para text-secondary">
                Corporate Guides® to answer your toughest business questions
              </li>
              <li className="agent-para text-secondary">
                Business maintenance tools.
              </li>
              <li className="agent-para text-secondary">
                State compliance notifications
              </li>
              <li className="agent-para text-secondary">
                Access to every state form, with pre-filled settings for fast
                and simple filing.
              </li>
              <li className="agent-para text-secondary">
                A secure online account where you’ll receive every document we
                accept on your company’s behalf minutes after we receive them
              </li>
            </ul>
            <p className="agent-para text-secondary lh-lg">
              When we say we’re committed to getting our clients more, we mean
              it..
            </p>

          </Fade>
        
          </div>
        </div>
      </div>
    </div>
  );
};

export default AgentInfor;
