import email from "../assets/email.svg";
import send from "../assets/send.svg";
const LeadDetails = () => {
  return (
    <div className="p-3 flex flex-col gap-4">
      <div className="flex flex-col gap-4">
        <div className="bg-[var(--button-background-color)] text-[var(--text-color)] p-2 rounded-md">
          Lead Details
        </div>
        <div className="flex justify-between">
          <span className="text-[var(--text-color)]">Name</span>
          <span className="text-[var(--secondary-text-color)]">Orlando</span>
        </div>
        <div className="flex justify-between">
          <span className="text-[var(--text-color)]">Contact No</span>
          <span className="text-[var(--secondary-text-color)]">
            +54-9062827869
          </span>
        </div>
        <div className="flex justify-between">
          <span className="text-[var(--text-color)]">Email ID</span>
          <span className="text-[var(--secondary-text-color)]">
            orlando@gmail.com
          </span>
        </div>
        <div className="flex justify-between">
          <span className="text-[var(--text-color)]">Linkedin</span>
          <span className="text-[var(--secondary-text-color)]">
            linkedin.com/in/timvadde/
          </span>
        </div>
        <div className="flex justify-between">
          <span className="text-[var(--text-color)]">Company Name</span>
          <span className="text-[var(--secondary-text-color)]">Reachinbox</span>
        </div>
      </div>
      <div className="flex flex-col gap-4">
        <div className="bg-[var(--button-background-color)] text-[var(--text-color)] p-2 rounded-md">
          Activities
        </div>
        <div className="flex flex-col gap-4">
          <span className="text-[var(--text-color)]">Campaign Name</span>
          <div className="flex gap-2">
            <span className="text-[var(--secondary-text-color)]">3 steps</span>
            <span className="text-[var(--secondary-text-color)]">
              5 days in sequence
            </span>
          </div>
          <div className="flex gap-4">
            <div className="border-2 border-[var(--header-border-color)] h-full rounded-full mt-2">
              <img src={email} alt="not found" />
            </div>
            <div className="flex flex-col gap-1">
              <div>
                <span className="text-[var(--text-color)]">Step 1:Email</span>
              </div>
              <div className="flex gap-2 items-center">
                <img src={send} alt="" />
                <span className="text-[var(--text-color)] text-xs">
                  Sent 3rd, Feb
                </span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default LeadDetails;
