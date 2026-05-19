import { Bell, Search } from "lucide-react";

function Navbar() {
  return (
    <div className="w-full min-h-[90px] backdrop-blur-xl bg-white/10 border border-white/10 rounded-3xl px-4 lg:px-8 py-4 flex flex-col lg:flex-row items-start lg:items-center justify-between gap-4">
      <div>
        <h2 className="text-3xl font-bold">
          Dashboard
        </h2>

        <p className="text-gray-300">
          Smart Agricultural Insights
        </p>
      </div>

      <div className="flex items-center gap-4">
        <div className="flex items-center gap-3 bg-white/10 px-4 py-3 rounded-2xl">
          <Search size={20} />
          <input
            type="text"
            placeholder="Search..."
            className="bg-transparent outline-none"
          />
        </div>

        <div className="p-4 bg-white/10 rounded-2xl cursor-pointer">
          <Bell size={22} />
        </div>
      </div>
    </div>
  );
}

export default Navbar;