import arrow from "../assets/arrow.svg";
import { Mail } from "../types/mail.type";

const Mailcard = ({ mail }: { mail: Mail }) => {
  return (
    <div className="relative flex flex-col gap-5 p-2">
      <hr />
      <div className="absolute right-0 top-8 text-slate-200">
        {`${new Date(mail.createdAt).toDateString().split(" ")[1]} ${
          new Date(mail.createdAt).toDateString().split(" ")[2]
        }`}
      </div>
      <div className="flex gap-3">
        <div className="h-2 w-2 rounded-full bg-blue-500 mt-2"></div>
        <div>
          <strong>{mail.fromEmail}</strong>
          <div>{mail.subject.slice(0, mail.fromEmail.length)}...</div>
        </div>
      </div>
      <div className="flex justify-around">
        <div className="bg-slate-800 rounded-lg py-1 px-2 text-green-300">
          Interested
        </div>
        <div className="rounded-lg bg-slate-800 py-1 px-2">
          <img src={arrow} className="inline mr-2" />
          <span className="text-white">Campaign Name</span>
        </div>
      </div>
    </div>
  );
};

export default Mailcard;
