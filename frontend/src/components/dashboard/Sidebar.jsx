import {
  LayoutDashboard,
  Sprout,
  BarChart3,
  User,
  Settings,
} from "lucide-react";

import { Link } from "react-router-dom";

const menuItems = [
  {
    title: "Dashboard",
    icon: LayoutDashboard,
  },
  {
    title: "Crop Analysis",
    icon: Sprout,
  },
  {
    title: "Analytics",
    icon: BarChart3,
  },
  {
    title: "Profile",
    icon: User,
  },
  {
    title: "Settings",
    icon: Settings,
  },
];

function Sidebar() {
  return (
    <div className="w-[280px] h-screen backdrop-blur-xl bg-[#0b1a13]/95 border-r border-white/10 p-6 fixed left-0 top-0 z-50">
      <h1 className="text-3xl font-bold text-green-400 mb-12">🌾 AgriSync</h1>

      <div className="space-y-4">
        {menuItems.map((item, index) => {
          const Icon = item.icon;

          return (
            <Link
              to={
                item.title === "Dashboard"
                  ? "/farmer/dashboard"
                  : item.title === "Crop Analysis"
                    ? "/farmer/recommendation"
                    : item.title === "Analytics"
                      ? "/farmer/analytics"
                      : "#"
              }
              key={index}
            >
              <div className="flex items-center gap-4 p-4 rounded-2xl cursor-pointer hover:bg-white/10 transition-all">
                <Icon size={22} />

                <span className="text-lg">{item.title}</span>
              </div>
            </Link>
          );
        })}
      </div>
    </div>
  );
}

export default Sidebar;
