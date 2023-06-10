import React from "react";
import "./Home.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBell } from "@fortawesome/free-solid-svg-icons";
import { Link } from "react-router-dom";

const Home = () => {
  return (
    <div>
      <div className="home">
        <section className="section__one flex-item">
          <div className="home__txt">
            <p>VPS HOSTING</p>
            <p>POWERFULL AND </p>
            <p>RELIABLE!</p>
          </div>
          <div className="home__description">
            <p>
              Check out the services we offer below. We're determined to provide
              these services at the best quality - customer satisfaction and
              convenience are of the utmost importance for us.
            </p>
          </div>

          <div className="home__iconText">
            <p>
              <FontAwesomeIcon className="faBell" icon={faBell} />
            </p>
            <span className="icon-text">
              We don't ask for any personal information
            </span>
          </div>

          <div className="button">
            <button className="button__get">GET STARTED</button>
            <button className="button__learn">Learn More</button>
          </div>
        </section>

        <div className="section__login flex-item">
          <h2 className="login__text">
            Try HostX hosting for free with a $100 credit
          </h2>
          <form action="submit">
            <input
              className="input-field"
              placeholder="Email address"
              type="email"
              name="email"
              id=""
            />
            <input
              className="input-field"
              placeholder="Password"
              type="password"
              name="password"
              id=""
            />
            <button className="button__register" type="submit">
              Register
            </button>
          </form>
          <div className="container">
            <hr className="line1" />
            <p className="text">or sign up with</p>
            <hr className="line2" />
          </div>
          <div className="button_authentication"></div>
        </div>
      </div>
    </div>
  );
};

export default Home;
