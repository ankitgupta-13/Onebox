import arrow from "../assets/arrow.svg";
import { Mail } from "../types/mail.type";

const Mailcard = ({ mail }: { mail: Mail }) => {
  return (
    <div className="flex flex-col cursor-pointer py-4 px-1 gap-4 border-t-2 border-t-[var(--header-border-color)]">
      <div className="flex gap-2 justify-between text-[var(--text-color)]">
        <div className="flex gap-2">
          <div className="h-2 w-2 rounded-full bg-blue-500 mt-2"></div>
          <div className="flex flex-col">
            <div className="text-sm font-bold">{mail.fromEmail}</div>
            <p className="text-xs">
              {mail.subject.length > 30
                ? mail.subject.substring(0, 30) + "..."
                : mail.subject}
            </p>
          </div>
        </div>
        <span className="text-xs">
          {`${new Date(mail.createdAt).toDateString().split(" ")[1]} ${
            new Date(mail.createdAt).toDateString().split(" ")[2]
          }`}
        </span>
      </div>
      <div className="flex justify-around">
        <div className="flex justify-center items-center gap-1 bg-slate-800 rounded-lg px-2 h-5 bg-[var(--button-background-color)] text-[var(--text-color)]">
          <div className="h-2 w-2 rounded-full bg-green-300"></div>
          <span className="text-xs text-green-300">Interested</span>
        </div>
        <div className="flex justify-center items-center gap-1 bg-slate-800 rounded-lg px-2 h-5 bg-[var(--button-background-color)] text-[var(--text-color)]">
          <img src={arrow} alt="not" className="h-[2.5]" />
          <span className="text-xs text-green-300">Campaign Name</span>
        </div>
      </div>
    </div>
  );
};

export default Mailcard;
