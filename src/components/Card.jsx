import React from "react";
import Button from "./Button";
import BoughtItem from "./BoughtItem";
import { useState } from "react";

const figure = {
  title: "Plante Piranha",
  type: "action plant",
  price: 250,
  rating: "⭐⭐",
};

const Card = () => {
  const [buy, setBuy] = useState(false);
  const handleBuy = () => {
    setBuy(!buy);
  };

  console.log(buy);

  return (
    <div className="card-container">
      <img src="src\assets\product-one.jpg" alt={figure.title} />
      <div className="card-content">
        <h3>{figure.title}</h3>
        <p>{figure.type}</p>
        <p>{figure.price} ¥</p>
        <p>{figure.rating}</p>
        {buy ? <BoughtItem /> : <Button text="Buy Now!" onClick={handleBuy} />}
      </div>
    </div>
  );
};
export default Card;
