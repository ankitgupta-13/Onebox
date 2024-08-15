import { useSelector } from "react-redux";
import dropdown from "../assets/dropdown.svg";
import { RootState } from "../redux/store";
import { Thread } from "../types/thread.type";
import ReplyModal from "./ReplyModal";
import ThreadCard from "./ThreadCard";

const Threads = () => {
  const emailThreads = useSelector(
    (state: RootState) => state.mail.mailThreads
  );
  console.log(emailThreads);
  const isLoadingThreads = useSelector(
    (state: RootState) => state.mail.isLoadingThreads
  );

  return (
    <div>
      <div>
        {isLoadingThreads ? (
          <div>Loading...</div>
        ) : (
          <div className="flex flex-col items-center">
            <div className="flex justify-between p-4 w-full">
              <div className="flex flex-col text-[var(--text-color)]">
                <span className="font-bold">Orlando</span>
                <span className="text-[var(--secondary-text-color)] text-sm">
                  orladom@gmail.com
                </span>
              </div>
              <div className="flex items-center gap-2 bg-[var(--button-background-color)] text-[var(--text-color)] border-2 border-[var(--header-border-color)] p-1 rounded-md">
                <div>Meeting Completed</div>
                <img src={dropdown} alt="" className="w-4" />
              </div>
            </div>
            <div className="w-11/12 flex flex-col gap-4">
              <div className="flex flex-col gap-2">
                {emailThreads?.map((thread: Thread, index: number) => (
                  <div key={index}>
                    <ThreadCard thread={thread} />
                  </div>
                ))}
              </div>
              <div className="flex">
                <ReplyModal />
              </div>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default Threads;
