import DarkModeSwitch from "./DarkModeSwitch";
import { useEffect, useRef } from "react";
import { DiReact } from "react-icons/di";
import { FiHome, FiUsers, FiShield, FiSettings } from "react-icons/fi";
import { LuLayoutDashboard } from "react-icons/lu";
import { Link } from "react-router-dom";

const SideBar = ({ sidebarOpen, setSidebarOpen }: any) => {
  const trigger = useRef<HTMLInputElement>(null);
  const sidebar = useRef<HTMLInputElement>(null);

  // close on click outside
  useEffect(() => {
    const clickHandler = ({ target }: any) => {
      if (!sidebar.current || !trigger.current) return;
      if (!sidebarOpen || sidebar.current.contains(target) || trigger.current.contains(target)) return;
      setSidebarOpen(false);
    };
    document.addEventListener("click", clickHandler);
    return () => document.removeEventListener("click", clickHandler);
  });

  // close if the esc key is pressed
  useEffect(() => {
    const keyHandler = ({ keyCode }: any) => {
      if (!sidebarOpen || keyCode !== 27) return;
      setSidebarOpen(false);
    };
    document.addEventListener("keydown", keyHandler);
    return () => document.removeEventListener("keydown", keyHandler);
  });

  return (
    <>
      <div
        id="sidebarBackdrop"
        className={`fixed inset-0 z-40 bg-slate-900 bg-opacity-30 transition-opacity duration-200 md:z-auto md:hidden ${
          sidebarOpen ? "opacity-100" : "pointer-events-none opacity-0"
        }`}
        aria-hidden="true"
        onClick={() => {
          setSidebarOpen(false);
        }}
      ></div>

      <div
        id="sidebar"
        className={`absolute left-0 top-0 z-40 flex h-screen w-64 flex-col border-r border-gray-200 bg-gradient-to-bl from-[#eff2fd] to-[#f3e7fa] transition-all duration-200 ease-in-out dark:border-gray-900 dark:bg-gray-950 dark:from-gray-950 dark:to-gray-950 md:static md:left-auto md:top-auto md:w-72 md:translate-x-0 md:overflow-y-auto ${
          sidebarOpen ? "translate-x-0" : "-translate-x-72"
        }`}
      >
        <div className="flex h-16 items-center justify-between">
          <Link
            to="/admin"
            className="flex items-center gap-1 px-3 text-xl font-light tracking-tight text-slate-900 dark:text-white"
            onClick={() => {
              setSidebarOpen(false);
            }}
          >
            <DiReact size="28" />
            <span>React Admin</span>
          </Link>
          <div className="px-3">
            <DarkModeSwitch />
          </div>
        </div>

        <div className="pt-3">
          <MenuItem
            icon={<LuLayoutDashboard size="20" />}
            label="Dashboard"
            to="/admin"
            setSidebarOpen={setSidebarOpen}
          />
          <MenuItem icon={<FiHome size="20" />} label="Home" to="/" setSidebarOpen={setSidebarOpen} />

          <Divider />

          <MenuItem icon={<FiShield size="20" />} label="Roles" to="/admin/roles" setSidebarOpen={setSidebarOpen} />
          <MenuItem
            icon={<FiUsers size="20" />}
            label="Users"
            to="/admin/users"
            count="2"
            setSidebarOpen={setSidebarOpen}
          />
          <MenuItem
            icon={<FiSettings size="20" />}
            label="Settings"
            to="/admin/settings"
            count="2"
            setSidebarOpen={setSidebarOpen}
          />
        </div>
      </div>
    </>
  );
};

const MenuItem = ({ icon, label = "", to = "/admin", count = "2", setSidebarOpen }: any) => (
  <Link
    to={to}
    className="mx-4 flex flex-row place-items-center gap-2 rounded-lg px-2.5 py-2 text-gray-700 hover:bg-white/50 dark:text-gray-400 dark:hover:bg-white/10"
    onClick={() => {
      setSidebarOpen(false);
    }}
  >
    {icon}
    {label}
  </Link>
);

const Divider = () => <hr className="my-2 w-full border-gray-200 dark:border-gray-900" />;

export default SideBar;
