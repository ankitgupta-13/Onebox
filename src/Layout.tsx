import { useEffect } from "react";
import { Outlet, useNavigate } from "react-router-dom";
import Header from "./components/Header";
import Sidebar from "./components/Sidebar";

const Layout = () => {
  const navigate = useNavigate();
  useEffect(() => {
    const queryParams = new URLSearchParams(window.location.search);
    const fetchedToken =
      queryParams.get("token") || localStorage.getItem("token");
    if (fetchedToken) {
      localStorage.setItem("token", fetchedToken);
      navigate("/home");
    } else {
      navigate("/login");
    }
  }, []);
  return (
    <div className="flex h-screen border-2">
      <div className="w-[5%] min-w-[70px] border-2">
        <Sidebar />
      </div>
      <div className="flex-1 flex flex-col">
        <Header />
        <div className="flex-1 overflow-auto">
          <Outlet />
        </div>
      </div>
    </div>
  );
};

export default Layout;
