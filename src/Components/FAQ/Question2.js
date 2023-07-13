import React from "react";
import "./Question1.css";
import star from "../Assets/QNA/favorite.png";
import { Accordion, AccordionItem } from "react-light-accordion";

const Question2 = () => {
  const DummyContent = () => (
    <p style={{ padding: "18px", color: " rgb(153, 153, 165)" }}>
      Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod
      tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim
      veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea
      commodo consequat.
    </p>
  );
  const DummyContent2 = () => (
    <p style={{ padding: "18px", color: " rgb(153, 153, 165)" }}>
      Another great question. A dedicated server is a server that's literally
      dedicated to you and no one else, which means the world (or in this case,
      server) is your oyster. Learn more about the benefits of VPS and Dedicated
      here.
    </p>
  );
  return (
    <>
      <div>
        <div className="question1 question_flex">
          <img className="image_button" src={star} alt="" />
          <div className="button-text">
            <small>
              <b>VPS Hosting Features</b>
            </small>
            <br />
            <small className="small_text">
              Dive deeper into HostX's servers features.
            </small>
            <div className="question__flex">
              <Accordion atomic={true}>
                <AccordionItem title=" Wait… if we're talking about a VPS, what is a VPN then?">
                  <DummyContent />
                </AccordionItem>
                <hr className="question_hr" />
                <AccordionItem title="What about VPS vs. Dedicated?">
                  <DummyContent2 />
                </AccordionItem>
                <hr className="question_hr" />
                <AccordionItem title="How do I get started with VPS hosting?">
                  <DummyContent />
                </AccordionItem>
                <hr className="question_hr" />
                <AccordionItem title="What is a Virtual Private Server (VPS)?">
                  <DummyContent />
                </AccordionItem>
                <hr className="question_hr" />
                <AccordionItem title="When should I use VPS hosting over Shared?">
                  <DummyContent />
                </AccordionItem>
              </Accordion>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Question2;
