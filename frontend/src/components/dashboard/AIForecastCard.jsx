import { TrendingUp } from "lucide-react";

function AIForecastCard() {
  return (
    <div className="backdrop-blur-xl bg-white/10 border border-white/10 rounded-3xl p-8">
      <div className="flex items-center gap-4 mb-6">
        <TrendingUp size={40} className="text-green-400" />

        <div>
          <h2 className="text-3xl font-bold">
            AI Forecast Insights
          </h2>

          <p className="text-gray-300">
            Future profitability predictions
          </p>
        </div>
      </div>

      <div className="space-y-6">
        <div className="bg-white/10 rounded-2xl p-5">
          <p className="text-gray-300">
            Best Predicted Crop
          </p>

          <h2 className="text-4xl font-bold text-green-400 mt-2">
            Soybean
          </h2>
        </div>

        <div className="bg-white/10 rounded-2xl p-5">
          <p className="text-gray-300">
            Expected Annual Revenue
          </p>

          <h2 className="text-5xl font-bold text-green-400 mt-2">
            ₹4.2L
          </h2>
        </div>

        <div className="bg-white/10 rounded-2xl p-5">
          <p className="text-gray-300">
            Growth Prediction
          </p>

          <h2 className="text-4xl font-bold text-cyan-400 mt-2">
            +28%
          </h2>
        </div>
      </div>
    </div>
  );
}

export default AIForecastCard;