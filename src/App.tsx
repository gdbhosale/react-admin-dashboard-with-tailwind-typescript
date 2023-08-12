import { Routes, Route } from 'react-router-dom';
import About from './pages/About';
import AdminLayout from './layouts/AdminLayout';
import Dashboard from './admin/Dashboard';
import Home from './pages/Home';
import Login from './pages/Login';
import PagesLayout from './layouts/PagesLayout';
import Register from './pages/Register';

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
        </Route>
      </Routes>
    </>
  );
};

export default App;