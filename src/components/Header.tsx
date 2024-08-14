import moon from "../assets/moon.svg";
import sun from "../assets/sun.svg";
const Header = () => {
  return (
    <div className="flex justify-between border-2">
      <div>
        <p>Onebox</p>
      </div>
      <div className="flex">
        <img src={sun} alt="" />
        <img src={moon} alt="" />
      </div>
    </div>
  );
};

export default Header;
