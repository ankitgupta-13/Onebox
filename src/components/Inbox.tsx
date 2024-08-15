import { useMutation, useQuery } from "@tanstack/react-query";
import { useDispatch, useSelector } from "react-redux";
import { getAllMails, getEmailThreads } from "../api/email.api";
import dropdown from "../assets/dropdown.svg";
import noMessage from "../assets/noMessage.svg";
import refresh from "../assets/refresh.svg";
import searchBar from "../assets/searchBar.svg";
import { setIsLoadingThreads, setMailThreads } from "../redux/mail.slice";
import { RootState } from "../redux/store";
import { Mail } from "../types/mail.type";
import Mailcard from "./Mailcard";

const Inbox = () => {
  const dispatch = useDispatch();
  const theme = useSelector((state: RootState) => state.theme.theme);

  const { data: allMails, isLoading } = useQuery({
    queryKey: ["allMails"],
    queryFn: getAllMails,
    staleTime: Infinity,
  });

  const { mutate } = useMutation({
    mutationFn: getEmailThreads,
    onSuccess: (data) => {
      dispatch(setMailThreads(data.data));
    },
    onMutate: () => dispatch(setIsLoadingThreads(true)),
    onSettled: () => dispatch(setIsLoadingThreads(false)),
  });

  return (
    <div>
      {isLoading ? (
        <div>Loading...</div>
      ) : (
        <div className="p-4 flex flex-col gap-6">
          <div className="flex flex-col gap-4">
            <div className="flex justify-between px-1">
              <div className="">
                <div className="flex gap-2">
                  <p className="text-blue-500 font-bold text-xl">
                    All Inbox(s)
                  </p>
                  <img
                    src={dropdown}
                    alt="not found"
                    className="invert-[0.25]"
                  />
                </div>
                <div className="flex gap-1 items-center">
                  <span className="font-bold text-[var(--text-color)] ">
                    {allMails.data.length}/{allMails.data.length}
                  </span>
                  <p className="text-sm text-gray-500">Inboxes selected</p>
                </div>
              </div>
              <div className="bg-[var(--header-background-color)] h-full p-1 border-2 border-[var(--sidebar-border-color)] rounded-md">
                <img
                  src={refresh}
                  alt="not found"
                  className={`${
                    theme === "dark" ? "" : "invert"
                  } cursor-pointer`}
                />
              </div>
            </div>
            <div className="flex justify-center items-center gap-1 rounded-md border-2 border-[var(--header-border-color)] bg-[var(--header-background-color)] px-2">
              <img
                src={searchBar}
                alt="not found"
                className={`${theme === "dark" ? "invert" : ""}`}
              />
              <input
                type="text"
                className="px-2 py-1 rounded-lg w-full bg-transparent focus:outline-none"
                placeholder="Search"
              />
            </div>
          </div>
          <div className="flex justify-between text-[var(--text-color)]">
            <div className="flex gap-1">
              <span className="bg-[var(--header-background-color)] border-2 border-[var(--header-border-color)] rounded-xl px-2 text-blue-500">
                {allMails?.data.length}
              </span>
              <span>New Replies</span>
            </div>
            <div className="flex gap-2 items-center">
              <span>Newest</span>
              <img
                src={dropdown}
                alt="not found"
                className={`${theme === "dark" ? "" : "invert"}`}
              />
            </div>
          </div>
          <div>
            {allMails?.data ? (
              allMails.data.map((mail: Mail) => (
                <div onClick={() => mutate(mail.threadId)} key={mail.id}>
                  <Mailcard mail={mail} />
                </div>
              ))
            ) : (
              <div>
                <img src={noMessage} alt="not found" />
                <div>
                  <p>It’s the beginning of a legendary sales pipeline </p>
                  <p>When you have inbound E-mails you’ll see them here</p>
                </div>
              </div>
            )}
          </div>
        </div>
      )}
    </div>
  );
};

export default Inbox;
