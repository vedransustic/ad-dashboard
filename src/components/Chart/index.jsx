import React from "react";
import "./index.scss";
import {
  BarChart,
  Bar,
  XAxis,
  CartesianGrid,
  Tooltip,
  Legend,
  ResponsiveContainer,
  YAxis,
} from "recharts";
import { chartData } from "../../constant";
import Title from "../Title";

const Chart = () => {
  return (
    <div className="chart">
      <Title className="chart-title" text="Last 6 months" />
      <div className="chart-container">
        <ResponsiveContainer width="100%" aspect={2 / 1}>
          <BarChart
            data={chartData}
            margin={{
              top: 20,
              right: 30,
              left: 20,
              bottom: 5,
            }}
          >
            <YAxis dataKey="income" />
            <XAxis dataKey="name" color="gray" />
            <CartesianGrid strokeDasharray="6 6" className="charset-grid" />
            <Tooltip />
            <Legend />
            <Bar dataKey="income" stackId="a" fill="#8884d8" />
            <Bar dataKey="netRevenue" stackId="a" fill="#82ca9d" />
          </BarChart>
        </ResponsiveContainer>
      </div>
    </div>
  );
};

export default Chart;
