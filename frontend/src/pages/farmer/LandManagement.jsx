import { useState } from "react";

import DashboardLayout from "../../layouts/DashboardLayout";

function LandManagement() {
  const [lands, setLands] = useState([
    {
      id: 1,
      name: "North Field",
      acres: 2,
      soil: "Black Soil",
      ph: 6.8,
    },
  ]);

  const [formData, setFormData] = useState({
    name: "",
    acres: "",
    soil: "",
    ph: "",
  });

  const handleAddLand = () => {
    if (
      !formData.name ||
      !formData.acres ||
      !formData.soil ||
      !formData.ph
    ) {
      return;
    }

    setLands([
      ...lands,
      {
        id: Date.now(),
        ...formData,
      },
    ]);

    setFormData({
      name: "",
      acres: "",
      soil: "",
      ph: "",
    });
  };

  return (
    <DashboardLayout>
      <div className="grid grid-cols-3 gap-8">
        {/* FORM */}
        <div className="col-span-1 backdrop-blur-xl bg-white/10 border border-white/10 rounded-3xl p-8">
          <h2 className="text-3xl font-bold mb-8">
            Add Land
          </h2>

          <div className="space-y-5">
            <input
              type="text"
              placeholder="Field Name"
              value={formData.name}
              onChange={(e) =>
                setFormData({
                  ...formData,
                  name: e.target.value,
                })
              }
              className="w-full p-4 rounded-2xl bg-white/10 border border-white/10 outline-none"
            />

            <input
              type="number"
              placeholder="Land Area (Acres)"
              value={formData.acres}
              onChange={(e) =>
                setFormData({
                  ...formData,
                  acres: e.target.value,
                })
              }
              className="w-full p-4 rounded-2xl bg-white/10 border border-white/10 outline-none"
            />

            <input
              type="text"
              placeholder="Soil Type"
              value={formData.soil}
              onChange={(e) =>
                setFormData({
                  ...formData,
                  soil: e.target.value,
                })
              }
              className="w-full p-4 rounded-2xl bg-white/10 border border-white/10 outline-none"
            />

            <input
              type="number"
              placeholder="pH Value"
              value={formData.ph}
              onChange={(e) =>
                setFormData({
                  ...formData,
                  ph: e.target.value,
                })
              }
              className="w-full p-4 rounded-2xl bg-white/10 border border-white/10 outline-none"
            />

            <button
              onClick={handleAddLand}
              className="w-full bg-green-600 hover:bg-green-700 transition-all p-4 rounded-2xl font-bold text-lg"
            >
              Add Land
            </button>
          </div>
        </div>

        {/* LAND RECORDS */}
        <div className="col-span-2">
          <div className="grid grid-cols-2 gap-6">
            {lands.map((land) => (
              <div
                key={land.id}
                className="backdrop-blur-xl bg-white/10 border border-white/10 rounded-3xl p-6"
              >
                <h2 className="text-3xl font-bold text-green-400 mb-4">
                  {land.name}
                </h2>

                <div className="space-y-3 text-lg">
                  <p>
                    🌾 Area:
                    <span className="text-green-400 font-bold">
                      {" "} {land.acres} Acres
                    </span>
                  </p>

                  <p>
                    🪨 Soil Type:
                    <span className="text-green-400 font-bold">
                      {" "} {land.soil}
                    </span>
                  </p>

                  <p>
                    ⚗ pH Value:
                    <span className="text-green-400 font-bold">
                      {" "} {land.ph}
                    </span>
                  </p>
                </div>

                <div className="mt-6 h-3 bg-gray-700 rounded-full overflow-hidden">
                  <div className="w-[82%] h-full bg-green-400 rounded-full"></div>
                </div>

                <p className="mt-3 text-gray-300">
                  Soil Health Score: 82%
                </p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </DashboardLayout>
  );
}

export default LandManagement;