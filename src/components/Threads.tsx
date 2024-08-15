import { useQueryClient } from "@tanstack/react-query";
import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { deleteEmailThreads } from "../api/email.api";
import dropdown from "../assets/dropdown.svg";
import noMessage from "../assets/noMessage.svg";
import { setMailThreads } from "../redux/mail.slice";
import { RootState } from "../redux/store";
import { Thread } from "../types/thread.type";
import Loader from "./Loader";
import ReplyModal from "./ReplyModal";
import ThreadCard from "./ThreadCard";

const Threads = () => {
  const queryClient = useQueryClient();
  const [isModalOpen, setIsModalOpen] = useState(false);

  const dispatch = useDispatch();
  const emailThreads: Thread[] = useSelector(
    (state: RootState) => state.mail.mailThreads
  );
  const threadId: number = emailThreads[0]?.threadId;

  const isLoadingThreads = useSelector(
    (state: RootState) => state.mail.isLoadingThreads
  );

  const toggleModal = () => {
    if (!threadId) setIsModalOpen(false);
    else setIsModalOpen(!isModalOpen);
  };

  const handleDelete = async () => {
    await deleteEmailThreads(threadId);
    queryClient.invalidateQueries({ queryKey: ["allMails"] });
    dispatch(setMailThreads([]));
    toggleModal();
  };

  useEffect(() => {
    const handleKeyDown = (event: KeyboardEvent) => {
      if (event.key === "d" || event.key === "D") {
        toggleModal();
      } else if (event.key === "Escape") {
        setIsModalOpen(false);
      }
    };

    window.addEventListener("keydown", handleKeyDown);

    return () => {
      window.removeEventListener("keydown", handleKeyDown);
    };
  }, [threadId, isModalOpen]);

  return (
    <div>
      <div>
        {isLoadingThreads ? (
          <Loader />
        ) : (
          <div className="flex flex-col items-center">
            <div className="flex justify-between p-4 w-full border-b-2 border-b-[var(--header-border-color)]">
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
              <div className="flex flex-col gap-2 mt-4">
                {!threadId ? (
                  <div className="flex gap-3 h-96 flex-col justify-center items-center">
                    <img src={noMessage} alt="" />
                    <div className="text-[var(--text-color)] font-bold">
                      It’s the beginning of a legendary sales pipeline
                    </div>
                    <div className="flex flex-col items-center text-[var(--secondary-text-color)] text-sm w-1/3">
                      <span>When you have inbound Emails</span>
                      <span>you will see them here</span>
                    </div>
                  </div>
                ) : emailThreads.length === 0 ? (
                  <div>No Threads Found!</div>
                ) : (
                  emailThreads.map((thread: Thread, index: number) => (
                    <div key={index}>
                      <ThreadCard thread={thread} />
                    </div>
                  ))
                )}
              </div>
              {threadId && (
                <div className="flex">
                  <ReplyModal />
                </div>
              )}
            </div>
          </div>
        )}
      </div>
      {threadId && isModalOpen && (
        <div className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-50 backdrop-blur-sm">
          <div className="w-full max-w-md bg-[var(--sidebar-background-color)] border-2 border-[var(--sidebar-border-color)] p-6 pt-2 rounded-lg shadow-lg flex flex-col gap-4 items-center">
            <strong className="text-[var(--text-color)]">Are you sure?</strong>
            <span className="text-sm text-[var(--secondary-text-color)]">
              Your selected email will be deleted.
            </span>
            <div className="flex justify-between w-full">
              <button
                onClick={toggleModal}
                className="bg-red-800 text-white px-4 py-2 rounded-md"
              >
                Cancel
              </button>
              <button
                className="px-4 py-2 rounded-md bg-[var(--header-background-color)]"
                onClick={handleDelete}
              >
                Delete
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default Threads;
