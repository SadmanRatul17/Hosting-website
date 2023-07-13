import React from "react";
import "./PriceOption.css";
import Feature from "../Feature/Feature";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCircleCheck } from "@fortawesome/free-solid-svg-icons";

const PriceOption = ({ option }) => {
  const { topFeatures, websiteBuilder } = option;
  return (
    <div className="pricing__cards">
      <div className="card__option">
        <p className="plan__name">{option.name}</p>
        <p className="plan__description">{option.description}</p>
        <p className="plan__price">{option.price}</p>
        <p className="plan__description">{option.priceText}</p>
        <hr className="custom__hr margin" />
        <button className="plan__button" type="submit">
          {option.buttonName}
        </button>
        <p className="plan__top">Top Features</p>
        {topFeatures.map((feature) => (
          <Feature feature={feature}></Feature>
        ))}

        <p className="plan__avail">Website Builder Available</p>
        <div className="mb-10">
          {websiteBuilder.map((feature) => (
            <div className="flex items-center ">
              <FontAwesomeIcon
                className="h-4 w-4 text-green-500"
                icon={faCircleCheck}
              />
              <p className="ml-2 my-1 text-sm">{feature}</p>
            </div>
          ))}
        </div>
        <p className="plan__avail">Also includes</p>
        <div className="mb-10">
          {websiteBuilder.map((feature) => (
            <div className="flex items-center ">
              <FontAwesomeIcon
                className="h-4 w-4 text-green-500"
                icon={faCircleCheck}
              />
              <p className="ml-2 my-1 text-sm">{feature}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default PriceOption;
