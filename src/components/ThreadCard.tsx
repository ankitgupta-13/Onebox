import { Thread } from "../types/thread.type";

const ThreadCard = ({ thread }: { thread: Thread }) => {
  return (
    <div>
      <div>{thread.subject}</div>
      <div>{thread.fromEmail}</div>
      <div>{thread.toEmail}</div>
      <div dangerouslySetInnerHTML={{ __html: thread.body }} />
    </div>
  );
};

export default ThreadCard;
