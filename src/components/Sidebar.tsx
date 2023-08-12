import { DiReact } from 'react-icons/di';
import { LuLayoutDashboard } from 'react-icons/lu';
import { FiHome, FiUsers, FiShield, FiSettings } from 'react-icons/fi';
import { Link } from 'react-router-dom';
import DarkModeSwitch from './DarkModeSwitch';

const SideBar = () => {
  return (
    <div className="h-screen w-72 flex flex-col bg-gradient-to-bl from-[#f3f4f7] to-[#ece2f2] dark:bg-black dark:from-black dark:to-black border-r border-gray-200 dark:border-gray-800">
      <div className="flex justify-between items-center h-16">
        <Link to="/admin" className="items-center gap-1 px-3 flex text-xl font-light tracking-tight dark:text-white text-slate-900">
          <DiReact size="28" />
          <span>React Admin</span>
        </Link>
        <div className='px-3'>
          <DarkModeSwitch />
        </div>
      </div>

      <div className='px-3 pt-3'>
        <MenuItem icon={<LuLayoutDashboard size="20" />} label="Dashboard" to="/admin" />
        <MenuItem icon={<FiHome size="20" />} label="Home" to="/" />

        <Divider />

        <MenuItem icon={<FiShield size="20" />} label="Roles" to="/admin/roles" />
        <MenuItem icon={<FiUsers size="20" />} label="Users" to="/admin/users" count="2" />
        <MenuItem icon={<FiSettings size="20" />} label="Settings" to="/admin/settings" count="2" />
      </div>
    </div>
  );
};

const MenuItem = ({ icon, label = '', to = '/admin', count = "2" }: any) => (
  <Link to={to} className="flex flex-row place-items-center gap-2 rounded-lg py-2 px-2.5 text-gray-700 hover:bg-white/50 dark:text-gray-400 dark:hover:bg-white/10">
    {icon}
    {label}
  </Link>
);


const Divider = () => <hr className="border-gray-200 dark:border-gray-800 my-2 mx-[-2rem]" />;

export default SideBar;
