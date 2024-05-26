
"use client"
import {
  ResponsiveContainer,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  Legend,
  Line,
  LineChart,
} from "recharts";
import {  InvoiceEnergia } from "../_interface/inovice-dashboard-interface";
interface BarChartsProps {
  energias: InvoiceEnergia[];
}
const BarChart = ({ energias }: BarChartsProps) => {
 

  return (
    <ResponsiveContainer width={"100%"} height={350}>
      <LineChart
        width={500}
        height={300}
        data={energias}
        margin={{
          top: 5,
          right: 30,
          left: 20,
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
          dataKey="kwhenergejetada"
          name="Injetada"
          stroke="#ff00ff"
        />
        <Line
          type="monotone"
          dataKey="kwhenergiaICMS"
          name="ICMS"
          stroke="#8884d8"
        />
        <Line
          type="monotone"
          dataKey="kwhenergia"
          name="Energia"
          stroke="#fd0000"
        />
        <Line type="monotone" dataKey="kwhgdi" name="GDI" stroke="#000000  " />
      </LineChart>
    </ResponsiveContainer>
  );
};

export default BarChart;
