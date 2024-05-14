import Header from "./header";
import Footer from "./footer";
import { Outlet } from "react-router-dom";

const Layout = () => {
  return (
    <main>
      <div className="relative ">
        <div className="px-4 sm:px-0 sticky lg:top-0 lg:z-50 w-full border-b border-border/40 lg:bg-[#101415]/95 lg:backdrop-blur lg:supports-[backdrop-filter]:bg-[#101415]/60">
          <Header />
        </div>
        <div className="px-4 sm:px-0 min-h-screen max-w-screen-lg mx-auto">
          <Outlet />
        </div>
        <Footer />
      </div>
    </main>
  );
};

export default Layout;
