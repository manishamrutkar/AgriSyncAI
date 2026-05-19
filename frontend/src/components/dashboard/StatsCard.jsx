import { motion } from "framer-motion";

function StatsCard({ title, value, growth }) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      animate={{ opacity: 1, y: 0 }}
      whileHover={{
        scale: 1.03,
      }}
      transition={{ duration: 0.5 }}
      className="backdrop-blur-xl bg-white/10 border border-white/10 rounded-3xl p-6 shadow-xl"
    >
      <h3 className="text-gray-300 text-lg mb-3">
        {title}
      </h3>

      <div className="flex items-end justify-between">
        <h2 className="text-4xl font-bold">
          {value}
        </h2>

        <span className="text-green-400 text-lg">
          {growth}
        </span>
      </div>
    </motion.div>
  );
}

export default StatsCard;