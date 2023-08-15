import SideBar from "../_components/Sidebar";
import Topbar from "../_components/Topbar";
import { useState } from "react";
import { Outlet } from "react-router-dom";

function AdminLayout() {
  const [sidebarOpen, setSidebarOpen] = useState(false);

  return (
    <div className="flex w-screen bg-[#f7f6f2] dark:bg-gray-950">
      <SideBar sidebarOpen={sidebarOpen} setSidebarOpen={setSidebarOpen} />
      <div
        id="panel"
        className="flex h-screen w-full flex-col bg-gradient-to-br from-[#f7f6f2] to-[#f8f6f9] dark:from-gray-900 dark:to-gray-900"
      >
        <Topbar sidebarOpen={sidebarOpen} setSidebarOpen={setSidebarOpen} />
        <div id="content" className="flex-1 overflow-y-scroll">
          <Outlet />
        </div>
      </div>
    </div>
  );
}

export default AdminLayout;
