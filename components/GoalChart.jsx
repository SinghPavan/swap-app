// import React from "react";
// import {
//   Radar,
//   RadarChart,
//   PolarGrid,
//   PolarAngleAxis,
//   PolarRadiusAxis,
//   ResponsiveContainer,
// } from "recharts";

// function GoalsChart() {
//   const data = [
//     {
//       subject: "Health",
//       A: 75,
//       color: "green", // Set a custom color for the Health axis
//     },
//     {
//       subject: "Smarter",
//       A: 80,
//       color: "#33FF57", // Set a custom color for the Smarter axis
//     },
//     {
//       subject: "Wellbeing",
//       A: 60,
//       color: "#5733FF", // Set a custom color for the Wellbeing axis
//     },
//     {
//       subject: "Community",
//       A: 90,
//       color: "#FF3375", // Set a custom color for the Community axis
//     },
//     {
//       subject: "Sustainable",
//       A: 70,
//       color: "#33AAFF", // Set a custom color for the Sustainable axis
//     },
//   ];

//   return (
//     <div className="radar-chart-container">
//       <ResponsiveContainer width="100%" height={300} minWidth={300}>
//         <RadarChart data={data}>
//           <PolarGrid />
//           <PolarAngleAxis dataKey="axis" />
//           {/* <PolarRadiusAxis angle={90} domain={[0, 100]} /> */}
//           {/* <Radar
//             name="Data Point"
//             dataKey="value"
//             stroke="#00C49F"
//             fill="#00C49F"
//             fillOpacity={0.6}
//           /> */}

//           {data.map((entry, index) => (
//             <Radar
//               key={index}
//               name={entry.subject}
//               dataKey="A"
//               stroke={entry.color}
//               fill={entry.color}
//               fillOpacity={1}
//             />
//           ))}
//         </RadarChart>
//       </ResponsiveContainer>
//     </div>
//   );
// }

// export default GoalsChart;
