import React from "react";
import { ChartBar } from "./ChartBar";
import "./chartBody.css";
import { ChartFooter } from "./ChartFooter";
export const ChartBody = () => {
  return (
    <div className={"chart--body"}>
      <div>
        <h2 className="chart--body--title">Spending - Last 7 days</h2>
      </div>
      <div className={"chart--body--content"}></div>
      <ChartBar />
      <ChartFooter />
    </div>
  );
};
