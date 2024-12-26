import Footer from "@/pages/Footer";
import Header from "@/pages/Header";
import { Outlet } from "react-router-dom";

const Layout = () => {
  return (
    <>
      <Header />

      <Outlet />

      <Footer />
    </>
  );
};

export default Layout;
