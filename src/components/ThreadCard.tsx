import { Thread } from "../types/thread.type";

const ThreadCard = ({ thread }: { thread: Thread }) => {
  const convertTimestamp = (timestamp: string) => {
    const originalDate = new Date(timestamp);
    // Convert to desired format
    const day = originalDate.getUTCDate();
    const month = originalDate.toLocaleString("default", { month: "long" });
    const year = originalDate.getUTCFullYear();
    let hours = originalDate.getUTCHours();
    const minutes = originalDate.getUTCMinutes();
    const ampm = hours >= 12 ? "PM" : "AM";
    hours = hours % 12 ? hours : 12;
    const formattedDate = `${day} ${month} ${year} : ${hours}:${minutes}${ampm}`;
    return formattedDate;
  };

  return (
    <div className="flex justify-between bg-[var(--card-background-color)] border-2 border-[var(--header-border-color)] rounded-md p-5">
      <div
        className="flex flex-col gap-2
       text-[var(--text-color)]"
      >
        <div className="flex flex-col gap-1">
          <div className="font-bold">{thread.subject}</div>
          <div className="text-sm text-[var(--secondary-text-color)]">
            from : {thread.fromEmail}
          </div>
          <div className="text-sm text-[var(--secondary-text-color)]">
            to : {thread.toEmail}
          </div>
        </div>
        <div>
          <div dangerouslySetInnerHTML={{ __html: thread.body }} />
        </div>
      </div>
      <div>
        <div className="text-sm text-[var(--secondary-text-color)]">
          {convertTimestamp(thread.sentAt)}
        </div>
      </div>
    </div>
  );
};

export default ThreadCard;
