import { Outlet } from "react-router-dom";
import SideBar from "../components/Sidebar";
import Topbar from "../components/Topbar";

function AdminLayout() {
  return (
    <div className="flex w-screen">
      <SideBar />
      <div className="flex flex-col h-screen w-full bg-gradient-to-br from-[#f7f6f2] to-[#f8f6f9] dark:from-black dark:to-black">
        <Topbar />
        <div className="flex-1 overflow-y-scroll">
          <Outlet />
        </div>
      </div>
    </div>
  );
}

export default AdminLayout;
