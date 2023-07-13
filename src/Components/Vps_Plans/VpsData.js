import React, { useEffect, useState } from "react";
import rightArrow from "../Assets/FancyFeatuesLogo/right-arrow (2).png";

const VpsData = () => {
  const [dataArray] = useState([
    {
      id: 1,
      data: [
        "vCPU",
        "2 Cores",
        "4 Cores",
        "Performance / RAM",
        "1 – 32 GB RAM",
        "2 – 32 GB RAM",
        "Storage",
        "120 GB SSD",
        "240 GB SSD",
        "Bandwidth",
        "Yes",
        "Yes",
        "Dedicated IP",
        "2 IPs",
        "2 IPs",
      ],
    },
    {
      id: 2,
      data: [
        "Root access",
        "Yes",
        "Yes",
        "cPanel/WHM",
        "optional",
        "optional",
        "Softaculous script installer",
        "Yes",
        "Yes",
        "LetsEncrypt SSL included",
        "Yes",
        "Yes",
        "Unlimited email accounts",
        "Yes",
        "Yes",
        "Free content transfers",
        "Yes",
        "Yes",
        "Network guarantee",
        "Yes",
        "Yes",
        "MySQL",
        "Yes",
        "Yes",
        "Storage",
        "120 GB SSD",
        "240 GB SSD",
        "Free content transfers",
        "Yes",
        "Yes",
        "Network guarantee",
        "Yes",
        "Yes",
      ],
    },
    {
      id: 3,
      data: [
        "Maximum outgoing emails",
        "Unlimited",
        "Unlimited",
        "Maximum POP/IMAP connections",
        "Unlimited",
        "Unlimited",
      ],
    },
    {
      id: 4,
      data: [
        "Centralized DDoS Protection",
        "Yes",
        "Yes",
        "Weekly offsite backups",
        "Yes",
        "Yes",
        "Create manual backups",
        "Yes",
        "Yes",
        "Create scheduled backups",
        "Yes",
        "Yes",
      ],
    },
    {
      id: 5,
      data: [
        "Network uptime guarantee",
        "Yes",
        "Yes",
        "US-based Data Centers",
        "Yes",
        "Yes",
        "Fully redundant network",
        "Yes",
        "Yes",
        "Multiple bandwidth providers",
        "AboveNet, AT&T, Comcast, Global crossing, Level (3), NTT",
        "AboveNet, AT&T, Comcast, Global crossing, Level (3), NTT",
      ],
    },
    {
      id: 6,
      data: [
        "Premium support",
        "Yes",
        "Yes",
        "Server monitoring and remediation",
        "Yes",
        "Yes",
      ],
    },
  ]);

  const [selectedData, setSelectedData] = useState([]);

  const [clickedButton, setClickedButton] = useState(null);

  const handleClick = (buttonId) => {
    setClickedButton(buttonId);
  };

  const handleButtonClick = (index) => {
    const selectedElement = dataArray.find(
      (element) => element.id === index + 1
    );
    if (selectedElement) {
      setSelectedData(selectedElement.data);
    }
  };

  useEffect(() => {
    handleButtonClick(0);
    handleClick("button1");
  }, []);

  return (
    <div>
      <div className="vps__buttons">
        <div className="buttons">
          <button
            id="button1"
            onClick={() => {
              handleButtonClick(0);
              handleClick("button1");
            }}
            className={`button_vp ${
              clickedButton === "button1" ? "active" : ""
            }`}
          >
            Hardware
          </button>
          <button
            id="button2"
            onClick={() => {
              handleButtonClick(1);
              handleClick("button2");
            }}
            className={`button_vp ${
              clickedButton === "button2" ? "active" : ""
            }`}
          >
            VpsFeatures
          </button>
          <button
            id="button3"
            onClick={() => {
              handleButtonClick(2);
              handleClick("button3");
            }}
            className={`button_vp ${
              clickedButton === "button3" ? "active" : ""
            }`}
          >
            Email
          </button>
          <button
            id="button4"
            onClick={() => {
              handleButtonClick(3);
              handleClick("button4");
            }}
            className={`button_vp ${
              clickedButton === "button4" ? "active" : ""
            }`}
          >
            Security
          </button>
          <button
            id="button5"
            onClick={() => {
              handleButtonClick(4);
              handleClick("button5");
            }}
            className={`button_vp ${
              clickedButton === "button5" ? "active" : ""
            }`}
          >
            Network
          </button>
          <button
            id="button6"
            onClick={() => {
              handleButtonClick(5);
              handleClick("button6");
            }}
            className={`button_vp ${
              clickedButton === "button6" ? "active" : ""
            }`}
          >
            Support
          </button>
        </div>
        _vp
        <div className="table">
          <table>
            <tr>
              <th className="first_header">
                Swipe to <br /> Check plans
                <img
                  className="arrow_image"
                  src={rightArrow}
                  alt=""
                  srcset=""
                />
              </th>
              <th className="second_header">
                <div>
                  <p> Self Managed</p>
                  <br />
                  <p className="as_low_text"> as low as</p>

                  <div className="price">
                    <span className="dollar">$</span>
                    <span className="amount">19.99</span>
                    <span className="frequency">/mon</span>
                  </div>
                  <button className="button_seePlans">
                    See Plans and Pricing
                  </button>
                </div>
              </th>
              <th className="second_header">
                <div>
                  <p> Fully Managed</p>
                  <br />
                  <p className="as_low_text"> as low as</p>

                  <div className="price">
                    <span className="dollar">$</span>
                    <span className="amount">29.99</span>
                    <span className="frequency">/mon</span>
                  </div>
                  <button className="button_seePlans">
                    See Plans and Pricing
                  </button>
                </div>
              </th>
            </tr>
            <tr>
              <td className="data"></td>
              <td className="data">
                For experienced users that want full control over their server.
              </td>
              <td className="data">
                For those that don’t have the time or advanced server skills.
              </td>
            </tr>
            {/* here */}
            {selectedData.map((data, index) => {
              if (index % 3 === 0) {
                return (
                  <tr key={index}>
                    <td className="data_vps">{data}</td>
                    {selectedData[index + 1] && (
                      <td className="data_vps">{selectedData[index + 1]}</td>
                    )}
                    {selectedData[index + 2] && (
                      <td className="data_vps">{selectedData[index + 2]}</td>
                    )}
                  </tr>
                );
              } else {
                return null;
              }
            })}
          </table>
        </div>
      </div>
    </div>
  );
};

export default VpsData;
