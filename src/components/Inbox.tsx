import { useMutation, useQuery } from "@tanstack/react-query";
import { useDispatch } from "react-redux";
import { getAllMails, getEmailThreads } from "../api/email.api";
import dropdown from "../assets/dropdown.svg";
import noMessage from "../assets/noMessage.svg";
import { setIsLoadingThreads, setMailThreads } from "../redux/mail.slice";
import { Mail } from "../types/mail.type";
import Mailcard from "./Mailcard";
const Inbox = () => {
  const dispatch = useDispatch();

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
        <div className="border-2">
          <div className="flex gap-2">
            <p>All Inbox(s)</p>
            <img src={dropdown} alt="not found" />
          </div>
          <div className="flex justify-center">
            <input
              type="text"
              className="px-2 py-1 rounded-lg w-full"
              placeholder="search"
            />
          </div>
          <div className="flex justify-between mt-6">
            <div className="flex gap-1">
              <span className="bg-slate-600 rounded-lg px-2">
                {allMails?.data.length}
              </span>
              <span>New Replies</span>
            </div>
            <div className="flex gap-1">
              <span>Newest</span>
              <img src={dropdown} alt="not found" />
            </div>
          </div>

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
          <div></div>
        </div>
      )}
    </div>
  );
};

export default Inbox;
