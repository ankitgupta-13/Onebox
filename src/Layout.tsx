import { useEffect } from "react";
import { Outlet, useNavigate } from "react-router-dom";
import Header from "./components/Header";
import Sidebar from "./components/Sidebar";

const Layout = () => {
  const navigate = useNavigate();
  useEffect(() => {
    if (!localStorage.getItem("token")) {
      console.log(localStorage.getItem("token"));
      return;
    }
  }, []);
  useEffect(() => {
    const queryParams = new URLSearchParams(window.location.search);
    const fetchedToken = queryParams.get("token");
    if (fetchedToken) {
      localStorage.setItem("token", fetchedToken);
    } else {
      navigate("/login");
    }
  }, []);
  return (
    <div className="flex gap-1">
      <div>
        <Sidebar />
      </div>
      <div>
        <Header />
        <Outlet />
      </div>
    </div>
  );
};

export default Layout;
