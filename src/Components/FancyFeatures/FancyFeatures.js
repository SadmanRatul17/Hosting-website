import React from "react";
import "./FancyFeatures.css";
import image_upgrade from "../Assets/FancyFeatuesLogo/upgrade.png";
import image_priority from "../Assets/FancyFeatuesLogo/public-service.png";
import image_function from "../Assets/FancyFeatuesLogo/settings.png";
import image_fexible from "../Assets/FancyFeatuesLogo/agile.png";
import image_dataBase from "../Assets/FancyFeatuesLogo/database-storage.png";
import image_spark from "../Assets/FancyFeatuesLogo/lightning.png";
import image_network from "../Assets/FancyFeatuesLogo/distribution-network.png";
import image_privacy from "../Assets/FancyFeatuesLogo/privacy.png";
import FeatureOfFancy from "../Feature__Fancy/FeatureOfFancy";
import arrowRight from "../Assets/FancyFeatuesLogo/right-arrow (2).png";

const FancyFeatures = () => {
  const FeaturesData = [
    {
      id: 1,
      logo: image_upgrade,
      title: "Upgrade Managaement",
      description:
        "It's hard to believe that anyone want harm your website but they can do...",
      right_logo: arrowRight,
    },
    {
      id: 2,
      logo: image_priority,
      title: "Priority support & contact",
      description:
        "It's hard to believe that anyone want harm your website but they can do...",
      right_logo: arrowRight,
    },
    {
      id: 3,
      logo: image_function,
      title: "Advanced functionality",
      description:
        "It's hard to believe that anyone want harm your website but they can do...",
      right_logo: arrowRight,
    },
    {
      id: 4,
      logo: image_fexible,
      title: "Flexible Software Env.",
      description:
        "It's hard to believe that anyone want harm your website but they can do...",
      right_logo: arrowRight,
    },
    {
      id: 5,
      logo: image_dataBase,
      title: "Weekly Backups",
      description:
        "It's hard to believe that anyone want harm your website but they can do...",
      right_logo: arrowRight,
    },
    {
      id: 6,
      logo: image_spark,
      title: "Powerful Hardware Env.",
      description:
        "It's hard to believe that anyone want harm your website but they can do...",
      right_logo: arrowRight,
    },
    {
      id: 7,
      logo: image_network,
      title: "Network Guarantee",
      description:
        "It's hard to believe that anyone want harm your website but they can do...",
      right_logo: arrowRight,
    },
    {
      id: 8,
      logo: image_privacy,
      title: "Max Reliability & Accuracy",
      description:
        "It's hard to believe that anyone want harm your website but they can do...",
      right_logo: arrowRight,
    },
  ];
  return (
    <div>
      <p className="text">MORE THAN JUST A TOOL</p>
      <p className="text__description color">
        Fancy VPS features you get for <br /> totally free.
      </p>

      <section className="fancy">
        <div className="grid">
          {FeaturesData.map((option) => (
            <FeatureOfFancy key={option.id} option={option}></FeatureOfFancy>
          ))}
        </div>
      </section>
    </div>
  );
};

export default FancyFeatures;
