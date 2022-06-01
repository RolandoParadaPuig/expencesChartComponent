import { Col } from "antd";
import React from "react";

export const Bars = (props) => {
  const divisor = 7;
  const data = props.data;
  let maxValue = 0;
  for (let i = 0; i < data.length; i++) {
    if (maxValue < data[i].amount) maxValue = data[i].amount;
  }
  const onClick = (e) => {
    const element = e.target.classList;
    const amountElem = document.getElementById(`bar-${e.target.id}`);
    amountElem.classList.toggle("active-amount");
    element.toggle("active");
  };
  return data.map((e) => {
    const index = data.indexOf(e);
    return (
      <Col className="chart--bar">
        <div className="bar--amount active-amount" id={`bar-${index}`}>
          {data[index].amount}
        </div>
        <div
          id={`${index}`}
          className={`bar ${
            data[index].amount == maxValue ? "bar--blue" : "bar--red"
          }`}
          style={{ height: `${data[index].amount / divisor}rem` }}
          onClick={onClick}
        />
        {data[index].day}
      </Col>
    );
  });
};
