import DashboardLayout from "../../layouts/DashboardLayout";

import ProfitForecastChart from "../../components/charts/ProfitForecastChart";

import AIForecastCard from "../../components/dashboard/AIForecastCard";

function Analytics() {
  return (
    <DashboardLayout>
      <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-6">
        <div className="backdrop-blur-xl bg-white/10 border border-white/10 rounded-3xl p-6">
          <p className="text-gray-300 text-lg">
            Annual Profit
          </p>

          <h1 className="text-5xl font-bold text-green-400 mt-4">
            ₹4.2L
          </h1>
        </div>

        <div className="backdrop-blur-xl bg-white/10 border border-white/10 rounded-3xl p-6">
          <p className="text-gray-300 text-lg">
            AI Confidence
          </p>

          <h1 className="text-5xl font-bold text-cyan-400 mt-4">
            91%
          </h1>
        </div>

        <div className="backdrop-blur-xl bg-white/10 border border-white/10 rounded-3xl p-6">
          <p className="text-gray-300 text-lg">
            Sustainability
          </p>

          <h1 className="text-5xl font-bold text-yellow-400 mt-4">
            88%
          </h1>
        </div>
      </div>

      <div className="grid grid-cols-1 xl:grid-cols-2 gap-6 mt-10">
        <ProfitForecastChart />

        <AIForecastCard />
      </div>
    </DashboardLayout>
  );
}

export default Analytics;