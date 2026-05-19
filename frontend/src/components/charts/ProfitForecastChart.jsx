import {
  AreaChart,
  Area,
  XAxis,
  YAxis,
  Tooltip,
  ResponsiveContainer,
  CartesianGrid,
} from "recharts";

const data = [
  { month: "Jan", profit: 20000 },
  { month: "Feb", profit: 35000 },
  { month: "Mar", profit: 28000 },
  { month: "Apr", profit: 50000 },
  { month: "May", profit: 47000 },
  { month: "Jun", profit: 65000 },
];

function ProfitForecastChart() {
  return (
    <div className="backdrop-blur-xl bg-white/10 border border-white/10 rounded-3xl p-6 h-[420px]">
      <h2 className="text-3xl font-bold mb-6">
        Profit Forecast
      </h2>

      <ResponsiveContainer width="100%" height="85%">
        <AreaChart data={data}>
          <defs>
            <linearGradient id="profit" x1="0" y1="0" x2="0" y2="1">
              <stop
                offset="5%"
                stopColor="#4ADE80"
                stopOpacity={0.8}
              />

              <stop
                offset="95%"
                stopColor="#4ADE80"
                stopOpacity={0}
              />
            </linearGradient>
          </defs>

          <CartesianGrid strokeDasharray="3 3" stroke="#ffffff20" />

          <XAxis dataKey="month" stroke="#ccc" />

          <YAxis stroke="#ccc" />

          <Tooltip />

          <Area
            type="monotone"
            dataKey="profit"
            stroke="#4ADE80"
            fillOpacity={1}
            fill="url(#profit)"
          />
        </AreaChart>
      </ResponsiveContainer>
    </div>
  );
}

export default ProfitForecastChart;