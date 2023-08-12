import { Outlet } from "react-router-dom";
import Header from "../components/Header";
import Footer from "../components/Footer";

function PagesLayout() {
  return (
    <>
      <div className="text-black bg-white dark:text-white dark:bg-black min-h-screen">
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
