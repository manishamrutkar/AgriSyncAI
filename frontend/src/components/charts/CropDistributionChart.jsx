import {
  PieChart,
  Pie,
  Tooltip,
  Cell,
  ResponsiveContainer,
} from "recharts";

const data = [
  { name: "Soybean", value: 40 },
  { name: "Wheat", value: 30 },
  { name: "Cotton", value: 20 },
  { name: "Rice", value: 10 },
];

const COLORS = [
  "#4ADE80",
  "#22C55E",
  "#16A34A",
  "#15803D",
];

function CropDistributionChart() {
  return (
    <div className="backdrop-blur-xl bg-white/10 border border-white/10 rounded-3xl p-6 h-[400px]">
      <h2 className="text-2xl font-bold mb-6">
        Crop Distribution
      </h2>

      <ResponsiveContainer width="100%" height="85%">
        <PieChart>
          <Pie
            data={data}
            dataKey="value"
            outerRadius={130}
            label
          >
            {data.map((entry, index) => (
              <Cell
                key={index}
                fill={COLORS[index % COLORS.length]}
              />
            ))}
          </Pie>

          <Tooltip />
        </PieChart>
      </ResponsiveContainer>
    </div>
  );
}

export default CropDistributionChart;