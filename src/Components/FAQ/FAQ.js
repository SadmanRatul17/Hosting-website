import React, { useEffect, useState } from "react";
import "./FAQ.css";
import planet from "../Assets/QNA/planet-earth.png";
import star from "../Assets/QNA/favorite.png";
import lock from "../Assets/QNA/lock (1).png";
import dollar from "../Assets/QNA/dollar-coin.png";
import Question1 from "./Question1";
import Question2 from "./Question2";
import Question3 from "./Question3";
import Question4 from "./Question4";

const FAQ = () => {
  const [display, setDisplay] = useState("");

  const buttonClick = (id) => {
    if (id === 1) {
      setDisplay(<Question1></Question1>);
    } else if (id === 2) {
      setDisplay(<Question2></Question2>);
    } else if (id === 3) {
      setDisplay(<Question3></Question3>);
    } else if (id === 4) {
      setDisplay(<Question4></Question4>);
    }
  };

  useEffect(() => {
    buttonClick(1);
    handleClick("button1");
  }, []);

  const [selected, setSelected] = useState(null);

  const handleClick = (button) => {
    setSelected(button);
  };

  return (
    <div className="faq1">
      <p className="text">FAQS</p>
      <p className="text__description color">
        Got questions?
        <br />
        Well, we've got answers.
      </p>
      <section className="question">
        <div className="split-screen">
          <div className="left-pane">
            <div className="buttons">
              <button
                onClick={() => {
                  buttonClick(1);
                  handleClick("button1");
                }}
                className={`button1 ${
                  selected === "button1" ? "selected" : ""
                }`}
              >
                <img className="image_button" src={planet} alt="" />
                <div className="button-text">
                  <small>
                    <b>General inquiries</b>
                  </small>
                  <br />
                  <small className="small_text">
                    New around here? Start with the basics.
                  </small>
                </div>
              </button>
              <button
                onClick={() => {
                  buttonClick(2);
                  handleClick("button2");
                }}
                className={`button1 ${
                  selected === "button2" ? "selected" : ""
                }`}
              >
                <img className="image_button" src={star} alt="" />
                <div className="button-text">
                  <small>
                    <b>VPS Hosting Features</b>
                  </small>
                  <br />
                  <small className="small_text">
                    Dive deeper into HostX's servers features.
                  </small>
                </div>
              </button>
              <button
                onClick={() => {
                  buttonClick(3);
                  handleClick("button3");
                }}
                className={`button1 ${
                  selected === "button3" ? "selected" : ""
                }`}
              >
                <img className="image_button" src={lock} alt="" />
                <div className="button-text">
                  <small>
                    <b>Permissions & Privacy</b>
                  </small>
                  <br />
                  <small className="small_text">
                    We take security & privacy seriously.
                  </small>
                </div>
              </button>
              <button
                onClick={() => {
                  buttonClick(4);
                  handleClick("button4");
                }}
                className={`button1 ${
                  selected === "button4" ? "selected" : ""
                }`}
              >
                <img className="image_button" src={dollar} alt="" />
                <div className="button-text">
                  <small>
                    <b>Pricing & Plans</b>
                  </small>
                  <br />
                  <small className="small_text">
                    Learn about plans, payments, and more.
                  </small>
                </div>
              </button>
            </div>
          </div>
          <div className="right-pane">{display}</div>
        </div>
      </section>
    </div>
  );
};

export default FAQ;
