"use client";
import { RootState } from "@/store/store";
import React from "react";
import { useSelector } from "react-redux";
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
import { User } from "../data-table";

interface Visitor {
  id: string;
  date: string;
  count: number;
}

const LineChart = () => {
  const { allUsers } = useSelector((state: RootState) => state.user);
  const { allVistors } = useSelector((state: RootState) => state.vistor);

  const months = [
    "Jan",
    "Feb",
    "Mar",
    "Apr",
    "May",
    "Jun",
    "Jul",
    "Aug",
    "Sep",
    "Oct",
    "Nov",
    "Dec",
  ];

  const currentYear = new Date().getFullYear();
  const currentMonth = new Date().getMonth(); // 0 = Jan, 11 = Dec

  // Only include months up to the current month
  const data = months.slice(0, currentMonth + 1).map((month, idx) => {
    // Count users created in this month
    const usersCount =
      allUsers?.filter(
        (u: User) =>
          u.createdAt && 
          new Date(u.createdAt).getFullYear() === currentYear &&
          new Date(u.createdAt).getMonth() === idx
      ).length || 0;

    // Sum all visitor counts in this month
    const totalVisitors =
      allVistors
        ?.filter(
          (v: Visitor) =>
            new Date(v.date).getFullYear() === currentYear &&
            new Date(v.date).getMonth() === idx
        )
        .reduce((sum, v: Visitor) => sum + (v.count || 0), 0) || 0;

    return { name: month, users: usersCount, vistors: totalVisitors };
  });

  return (
    <div className="w-full h-[400px] md:h-[450px] lg:h-[500px]">
      <ResponsiveContainer width="100%" height="100%">
        <RechartsLineChart
          data={data}
          margin={{ top: 20, right: 30, left: 0, bottom: 10 }}
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
            strokeWidth={2}
            activeDot={{ r: 8 }}
            name="Visits"
          />
          <Line
            type="monotone"
            dataKey="users"
            stroke="#82ca9d"
            strokeWidth={2}
            name="Users"
          />
        </RechartsLineChart>
      </ResponsiveContainer>
    </div>
  );
};

export default LineChart;
