import {
  LineChart,
  Line,
  XAxis,
  YAxis,
  Tooltip,
  ResponsiveContainer,
  CartesianGrid,
} from "recharts";

const data = [
  { month: "Jan", yield: 40 },
  { month: "Feb", yield: 55 },
  { month: "Mar", yield: 48 },
  { month: "Apr", yield: 70 },
  { month: "May", yield: 66 },
  { month: "Jun", yield: 82 },
];

function YieldChart() {
  return (
    <div className="backdrop-blur-xl bg-white/10 border border-white/10 rounded-3xl p-6 h-[400px]">
      <h2 className="text-2xl font-bold mb-6">
        Yield Analytics
      </h2>

      <ResponsiveContainer width="100%" height="85%">
        <LineChart data={data}>
          <CartesianGrid strokeDasharray="3 3" stroke="#ffffff20" />

          <XAxis dataKey="month" stroke="#ccc" />

          <YAxis stroke="#ccc" />

          <Tooltip />

          <Line
            type="monotone"
            dataKey="yield"
            stroke="#4ADE80"
            strokeWidth={4}
          />
        </LineChart>
      </ResponsiveContainer>
    </div>
  );
}

export default YieldChart;