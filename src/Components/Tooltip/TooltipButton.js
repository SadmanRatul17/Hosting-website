// import React from 'react';

// const TooltipButton = () => {
//     return (
//         <div>

//         </div>
//     );
// };

// export default TooltipButton;

import { faQuestion } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React from "react";
import { useState } from "react";

const TooltipButton = () => {
  const [showTooltip, setShowTooltip] = useState(false);

  const toggleTooltip = () => {
    setShowTooltip(!showTooltip);
  };

  return (
    <div className="ml-7">
      <button
        data-tooltip-target="tooltip-left"
        data-tooltip-placement="left"
        type="button"
        className="rounded-full px-1 md:mb-0 text-white bg-black-200 hover:bg-black-800  focus:outline-none  font-medium rounded-lg text-sm  text-center dark:bg-gray-600 dark:hover:bg-gray-500 dark:focus:ring-blue-800"
        onClick={toggleTooltip}
      >
        <FontAwesomeIcon icon={faQuestion} />
      </button>
      {showTooltip && (
        <div
          id="tooltip-lest"
          role="tooltip"
          className="absolute z-10 visible inline-block px-3 py-2 text-sm font-medium text-white bg-gray-900 rounded-lg shadow-sm opacity-100 tooltip dark:bg-gray-700 h-50 w-60"
        >
          <small>
            Lorem ipsum dolor, sit amet consectetur adipisicing elit. Alias
            nesciunt repudiandae maxime, incidunt aut nam modi amet error fugiat
            accusantium!
          </small>
          <div className="tooltip-arrow" data-popper-arrow></div>
        </div>
      )}
    </div>
  );
};

export default TooltipButton;
