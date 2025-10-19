"use client";
import React from "react";
import {
  LineChart as RechartsLineChart,
  Line,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  Legend,
  ResponsiveContainer,
} from "recharts";

const LineChart = () => {
  const data = [
    { name: "Jan ", users: 4000, vistors: 2400, amt: 2400 },
    { name: "Feb ", users: 3000, vistors: 1398, amt: 2210 },
    { name: "Mar ", users: 2000, vistors: 9800, amt: 2290 },
    { name: "Apr", users: 2780, vistors: 3908, amt: 2000 },
    { name: "May ", users: 1890, vistors: 4800, amt: 2181 },
    { name: "Jun ", users: 2390, vistors: 3800, amt: 2500 },
    { name: "Jul ", users: 3490, vistors: 4300, amt: 2100 },
    { name: "Aug ", users: 3000, vistors: 1398, amt: 2210 },
    { name: "Sep", users: 2780, vistors: 3908, amt: 2000 },
    { name: "Oct ", users: 1890, vistors: 4800, amt: 2181 },
    { name: "Nov ", users: 2390, vistors: 3800, amt: 2500 },
    { name: "Dec ", users: 3490, vistors: 4300, amt: 2100 },
  ];

  return (
    <div style={{ width: "100%", height: 400 }}>
      <ResponsiveContainer>
        <RechartsLineChart
          data={data}
          margin={{
            top: 5,
            right: 20,
            left: 10,
            bottom: 5,
          }}
        >
          <CartesianGrid strokeDasharray="3 3" />
          <XAxis dataKey="name" />
          <YAxis />
          <Tooltip />
          <Legend />
          <Line
            type="monotone"
            dataKey="vistors"
            stroke="#8884d8"
            activeDot={{ r: 8 }}
          />
          <Line type="monotone" dataKey="users" stroke="#82ca9d" />
        </RechartsLineChart>
      </ResponsiveContainer>
    </div>
  );
};

export default LineChart;
