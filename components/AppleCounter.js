import React from "react";
import Button from "./Button";
import LeftArrow from "../assets/images/left-arrow.png";
import RightArrow from "../assets/images/right-arrow.png";
import AppleBasket from "./AppleBasket";
import { useState } from "react";

// let rightApple = 0;
// let leftApple = totalApple - rightApple;
export default function AppleCounter() {
  const totalApple = 10;
  const [leftApple, setLeftApple] = useState(0);
  const [rightApple, setRightApple] = useState(totalApple - leftApple);
  const leftClick = () => {
    if (rightApple > 0) {
      setRightApple(rightApple - 1);
      setLeftApple(leftApple + 1);
    }
  };
  const rightClick = () => {
    if (leftApple > 0) {
      setLeftApple(leftApple - 1);
      setRightApple(rightApple + 1);
    }
  };
  return (
      <section>
        <AppleBasket appleCount={leftApple} basketName={"Basket 1"} />
        <Button onClick={leftClick} imageUrl={LeftArrow} title={"Add Apple"} />
        <Button
          onClick={rightClick}
          imageUrl={RightArrow}
          title={"Add Apple"}
        />
        <AppleBasket appleCount={rightApple} basketName={"Basket 2"} />
      </section>
  );
}
