import Footer from "../_components/Footer";
import Header from "../_components/Header";
import { Outlet } from "react-router-dom";

function PagesLayout() {
  return (
    <>
      <div className="min-h-screen bg-white text-black dark:bg-black dark:text-white">
        <Header />
        <main>
          <Outlet />
        </main>
        <Footer />
      </div>
    </>
  );
}

export default PagesLayout;
