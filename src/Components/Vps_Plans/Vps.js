import React from "react";
import "./Vps.css";
import VpsData from "./VpsData";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCircleCheck } from "@fortawesome/free-solid-svg-icons";

const Vps = () => {
  return (
    <div className="vps">
      <p className="text">LET'S GET TO THE JUICY DEETS</p>
      <p className="text__description color">
        Compare HostX VPS Plans and <br /> Support Services
      </p>
      <div>
        <VpsData></VpsData>
      </div>
      <div className="icon__text">
        <div>
          <FontAwesomeIcon
            className="h-3.5 w-3.5 text-blue-700 ml-5"
            icon={faCircleCheck}
          />
          <small className="text-slate-400 ml-2 text-sm">Backups monthly</small>
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
    </div>
  );
};

export default Vps;
