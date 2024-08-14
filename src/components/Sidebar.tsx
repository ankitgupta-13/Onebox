import chart from "../assets/barChart.svg";
import mail from "../assets/email.svg";
import frame from "../assets/frame.svg";
import home from "../assets/home.svg";
import layout from "../assets/layout.svg";
import logo from "../assets/logo.svg";
import search from "../assets/search.svg";
import send from "../assets/send.svg";
import userIcon from "../assets/userIcon.svg";

const Sidebar = () => {
  const sections = [
    {
      id: 1,
      img: home,
    },
    {
      id: 2,
      img: search,
    },
    {
      id: 3,
      img: mail,
    },
    {
      id: 4,
      img: send,
    },
    {
      id: 5,
      img: layout,
    },
    {
      id: 6,
      img: frame,
    },
    {
      id: 7,
      img: chart,
    },
  ];
  return (
    <div className="px-5 py-4 flex flex-col justify-between h-full">
      <div>
        <img src={logo} alt="not found" className="h-10 cursor-pointer" />
      </div>
      <div className="flex flex-col gap-6">
        {sections.map((section) => (
          <div key={section.id}>
            <img
              src={section.img}
              alt="not found"
              className="h-10 cursor-pointer"
            />
          </div>
        ))}
      </div>
      <div>
        <img src={userIcon} alt="not found" className="h-10 cursor-pointer" />
      </div>
    </div>
  );
};

export default Sidebar;
