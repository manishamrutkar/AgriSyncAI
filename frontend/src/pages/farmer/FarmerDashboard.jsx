import { useEffect, useState } from "react";

import DashboardLayout from "../../layouts/DashboardLayout";

import StatsCard from "../../components/dashboard/StatsCard";

import WeatherCard from "../../components/dashboard/WeatherCard";

import AIInsights from "../../components/dashboard/AIInsights";

import SkeletonCard from "../../components/ui/SkeletonCard";

function FarmerDashboard() {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    setTimeout(() => {
      setLoading(false);
    }, 1800);
  }, []);

  return (
    <DashboardLayout>
      {/* HEADER */}
      <div className="mb-10">
        <h1 className="text-5xl font-bold">
          Farmer Dashboard
        </h1>

        <p className="text-gray-300 text-xl mt-3">
          Monitor agricultural intelligence and insights.
        </p>
      </div>

      {/* STATS */}
      <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-6">
        {loading ? (
          <>
            <SkeletonCard />
            <SkeletonCard />
            <SkeletonCard />
          </>
        ) : (
          <>
            <StatsCard
              title="Total Profit"
              value="₹4.2L"
              growth="+18%"
            />

            <StatsCard
              title="AI Accuracy"
              value="91%"
              growth="+6%"
            />

            <StatsCard
              title="Crop Yield"
              value="22 Tons"
              growth="+11%"
            />
          </>
        )}
      </div>

      {/* WEATHER */}
      <div className="mt-10">
        {loading ? (
          <div className="animate-pulse h-[320px] rounded-3xl bg-white/5 border border-white/10"></div>
        ) : (
          <WeatherCard />
        )}
      </div>

      {/* AI INSIGHTS */}
      <div className="mt-10">
        {loading ? (
          <div className="animate-pulse h-[420px] rounded-3xl bg-white/5 border border-white/10"></div>
        ) : (
          <AIInsights />
        )}
      </div>
    </DashboardLayout>
  );
}

export default FarmerDashboard;