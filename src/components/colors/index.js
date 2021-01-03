import React from "react";
import "./style.css";

const Color = () => {
  React.useEffect(() => {
    let colorsLi = document.querySelectorAll(".colors-list li");

    colorsLi.forEach((li) => {
      //loop on list Items
      li.addEventListener("click", (e) => {
        console.log(e.target.dataset.color);
        //select color on root
        document.documentElement.style.setProperty(
          "--main--color",
          e.target.dataset.color
        );

        let lilis = document.querySelectorAll("[data-color]");

        for (let i = 0; i < lilis.length; i++) {
          lilis[i].removeAttribute("class");
        }

        document
          .querySelector(`[data-color="${e.target.dataset.color}"]`)
          .setAttribute("class", "active");
      });
    });
  });
  //swithch colors

  return (
    <div className="option-box">
      <h4>Can You Select Prefeer Color </h4>
      <ul className="colors-list">
        <li data-color="#002f75"></li>
        <li data-color="#3e9e86"></li>
        <li data-color="#033513"></li>
        <li data-color="#676776"></li>
      </ul>
    </div>
  );
};
export default Color;
