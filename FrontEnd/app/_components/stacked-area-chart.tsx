"use client"
import {
  ResponsiveContainer,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  Area,
  AreaChart,
  Legend,

} from "recharts";
import { MonetaryValues } from "../_interface/inovice-dashboard-interface";

interface BarChartsProps {
  monetaryValues: MonetaryValues[];
}
const StackedAreaChart  = ({ monetaryValues }: BarChartsProps) => {
 

  return (
    <ResponsiveContainer width={"100%"} height={350}>
      <AreaChart
          width={500}
          height={400}
          data={monetaryValues}
          margin={{
            top: 10,
            right: 30,
            left: 0,
            bottom: 0,
          }}
        >
          <CartesianGrid strokeDasharray="3 3" />
          <XAxis dataKey="name" />
          <YAxis />
          <Tooltip />
          <Legend />
          <Area type="monotone" dataKey="energyEjetadaPrice" name="R$ Injetada" stackId="1" stroke="#ff00ff" fill="#ff00ff" />
          <Area type="monotone" dataKey="energyICMSPrice" name="R$ ICMS" stackId="1" stroke="#8884d8" fill="#8884d8" />
          <Area type="monotone" dataKey="eenergyPrice" name="R$ Energia" stackId="1" stroke="#fd0000" fill="#fd0000" />
          <Area type="monotone" dataKey="gdiPrice" name="R$ GDI" stackId="1" stroke="#000000" fill="#000000" />

        </AreaChart>
    </ResponsiveContainer>
  );
};

export default StackedAreaChart;
