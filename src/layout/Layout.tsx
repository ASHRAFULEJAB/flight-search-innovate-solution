import Footer from "@/pages/Footer";
import Header from "@/pages/Header";
import { Outlet } from "react-router-dom";

const Layout = () => {
  //   const location = useLocation();
  //   const isHomeRoute = location.pathname === "/";
  return (
    <div>
      <Header />
      {/* {isHomeRoute && <Banner />} */}
      {/* <Container> */}
      <Outlet />
      {/* </Container> */}
      <Footer />
    </div>
  );
};

export default Layout;
