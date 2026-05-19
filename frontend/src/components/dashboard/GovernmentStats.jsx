function GovernmentStats() {
  const stats = [
    {
      title: "National Crop Balance",
      value: "91%",
    },
    {
      title: "Import Reduction",
      value: "27%",
    },
    {
      title: "Active Farmers",
      value: "12,450",
    },
    {
      title: "States Covered",
      value: "18",
    },
  ];

  return (
    <div className="grid grid-cols-4 gap-6">
      {stats.map((item, index) => (
        <div
          key={index}
          className="backdrop-blur-xl bg-white/10 border border-white/10 rounded-3xl p-6"
        >
          <h3 className="text-gray-300 text-lg mb-3">
            {item.title}
          </h3>

          <h2 className="text-4xl font-bold text-green-400">
            {item.value}
          </h2>
        </div>
      ))}
    </div>
  );
}

export default GovernmentStats;