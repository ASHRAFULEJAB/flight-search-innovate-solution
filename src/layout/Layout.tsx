import Footer from "@/pages/Footer";
import Header from "@/pages/Header";
import { Outlet } from "react-router-dom";

const Layout = () => {
  //   const location = useLocation();
  //   const isHomeRoute = location.pathname === "/";
  return (
    <>
      <Header />
      {/* {isHomeRoute && <Banner />} */}
      {/* <Container> */}
      <Outlet />
      {/* </Container> */}
      <Footer />
    </>
  );
};

export default Layout;
