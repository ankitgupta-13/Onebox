import { useDispatch, useSelector } from "react-redux";
import dropdown from "../assets/dropdown.svg";
import moon from "../assets/moon.svg";
import sun from "../assets/sun.svg";
import { RootState } from "../redux/store";
import { toggleTheme } from "../redux/theme.slice";
const Header = () => {
  const theme = useSelector((state: RootState) => state.theme.theme);
  const dispatch = useDispatch();
  return (
    <div className="flex justify-between px-6 h-16 items-center">
      <div>
        <p>Onebox</p>
      </div>
      <div className="flex gap-5">
        <div
          className={`flex ${
            theme === "dark" ? "" : "flex-row-reverse"
          } items-center justify-center gap-2 rounded-xl border-2 w-14 h-6 p-1 cursor-pointer`}
          onClick={() => dispatch(toggleTheme())}
        >
          <div className="w-3 h-3 rounded-full bg-gray border-2"></div>
          <img src={theme === "dark" ? sun : moon} alt="" />
        </div>
        <div className="flex gap-2">
          <p>Tim's workspace</p>
          <img src={dropdown} alt="not found" />
        </div>
      </div>
    </div>
  );
};

export default Header;
