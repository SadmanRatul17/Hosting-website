import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCircleCheck } from "@fortawesome/free-solid-svg-icons";
import TooltipButton from "../Tooltip/TooltipButton";
const Feature = ({ feature }) => {
  return (
    <>
      <div className="flex items-center ">
        <FontAwesomeIcon
          className="h-4 w-4 text-green-500"
          icon={faCircleCheck}
        />
        <p className="ml-2 my-1 text-sm">{feature}</p>
        <div>
          <TooltipButton></TooltipButton>
        </div>
      </div>
    </>
  );
};

export default Feature;
