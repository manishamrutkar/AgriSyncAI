import {
  Brain,
  AlertTriangle,
  Leaf,
  FlaskConical,
} from "lucide-react";

function AIInsights() {
  return (
    <div className="backdrop-blur-xl bg-white/10 border border-white/10 rounded-3xl p-8">
      <div className="flex items-center gap-4 mb-8">
        <Brain size={40} className="text-green-400" />

        <div>
          <h2 className="text-3xl font-bold">
            AI Agricultural Insights
          </h2>

          <p className="text-gray-300">
            Smart recommendations powered by AI
          </p>
        </div>
      </div>

      <div className="grid grid-cols-2 gap-6">
        {/* SOIL HEALTH */}
        <div className="bg-white/10 rounded-2xl p-6">
          <div className="flex items-center gap-3 mb-4">
            <Leaf className="text-green-400" />

            <h3 className="text-2xl font-bold">
              Soil Health
            </h3>
          </div>

          <h1 className="text-5xl font-bold text-green-400 mb-3">
            82%
          </h1>

          <p className="text-gray-300">
            Soil fertility is good for soybean and wheat cultivation.
          </p>
        </div>

        {/* FERTILIZER */}
        <div className="bg-white/10 rounded-2xl p-6">
          <div className="flex items-center gap-3 mb-4">
            <FlaskConical className="text-yellow-400" />

            <h3 className="text-2xl font-bold">
              Fertilizer Advice
            </h3>
          </div>

          <p className="text-lg text-gray-300">
            Recommended:
          </p>

          <h2 className="text-3xl font-bold text-yellow-400 mt-3">
            Nitrogen Boost
          </h2>

          <p className="text-gray-300 mt-3">
            Increase nitrogen content by 10–15%.
          </p>
        </div>

        {/* ALERTS */}
        <div className="bg-white/10 rounded-2xl p-6">
          <div className="flex items-center gap-3 mb-4">
            <AlertTriangle className="text-red-400" />

            <h3 className="text-2xl font-bold">
              AI Alerts
            </h3>
          </div>

          <div className="space-y-3 text-lg">
            <p>
              ⚠ Low rainfall expected next month
            </p>

            <p>
              ⚠ Water conservation recommended
            </p>
          </div>
        </div>

        {/* SUSTAINABILITY */}
        <div className="bg-white/10 rounded-2xl p-6">
          <div className="flex items-center gap-3 mb-4">
            <Brain className="text-cyan-400" />

            <h3 className="text-2xl font-bold">
              Sustainability Score
            </h3>
          </div>

          <h1 className="text-5xl font-bold text-cyan-400 mb-3">
            91%
          </h1>

          <p className="text-gray-300">
            Crop planning is highly sustainable and profitable.
          </p>
        </div>
      </div>
    </div>
  );
}

export default AIInsights;