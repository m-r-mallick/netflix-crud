import React from "react";
import {
   LineChart,
   Line,
   XAxis,
   CartesianGrid,
   Tooltip,
   ResponsiveContainer,
} from "recharts";
import "./chart.css";

const Chart = ({ title, data, dataKey, grid }) => {
   return (
      <div className="chart">
         <h3 className="chart-title">{title || "Analytics"}</h3>
         <ResponsiveContainer width="100%" aspect={4 / 1}>
            <LineChart
               data={data}
               margin={{
                  top: 5,
                  right: 30,
                  left: 20,
                  bottom: 5,
               }}
            >
               <CartesianGrid strokeDasharray="3 3" />
               <XAxis dataKey="name" stroke="#5550bd" />
               <Line
                  type="monotone"
                  dataKey={dataKey}
                  stroke="#8884d8"
                  activeDot={{ r: 8 }}
               />
               <Tooltip />
               {grid && (
                  <CartesianGrid stroke="#e0dfdf" strokeDasharray="5 5" />
               )}
            </LineChart>
         </ResponsiveContainer>
      </div>
   );
};

export default Chart;
