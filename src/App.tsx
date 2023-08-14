import AdminLayout from "./_layouts/AdminLayout";
import PagesLayout from "./_layouts/PagesLayout";
import Dashboard from "./admin/Dashboard";
import RoleList from "./admin/roles/RoleList";
import Settings from "./admin/settings/Settings";
import UserList from "./admin/users/UserList";
import About from "./pages/About";
import Home from "./pages/Home";
import Login from "./pages/Login";
import Register from "./pages/Register";
import { Routes, Route } from "react-router-dom";

const App = () => {
  return (
    <>
      <Routes>
        <Route element={<PagesLayout />}>
          <Route index element={<Home />} />
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/login" element={<Login />} />
          <Route path="/register" element={<Register />} />
        </Route>

        <Route element={<AdminLayout />}>
          <Route index element={<Dashboard />} />
          <Route path="/admin" element={<Dashboard />} />
          <Route path="/admin/roles" element={<RoleList />} />
          <Route path="/admin/users" element={<UserList />} />
          <Route path="/admin/settings" element={<Settings />} />
        </Route>
      </Routes>
    </>
  );
};

export default App;
