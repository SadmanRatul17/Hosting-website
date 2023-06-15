import React from "react";
import "./Home.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faBell,
  faCircleCheck,
  faCloudArrowDown,
  faCommentSlash,
  faList,
  faMessage,
} from "@fortawesome/free-solid-svg-icons";
import goggleLogo from "../../Assets/goggle.png";
import githubLogo from "../../Assets/github.png";
import windows from "../../Assets/windows.png";
import android from "../../Assets/android.png";
import ubuntu from "../../Assets/ubuntu.png";
import derian from "../../Assets/linux.png";
import centOs from "../../Assets/centos.png";
import open from "../../Assets/open.png";
import HostingFeatures from "../../HostingFeatures/HostingFeatures";

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
            <p className="hrtext">or sign up with</p>
            <hr className="line2" />
          </div>
          <div className="button_authentication">
            <button className="goggle__button">
              <img className="goggle__img" src={goggleLogo} alt="" srcset="" />
              GOOGLE
            </button>
            <button className="goggle__button">
              <img
                className="goggle__img github__img"
                src={githubLogo}
                alt=""
                srcset=""
              />
              GitHub
            </button>
          </div>
          <div className="Last__description">
            <small>
              $100, 60-day free trial requires valid credit card. By signing up,
              you agree to the
              <a className="terms" href="#">
                Terms of Service
              </a>
              .
            </small>
          </div>
        </div>
      </div>
      <section className="icon__box home">
        <div className="box">
          <FontAwesomeIcon className="box_icon" icon={faMessage} />
          <p>Anonymous</p>
          <p>Access</p>
        </div>
        <div className="box">
          <FontAwesomeIcon className="box_icon" icon={faCommentSlash} />
          <p>No Usage</p>
          <p>Logs</p>
        </div>
        <div className="box">
          <FontAwesomeIcon className="box_icon" icon={faCloudArrowDown} />
          <p>No Usage</p>
          <p>Limits</p>
        </div>
        <div className="box">
          <FontAwesomeIcon className="box_icon" icon={faList} />
          <p>100% White . .</p>
          <p>Listed</p>
        </div>
      </section>

      <section className="popular-choice">
        <div>
          <p className="popular__Text">
            Popular <br /> operating <br /> systems.
            <br />
            <span className="choice">Your Choice.</span>
          </p>
          <small className="small-text">
            With ability to upload your own Operating system.
          </small>
        </div>
        <div className="logo__cards">
          <div className="card">
            <img className="card__windows" src={windows} alt="" srcset="" />
            <p>Windows</p>
          </div>
          <div className="card">
            <img className="card__windows" src={android} alt="" srcset="" />
            <p>Android</p>
          </div>
          <div className="card">
            <img className="card__windows" src={ubuntu} alt="" srcset="" />
            <p>Ubuntu</p>
          </div>
          <div className="card">
            <img className="card__windows" src={derian} alt="" srcset="" />
            <p>Derian</p>
          </div>
          <div className="card">
            <img className="card__windows" src={centOs} alt="" srcset="" />
            <p>CentOs</p>
          </div>
          <div className="card">
            <img className="card__windows" src={open} alt="" srcset="" />
            <p>OPen suse</p>
          </div>
        </div>
      </section>

      <section className="hosting__products">
        <HostingFeatures></HostingFeatures>

        <div className="icon__text">
          <div>
            <FontAwesomeIcon
              className="h-3.5 w-3.5 text-blue-700 ml-5"
              icon={faCircleCheck}
            />
            <small className="text-slate-400 ml-2 text-sm">
              Backups monthly
            </small>
          </div>
          <div>
            <FontAwesomeIcon
              className="h-3.5 w-3.5 text-blue-700 ml-5"
              icon={faCircleCheck}
            />
            <small className="text-slate-400 ml-2 text-sm">
              Free white-glove migrations
            </small>
          </div>
          <div>
            <FontAwesomeIcon
              className="h-3.5 w-3.5 text-blue-700 ml-5"
              icon={faCircleCheck}
            />
            <small className="text-slate-400 ml-2 text-sm">
              Staging enviroments, ande more.
            </small>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Home;
