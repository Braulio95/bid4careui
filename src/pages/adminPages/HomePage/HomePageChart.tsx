"use client";
import useDemoConfig from "@/constants/mockData/useDemoConfig";
import React from "react";
import { AxisOptions, Chart } from "react-charts";

export const HomePageChart = () => {
  const { data } = useDemoConfig({
    series: 1,
  });

  const primaryAxis = React.useMemo<
    AxisOptions<(typeof data)[number]["data"][number]>
  >(
    () => ({
      getValue: (datum) => datum.primary as unknown as Date,
    }),
    []
  );

  const secondaryAxes = React.useMemo<
    AxisOptions<(typeof data)[number]["data"][number]>[]
  >(
    () => [
      {
        getValue: (datum) => datum.secondary,
      },
    ],
    []
  );
  return (
    <div
      style={{
        width: "100%",

        height: "300px",
      }}
    >
      <Chart
        options={{
          data,
          primaryAxis,
          secondaryAxes,
        }}
      />
    </div>
  );
};
