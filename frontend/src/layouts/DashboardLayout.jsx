import { useState } from "react";

import Sidebar from "../components/dashboard/Sidebar";

import Navbar from "../components/dashboard/Navbar";

import AIChatbot from "../components/dashboard/AIChatbot";

import { Menu } from "lucide-react";

function DashboardLayout({ children }) {
  const [sidebarOpen, setSidebarOpen] =
    useState(false);

  return (
    <div className="min-h-screen bg-[#08120D] text-white flex">
      {/* DESKTOP SIDEBAR */}
      <div className="hidden lg:block">
        <Sidebar />
      </div>

      {/* MOBILE SIDEBAR */}
      {sidebarOpen && (
        <div className="fixed inset-0 z-50 bg-black/50 lg:hidden">
          <div className="w-[280px] h-full">
            <Sidebar />
          </div>
        </div>
      )}

      <div className="flex-1 lg:ml-[280px] p-4 lg:p-8">
        {/* MOBILE MENU BUTTON */}
        <button
          onClick={() =>
            setSidebarOpen(!sidebarOpen)
          }
          className="lg:hidden mb-4 w-14 h-14 rounded-2xl bg-white/10 flex items-center justify-center"
        >
          <Menu size={28} />
        </button>

        <Navbar />

        <div className="mt-8">
          {children}
        </div>
      </div>

      <AIChatbot />
    </div>
  );
}

export default DashboardLayout;