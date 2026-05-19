import { useState } from "react";

import DashboardLayout from "../../layouts/DashboardLayout";

import { predictCrop } from "../../services/aiService";

function CropRecommendation() {
  const [loading, setLoading] = useState(false);

  const [result, setResult] = useState(null);

  const [formData, setFormData] = useState({
    nitrogen: "",
    phosphorus: "",
    potassium: "",
    ph: "",
    rainfall: "",
    temperature: "",
  });

  const handlePredict = async () => {
    try {
      setLoading(true);

      const response = await predictCrop({
        nitrogen: Number(formData.nitrogen),
        phosphorus: Number(formData.phosphorus),
        potassium: Number(formData.potassium),
        ph: Number(formData.ph),
        rainfall: Number(formData.rainfall),
        temperature: Number(formData.temperature),
      });

      setResult(response);
    } catch (error) {
      console.log(error);
    } finally {
      setLoading(false);
    }
  };

  return (
    <DashboardLayout>
      <div className="grid grid-cols-2 gap-8">
        {/* FORM */}
        <div className="backdrop-blur-xl bg-white/10 border border-white/10 rounded-3xl p-8">
          <h2 className="text-3xl font-bold mb-8">
            AI Crop Recommendation
          </h2>

          <div className="space-y-5">
            {Object.keys(formData).map((field) => (
              <input
                key={field}
                type="number"
                placeholder={field}
                value={formData[field]}
                onChange={(e) =>
                  setFormData({
                    ...formData,
                    [field]: e.target.value,
                  })
                }
                className="w-full p-4 rounded-2xl bg-white/10 border border-white/10 outline-none capitalize"
              />
            ))}

            <button
              onClick={handlePredict}
              className="w-full bg-green-600 hover:bg-green-700 transition-all p-4 rounded-2xl font-bold text-lg"
            >
              {loading
                ? "Predicting..."
                : "Predict Best Crop"}
            </button>
          </div>
        </div>

        {/* RESULT */}
        <div className="backdrop-blur-xl bg-white/10 border border-white/10 rounded-3xl p-8">
          <h2 className="text-3xl font-bold mb-8">
            AI Prediction Result
          </h2>

          {!result ? (
            <div className="h-[400px] flex items-center justify-center text-gray-400 text-xl">
              Enter soil details to get AI recommendation
            </div>
          ) : (
            <div className="space-y-8">
              <div>
                <p className="text-gray-300 text-lg">
                  Recommended Crop
                </p>

                <h1 className="text-6xl font-bold text-green-400">
                  {result.recommended_crop}
                </h1>
              </div>

              <div className="grid grid-cols-2 gap-6">
                <div className="bg-white/10 rounded-2xl p-6">
                  <p className="text-gray-300">
                    Confidence
                  </p>

                  <h2 className="text-4xl font-bold text-green-400">
                    {result.confidence}
                  </h2>
                </div>

                <div className="bg-white/10 rounded-2xl p-6">
                  <p className="text-gray-300">
                    Estimated Profit
                  </p>

                  <h2 className="text-3xl font-bold text-green-400">
                    {result.estimated_profit}
                  </h2>
                </div>
              </div>

              <div className="bg-white/10 rounded-2xl p-6">
                <p className="text-gray-300 mb-4">
                  AI Confidence Meter
                </p>

                <div className="w-full h-5 bg-gray-700 rounded-full overflow-hidden">
                  <div className="w-[91%] h-full bg-green-400 rounded-full"></div>
                </div>
              </div>
            </div>
          )}
        </div>
      </div>
    </DashboardLayout>
  );
}

export default CropRecommendation;