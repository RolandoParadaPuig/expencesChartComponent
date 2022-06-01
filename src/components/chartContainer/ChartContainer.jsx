import { Col, Row } from "antd";
import React from "react";
import { ChartComponent } from "../chartComponent/ChartComponent";
import "./chartContainer.css";

export const ChartContainer = () => {
  return (
    <aside className={"container"}>
      <section className={"chart--container"}>
        <ChartComponent />
      </section>
    </aside>
  );
};
