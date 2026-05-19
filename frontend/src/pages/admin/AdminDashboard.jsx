import DashboardLayout from "../../layouts/DashboardLayout";

import GovernmentStats from "../../components/dashboard/GovernmentStats";

//import IndiaHeatmap from "../../components/maps/IndiaHeatmap";

function AdminDashboard() {
  return (
    <DashboardLayout>
      <GovernmentStats />

      

      <div className="grid grid-cols-1 xl:grid-cols-2 gap-6 mt-10">
        <div className="backdrop-blur-xl bg-white/10 border border-white/10 rounded-3xl p-8">
          <h2 className="text-3xl font-bold mb-4">
            Crop Shortage Alerts
          </h2>

          <div className="space-y-4 text-lg">
            <p>
              🌾 Wheat shortage predicted in Rajasthan
            </p>

            <p>
              🫘 Pulses demand increasing in Maharashtra
            </p>

            <p>
              🌽 Maize surplus detected in Karnataka
            </p>
          </div>
        </div>

        <div className="backdrop-blur-xl bg-white/10 border border-white/10 rounded-3xl p-8">
          <h2 className="text-3xl font-bold mb-4">
            AI National Insights
          </h2>

          <div className="space-y-4 text-lg">
            <p>
              Estimated import reduction:
              <span className="text-green-400 font-bold">
                {" "}27%
              </span>
            </p>

            <p>
              Crop diversification improved by:
              <span className="text-green-400 font-bold">
                {" "}34%
              </span>
            </p>

            <p>
              AI prediction confidence:
              <span className="text-green-400 font-bold">
                {" "}89%
              </span>
            </p>
          </div>
        </div>
      </div>
    </DashboardLayout>
  );
}

export default AdminDashboard;