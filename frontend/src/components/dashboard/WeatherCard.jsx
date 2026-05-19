import { useEffect, useState } from "react";

import {
  CloudRain,
  Sun,
  Droplets,
  Wind,
} from "lucide-react";

import { getWeatherData } from "../../services/weatherService";

function WeatherCard() {
  const [weather, setWeather] = useState(null);

  useEffect(() => {
    const fetchWeather = async () => {
      try {
        const data = await getWeatherData();

        setWeather(data);
      } catch (error) {
        console.log(error);
      }
    };

    fetchWeather();
  }, []);

  if (!weather) {
    return (
      <div className="animate-pulse h-[320px] rounded-3xl bg-white/5 border border-white/10"></div>
    );
  }

  return (
    <div className="backdrop-blur-xl bg-white/10 border border-white/10 rounded-3xl p-8">
      <div className="flex flex-col lg:flex-row items-start lg:items-center justify-between gap-8">
        <div>
          <p className="text-gray-300 text-lg">
            Current Weather
          </p>

          <h1 className="text-6xl font-bold mt-4">
            {Math.round(weather.main.temp)}°C
          </h1>

          <p className="text-green-400 text-xl mt-2">
            {weather.name}
          </p>
        </div>

        <Sun size={90} className="text-yellow-400" />
      </div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mt-10">
        {/* RAINFALL */}
        <div className="bg-white/10 rounded-2xl p-4">
          <CloudRain className="mb-3 text-blue-400" />

          <p className="text-gray-300">
            Humidity
          </p>

          <h2 className="text-2xl font-bold">
            {weather.main.humidity}%
          </h2>
        </div>

        {/* HUMIDITY */}
        <div className="bg-white/10 rounded-2xl p-4">
          <Droplets className="mb-3 text-cyan-400" />

          <p className="text-gray-300">
            Pressure
          </p>

          <h2 className="text-2xl font-bold">
            {weather.main.pressure}
          </h2>
        </div>

        {/* WIND */}
        <div className="bg-white/10 rounded-2xl p-4">
          <Wind className="mb-3 text-gray-300" />

          <p className="text-gray-300">
            Wind Speed
          </p>

          <h2 className="text-2xl font-bold">
            {weather.wind.speed} km/h
          </h2>
        </div>
      </div>
    </div>
  );
}

export default WeatherCard;