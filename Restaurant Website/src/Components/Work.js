import React from "react";
import PickMeals from "../Assets/pick-meals-image.png";
import ChooseMeals from "../Assets/choose-image.png";
import DeliveryMeals from "../Assets/delivery-image.png";

const Work = () => {
  const workInfoData = [
    {
      image: PickMeals,
      title: "Pick Meals",
      text: "The art of choosing a restaurant! A daunting task, indeed. Here are some helpful tips to make your decision-making process smoother",
    },
    {
      image: ChooseMeals,
      title: "Choose How Often",
      text: " For instance, if it's a daily habit, regularity is key; however, if it's a one-time task, infrequency might suffice.  ",
    },
    {
      image: DeliveryMeals,
      title: "Fast Deliveries",
      text: "Fast delivery provides a competitive advantage in a crowded market. By prioritizing speed, businesses can enhance customer satisfaction, differentiate themselves from competitors, build a positive brand reputation.",
    },
  ];
  return (
    <div className="work-section-wrapper">
      <div className="work-section-top">
        <p className="primary-subheading">Work</p>
        <h1 className="primary-heading">How It Works</h1>
        <p className="primary-text">
        Like all businesses, restaurants make money by selling more in product than they spend. This requires keeping prices high enough to more than cover the cost of goods sold and labor costs. Together they make up a restaurant's prime cost which gives you a figure to target when optimizing profit.
        </p>
      </div>
      <div className="work-section-bottom">
        {workInfoData.map((data) => (
          <div className="work-section-info" key={data.title}>
            <div className="info-boxes-img-container">
              <img src={data.image} alt="" />
            </div>
            <h2>{data.title}</h2>
            <p>{data.text}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Work;
