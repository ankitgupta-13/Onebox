import { useSelector } from "react-redux";
import { RootState } from "../redux/store";
import { Thread } from "../types/thread.type";
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
          <div>
            <div>
              {emailThreads?.map((thread: Thread, index: number) => (
                <div key={index}>
                  <ThreadCard thread={thread} />
                </div>
              ))}
            </div>
            <div>
              <button>Reply</button>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default Threads;
