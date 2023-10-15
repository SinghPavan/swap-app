import React from "react";

const RadarChart2 = ({ data }) => {
  // Find the maximum value among all axes
  const maxValue = Math.max(...data.map((axis) => axis.value));
  const numAxes = data.length;
  const angleIncrement = (2 * Math.PI) / numAxes;

  const radius = 100;
  const centerX = 200;
  const centerY = 200;

  const gradientStops = data.map((axis, index) => {
    const value = axis.value / maxValue;
    const x = value * radius * Math.sin(index * angleIncrement);
    const y = -value * radius * Math.cos(index * angleIncrement);
    return (
      <stop
        key={axis.label}
        offset={`${((x + centerX) / (2 * centerX)) * 100}% ${
          ((-y + centerY) / (2 * centerY)) * 100
        }%`}
        stopColor={getColorForValue(value, axis.color)}
        stopOpacity={value}
      />
    );
  });

  const pathData = data
    .map((axis, index) => {
      const value = axis.value / maxValue;
      const x = value * radius * Math.sin(index * angleIncrement);
      const y = -value * radius * Math.cos(index * angleIncrement);
      return `${x},${y}`;
    })
    .join(" ");

  function getColorForValue(value, color) {
    return color;
  }

  return (
    <svg width={2 * centerX} height={2 * centerY}>
      <defs>
        <radialGradient
          id="radarGradient"
          cx="50%"
          cy="50%"
          r="50%"
          fx="50%"
          fy="50%"
        >
          {gradientStops}
        </radialGradient>
      </defs>
      <g transform={`translate(${centerX}, ${centerY})`}>
        {data.map((axis, index) => {
          const value = axis.value / maxValue;
          const x = value * radius * Math.sin(index * angleIncrement);
          const y = -value * radius * Math.cos(index * angleIncrement);
          return (
            <line
              key={axis.label}
              x1={0}
              y1={0}
              x2={x}
              y2={y}
              stroke={getColorForValue(value, axis.color)}
            />
          );
        })}

        {data.map((axis, index) => {
          const x1 = radius * Math.sin(index * angleIncrement);
          const y1 = -radius * Math.cos(index * angleIncrement);
          const x2 = radius * Math.sin((index + 1) * angleIncrement);
          const y2 = -radius * Math.cos((index + 1) * angleIncrement);

          return (
            <line
              key={axis.label}
              x1={x1}
              y1={y1}
              x2={x2}
              y2={y2}
              stroke="#000"
            />
          );
        })}

        {data.map((axis, index) => {
          const value = axis.value / maxValue;
          const x = value * radius * Math.sin(index * angleIncrement);
          const y = -value * radius * Math.cos(index * angleIncrement);
          return (
            <circle
              key={axis.label}
              cx={x}
              cy={y}
              r={5}
              fill={getColorForValue(value, axis.color)}
            />
          );
        })}

        <polygon
          points={pathData}
          fill="url(#radarGradient)"
          stroke="#000"
          strokeWidth="2"
          strokeLinejoin="round"
          strokeLinecap="round"
          fillRule="evenodd"
        />
      </g>
    </svg>
  );
};

export default RadarChart2;
