import React from "react";
import "./HostingFeatures.css";
import PriceOption from "../PriceOption/PriceOption";

const HostingFeatures = () => {
  const pricingOptions = [
    {
      id: 1,
      name: "Basic Plan",
      description: "When you need just one site and security.",
      price: "$2.45",
      priceText: "Normally $9.99 - 12/mo term",
      buttonName: "Choose Basic",
      topFeatures: [
        "1 Website",
        "50 GB SSD Storage",
        "Custom Themes",
        "24/7 Customer Support",
      ],
      websiteBuilder: [
        "WordPress Integration",
        "Drag and Drop Functionality",
        "AI-Driven Templates",
      ],
    },
    {
      id: 2,
      name: "Advanced Plan",
      description: "For those running multiple sites and security.",
      price: "$5.45",
      priceText: "Normally $13.99 - 12/mo term",
      buttonName: "Choose Advanced",
      topFeatures: [
        "unlimited Website",
        "50 GB SSD Storage",
        "Custom Themes",
        "24/7 Customer Support",
      ],
      websiteBuilder: [
        "WordPress Integration",
        "Drag and Drop Functionality",
        "AI-Driven Templates",
      ],
    },
    {
      id: 3,
      name: "Enterprise Plan",
      description: "With added privacy and security features.",
      price: "$9.45",
      priceText: "Normally $18.99 - 12/mo term",
      buttonName: "Choose Enterprise",
      topFeatures: [
        "unlimited Website",
        "50 GB SSD Storage",
        "Custom Themes",
        "24/7 Customer Support",
      ],
      websiteBuilder: [
        "WordPress Integration",
        "Drag and Drop Functionality",
        "AI-Driven Templates",
      ],
    },
    {
      id: 4,
      name: "Premium Plan",
      description: "Get more power with optimized web resources.",
      price: "$13.45",
      priceText: "Normally $17.99 - 12/mo term",
      buttonName: "Choose Premium",
      topFeatures: [
        "unlimited Website",
        "unlimited SSD Storage",
        "Custom Themes",
        "24/7 Customer Support",
      ],
      websiteBuilder: [
        "WordPress Integration",
        "Drag and Drop Functionality",
        "AI-Driven Templates",
      ],
    },
  ];

  return (
    <div className="hosting__feature">
      <p className="text">WHAT ABOUT OUR PLANS</p>
      <p className="text__description">
        Get More Power With Our Web <br /> Hosting Products
      </p>
      <div className="grid grid-cols-4 gap-0 p-3 rounded-md ">
        {pricingOptions.map((option) => (
          <PriceOption key={option.id} option={option}></PriceOption>
        ))}
      </div>
    </div>
  );
};

export default HostingFeatures;
