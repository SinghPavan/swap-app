"use client";
import Image from "next/image";
import React, { useEffect, useState } from "react";
import {
  Radar,
  RadarChart,
  PolarGrid,
  PolarAngleAxis,
  ResponsiveContainer,
} from "recharts";

function GoalsChart({ data }) {
  // Preprocess the data to have the expected dataKey
  // const processedData = data.map((entry) => ({
  //   icon: entry.icon,
  //   ...entry,
  // }));

  function CustomAxisTick({ x, y, payload }) {
    console.log("payload");
    return (
      <g transform={`translate(${x - 20},${y})`}>
        <foreignObject
          className={`foreignObject-${payload.index}`}
          x={-10}
          y={-8}
          width={30}
          height={30}
        >
          <div dangerouslySetInnerHTML={{ __html: payload.value }} />
        </foreignObject>
        {payload.value}
      </g>
    );
  }

  return (
    <div className="radar-chart-container">
      <ResponsiveContainer width="100%" height={300} minWidth={300}>
        <RadarChart data={data}>
          <PolarGrid className="opacity-5" />
          <PolarAngleAxis
            dataKey="icon"
            tick={<CustomAxisTick />}
            className="icon"
          />
          {data?.map((entry, index) => (
            <Radar
              key={index}
              name={entry.subject}
              dataKey="A"
              stroke={entry.color}
              fill={entry.color}
              fillOpacity={0.6}
            />
          ))}
        </RadarChart>
      </ResponsiveContainer>
    </div>
  );
}

export default GoalsChart;
