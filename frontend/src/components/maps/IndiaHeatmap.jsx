import {
  ComposableMap,
  Geographies,
  Geography,
} from "react-simple-maps";

const geoUrl =
  "https://raw.githubusercontent.com/deldersveld/topojson/master/countries/india/india-states.json";

const stateData = {
  Maharashtra: 85,
  Gujarat: 70,
  Karnataka: 60,
  Punjab: 92,
  Rajasthan: 40,
};

function getColor(value) {
  if (value > 80) return "#22C55E";
  if (value > 60) return "#4ADE80";
  if (value > 40) return "#86EFAC";
  return "#DCFCE7";
}

function IndiaHeatmap() {
  return (
    <div className="backdrop-blur-xl bg-white/10 border border-white/10 rounded-3xl p-6">
      <h2 className="text-3xl font-bold mb-6">
        National Crop Balance Heatmap
      </h2>

      <ComposableMap
        projection="geoMercator"
        projectionConfig={{
          scale: 1000,
          center: [82, 22],
        }}
        style={{
          width: "100%",
          height: "500px",
        }}
      >
        <Geographies geography={geoUrl}>
          {({ geographies }) =>
            geographies.map((geo) => {
              const stateName =
                geo.properties.ST_NM;

              const value =
                stateData[stateName] || 20;

              return (
                <Geography
                  key={geo.rsmKey}
                  geography={geo}
                  fill={getColor(value)}
                  stroke="#08120D"
                  style={{
                    default: {
                      outline: "none",
                    },
                    hover: {
                      fill: "#4ADE80",
                      outline: "none",
                    },
                    pressed: {
                      outline: "none",
                    },
                  }}
                />
              );
            })
          }
        </Geographies>
      </ComposableMap>
    </div>
  );
}

export default IndiaHeatmap;