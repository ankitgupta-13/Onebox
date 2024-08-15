import { useEffect } from "react";
import { useSelector } from "react-redux";
import { Outlet, useNavigate } from "react-router-dom";
import Header from "./components/Header";
import Sidebar from "./components/Sidebar";
import { RootState } from "./redux/store";

const Layout = () => {
  const navigate = useNavigate();
  const theme = useSelector((state: RootState) => state.theme.theme);

  useEffect(() => {
    document.documentElement.setAttribute("data-theme", theme);
  }, [theme]);

  useEffect(() => {
    const queryParams = new URLSearchParams(window.location.search);
    const fetchedToken =
      queryParams.get("token") || localStorage.getItem("token");
    if (fetchedToken) {
      localStorage.setItem("token", fetchedToken);
      navigate("/onebox");
    } else {
      navigate("/login");
    }
  }, []);
  return (
    <div className="flex h-screen">
      <div className="w-[5%] min-w-[70px] border-r-2 border-r-[var(--sidebar-border-color)] bg-[var(--sidebar-background-color)]">
        <Sidebar />
      </div>
      <div className="flex-1 flex flex-col">
        <div className="border-b-2 border-b-[var(--header-border-color)] bg-[var(--header-background-color)]">
          <Header />
        </div>
        <div className="flex-1 overflow-auto border-r-2 border-r-[var(--header-border-color)] bg-[var(--background-color)]">
          <Outlet />
        </div>
      </div>
    </div>
  );
};

export default Layout;
