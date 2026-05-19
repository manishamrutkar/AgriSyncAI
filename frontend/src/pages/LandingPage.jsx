import {
  Leaf,
  Brain,
  BarChart3,
  Sprout,
  ArrowRight,
  ShieldCheck,
  CloudRain,
  Bot,
} from "lucide-react";

import { Link } from "react-router-dom";

import { motion } from "framer-motion";

function LandingPage() {
  const features = [
    {
      icon: Brain,
      title: "AI Crop Prediction",
      desc: "Smart AI recommendations based on soil, rainfall, and climate intelligence.",
    },
    {
      icon: BarChart3,
      title: "Advanced Analytics",
      desc: "Powerful dashboards with forecasting and profitability insights.",
    },
    {
      icon: Sprout,
      title: "Soil Intelligence",
      desc: "Track soil health, pH levels, and sustainability metrics.",
    },
    {
      icon: CloudRain,
      title: "Weather Insights",
      desc: "Real-time climate monitoring and rainfall analytics.",
    },
    {
      icon: Bot,
      title: "AI Farming Assistant",
      desc: "Get intelligent farming guidance through AI-powered chat support.",
    },
    {
      icon: ShieldCheck,
      title: "Government Planning",
      desc: "Balanced crop allocation to reduce imports and improve national yield.",
    },
  ];

  return (
    <div className="min-h-screen bg-[#08120D] text-white overflow-hidden">
      {/* ================= NAVBAR ================= */}
      <nav className="flex items-center justify-between px-6 lg:px-16 py-6 border-b border-white/10 relative z-50">
        <div className="flex items-center gap-3">
          <Leaf className="text-green-400" size={35} />

          <h1 className="text-3xl font-bold">
            AgriSync AI
          </h1>
        </div>

        <div className="hidden md:flex items-center gap-8 text-lg">
          <a
            href="#features"
            className="hover:text-green-400 transition-all"
          >
            Features
          </a>

          <a
            href="#how"
            className="hover:text-green-400 transition-all"
          >
            How It Works
          </a>

          <a
            href="#stats"
            className="hover:text-green-400 transition-all"
          >
            Statistics
          </a>
        </div>

        <Link
          to="/login"
          className="bg-green-500 hover:bg-green-600 transition-all px-6 py-3 rounded-2xl font-bold"
        >
          Get Started
        </Link>
      </nav>

      {/* ================= HERO ================= */}
      <section className="relative px-6 lg:px-16 py-24 lg:py-36">
        {/* Animated Glow */}
        <motion.div
          animate={{
            scale: [1, 1.1, 1],
            opacity: [0.4, 0.7, 0.4],
          }}
          transition={{
            duration: 6,
            repeat: Infinity,
          }}
          className="absolute top-0 left-1/2 -translate-x-1/2 w-[700px] h-[700px] bg-green-500/20 blur-[180px] rounded-full"
        />

        <motion.div
          initial={{ opacity: 0, y: 60 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1 }}
          className="relative z-10 max-w-5xl"
        >
          <div className="inline-flex items-center gap-3 bg-white/10 border border-white/10 px-6 py-3 rounded-full mb-8">
            <Brain className="text-green-400" />

            <span>
              AI-Powered Agricultural Intelligence
            </span>
          </div>

          <h1 className="text-5xl md:text-7xl font-bold leading-tight">
            Smart Farming For
            <span className="text-green-400">
              {" "}India's Future
            </span>
          </h1>

          <p className="text-xl text-gray-300 mt-8 max-w-3xl leading-relaxed">
            AgriSync AI helps farmers maximize profit,
            optimize crop planning, improve sustainability,
            and enable intelligent agricultural decisions
            using artificial intelligence and analytics.
          </p>

          <div className="flex flex-col sm:flex-row gap-6 mt-12">
            <Link
              to="/login"
              className="bg-green-500 hover:bg-green-600 transition-all px-8 py-5 rounded-2xl font-bold text-xl flex items-center justify-center gap-3"
            >
              Launch Platform
              <ArrowRight />
            </Link>

            <button className="border border-white/10 bg-white/10 hover:bg-white/20 transition-all px-8 py-5 rounded-2xl text-xl">
              Watch Demo
            </button>
          </div>
        </motion.div>
      </section>

      {/* ================= STATS ================= */}
      <section
        id="stats"
        className="px-6 lg:px-16 py-20"
      >
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="backdrop-blur-xl bg-white/10 border border-white/10 rounded-3xl p-10"
          >
            <h2 className="text-6xl font-bold text-green-400">
              91%
            </h2>

            <p className="text-xl text-gray-300 mt-4">
              AI Prediction Accuracy
            </p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="backdrop-blur-xl bg-white/10 border border-white/10 rounded-3xl p-10"
          >
            <h2 className="text-6xl font-bold text-green-400">
              27%
            </h2>

            <p className="text-xl text-gray-300 mt-4">
              Import Reduction Potential
            </p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 1 }}
            className="backdrop-blur-xl bg-white/10 border border-white/10 rounded-3xl p-10"
          >
            <h2 className="text-6xl font-bold text-green-400">
              ₹4.2L
            </h2>

            <p className="text-xl text-gray-300 mt-4">
              Average Annual Profit Forecast
            </p>
          </motion.div>
        </div>
      </section>

      {/* ================= FEATURES ================= */}
      <section
        id="features"
        className="px-6 lg:px-16 py-24"
      >
        <div className="text-center mb-20">
          <h2 className="text-5xl font-bold">
            Intelligent Agricultural Platform
          </h2>

          <p className="text-gray-300 text-xl mt-6">
            Built using AI, analytics, microservices,
            and modern cloud architecture.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {features.map((feature, index) => {
            const Icon = feature.icon;

            return (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 40 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{
                  duration: 0.6,
                  delay: index * 0.1,
                }}
                whileHover={{
                  scale: 1.05,
                  rotate: 1,
                }}
                className="backdrop-blur-xl bg-white/10 border border-white/10 rounded-3xl p-10"
              >
                <div className="w-20 h-20 rounded-3xl bg-green-500/20 flex items-center justify-center mb-8">
                  <Icon
                    size={40}
                    className="text-green-400"
                  />
                </div>

                <h3 className="text-3xl font-bold mb-5">
                  {feature.title}
                </h3>

                <p className="text-gray-300 text-lg leading-relaxed">
                  {feature.desc}
                </p>
              </motion.div>
            );
          })}
        </div>
      </section>

      {/* ================= HOW IT WORKS ================= */}
      <section
        id="how"
        className="px-6 lg:px-16 py-24"
      >
        <div className="text-center mb-20">
          <h2 className="text-5xl font-bold">
            How AgriSync AI Works
          </h2>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {[
            "Farmer enters land and soil data into the platform.",
            "AI analyzes weather, soil, and climate conditions.",
            "Platform recommends profitable and sustainable crops.",
          ].map((step, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{
                duration: 0.6,
                delay: index * 0.2,
              }}
              className="backdrop-blur-xl bg-white/10 border border-white/10 rounded-3xl p-10"
            >
              <div className="w-16 h-16 rounded-full bg-green-500 flex items-center justify-center text-3xl font-bold mb-8">
                {index + 1}
              </div>

              <p className="text-2xl leading-relaxed">
                {step}
              </p>
            </motion.div>
          ))}
        </div>
      </section>

      {/* ================= CTA ================= */}
      <section className="px-6 lg:px-16 py-24">
        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          whileInView={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8 }}
          className="backdrop-blur-xl bg-gradient-to-r from-green-500/20 to-green-700/20 border border-white/10 rounded-[40px] p-12 text-center"
        >
          <h2 className="text-5xl font-bold">
            Revolutionize Agriculture With AI
          </h2>

          <p className="text-xl text-gray-300 mt-6 max-w-3xl mx-auto">
            Join the future of smart farming with intelligent
            analytics, AI crop prediction, and sustainable
            agricultural planning.
          </p>

          <Link
            to="/login"
            className="inline-flex items-center gap-3 mt-10 bg-green-500 hover:bg-green-600 transition-all px-8 py-5 rounded-2xl font-bold text-xl"
          >
            Start Using AgriSync AI
            <ArrowRight />
          </Link>
        </motion.div>
      </section>

      {/* ================= FOOTER ================= */}
      <footer className="border-t border-white/10 px-6 lg:px-16 py-10 text-center text-gray-400">
        © 2026 AgriSync AI — Smart Agriculture Platform
      </footer>
    </div>
  );
}

export default LandingPage;