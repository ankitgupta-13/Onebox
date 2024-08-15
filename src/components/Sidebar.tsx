import { useQuery } from "@tanstack/react-query";
import { useLocation, useNavigate } from "react-router-dom";
import { getAllMails } from "../api/email.api";
import chart from "../assets/barChart.svg";
import mail from "../assets/email.svg";
import home from "../assets/home.svg";
import layout from "../assets/layout.svg";
import logo from "../assets/logo.svg";
import onebox from "../assets/onebox.svg";
import search from "../assets/search.svg";
import send from "../assets/send.svg";
import userIcon from "../assets/userIcon.svg";

const Sidebar = () => {
  const navigate = useNavigate();
  const location = useLocation();
  const sections = [
    {
      id: 1,
      img: home,
      title: "Home",
    },
    {
      id: 2,
      img: search,
      title: "Search",
    },
    {
      id: 3,
      img: mail,
      title: "Mail",
    },
    {
      id: 4,
      img: send,
      title: "Send",
    },
    {
      id: 5,
      img: layout,
      title: "Layout",
    },
    {
      id: 6,
      img: onebox,
      title: "Onebox",
    },
    {
      id: 7,
      img: chart,
      title: "Chart",
    },
  ];
  let activeSection = String(location.pathname.split("/").pop());
  const { data: allMails } = useQuery({
    queryKey: ["allMails"],
    queryFn: getAllMails,
    staleTime: Infinity,
  });
  console.log(allMails);
  return (
    <div className="px-5 py-4 flex flex-col justify-between h-full items-center">
      <div>
        <img
          src={logo}
          alt="not found"
          className="w-10 aspect-square cursor-pointer"
        />
      </div>
      <div className="flex flex-col gap-6">
        {sections.map((section) => (
          <div
            key={section.id}
            className={`${
              activeSection === section.title.toLowerCase() ? "bg-gray-700" : ""
            } p-2 rounded-md text-gray-500`}
            onClick={() => navigate(section.title.toLowerCase())}
          >
            <img
              src={section.img}
              alt="not found"
              className="fill-current aspect-auto w-9 cursor-pointer "
            />
          </div>
        ))}
      </div>
      <div>
        <img
          src={userIcon}
          alt="not found"
          className="w-10 aspect-auto cursor-pointer"
        />
      </div>
    </div>
  );
};

export default Sidebar;
