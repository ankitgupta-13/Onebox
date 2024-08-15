import { useQuery } from "@tanstack/react-query";
import { useEffect } from "react";
import { useSelector } from "react-redux";
import { getAllMails } from "../api/email.api";
import { RootState } from "../redux/store";
import Inbox from "./Inbox";
import Threads from "./Threads";
const Onebox = () => {
  const threads: [] = useSelector((state: RootState) => state.mail.mailThreads);
  useQuery({
    queryKey: ["allMails"],
    queryFn: getAllMails,
    staleTime: Infinity,
  });

  const handleKeyDown = (e) => {
    if (threads.length === 0) return;
    if (e.key == "d") {
      console.log("d");
    } else if (e.key == "r") {
    }
  };

  useEffect(() => {
    // Add event listener for keydown
    window.addEventListener("keydown", handleKeyDown);

    // Clean up the event listener on component unmount
    return () => {
      window.removeEventListener("keydown", handleKeyDown);
    };
  }, []);
  return (
    <div className="flex border-2">
      <Inbox />
      <Threads />
    </div>
  );
};

export default Onebox;
