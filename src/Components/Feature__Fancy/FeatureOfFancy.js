import React from "react";

const FeatureOfFancy = ({ option }) => {
  return (
    <div className="item">
      <div className="items">
        <div className="image">
          <img src={option.logo} alt="" srcset="" />
        </div>
        <h4 className="white1">{option.title}</h4>
        <h5 className="white2">{option.description}</h5>
        <img className="right-arrow" src={option.right_logo} alt="" srcset="" />
      </div>
    </div>
  );
};

export default FeatureOfFancy;
