import { useDispatch, useSelector } from "react-redux";
import { useLocation } from "react-router-dom";
import dropdown from "../assets/dropdown.svg";
import moon from "../assets/moon.svg";
import sun from "../assets/sun.svg";
import { RootState } from "../redux/store";
import { toggleTheme } from "../redux/theme.slice";

const Header = () => {
  const theme = useSelector((state: RootState) => state.theme.theme);
  const dispatch = useDispatch();
  const location = useLocation();
  let activeSection = String(location.pathname.split("/").pop());
  activeSection = activeSection[0].toUpperCase() + activeSection.substring(1);

  return (
    <div className="flex justify-between px-6 h-16 items-center">
      <div>
        <p className="text-2xl font-bold text-[var(--text-color)]">
          {activeSection}
        </p>
      </div>
      <div className="flex gap-5">
        <div
          className={`flex ${
            theme === "dark" ? "bg-gray-500" : "bg-white flex-row-reverse"
          } items-center justify-center gap-2 rounded-xl border-2 border-[var(--header-border-color)] w-14 h-6 p-1 cursor-pointer`}
          onClick={() => dispatch(toggleTheme())}
        >
          <div
            className={`w-3 h-3 rounded-full ${
              theme === "dark" ? "bg-[#888686]" : "bg-[#E9EAEC]"
            } `}
          ></div>
          <img src={theme === "dark" ? sun : moon} alt="Theme Icon" />
        </div>
        <div className="flex gap-2">
          <p className="text-base font-semibold text-[var(--text-color)]">
            Tim's workspace
          </p>
          <img
            src={dropdown}
            alt="Dropdown Icon"
            className={`w-6 h-6 invert-[.25]`}
          />
        </div>
      </div>
    </div>
  );
};

export default Header;
