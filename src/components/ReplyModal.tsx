import { useEffect, useState } from "react";
import dropdown from "../assets/dropdown.svg";
import link from "../assets/link.svg";
import reply from "../assets/reply.svg";

function ReplyModal() {
  const [isModalOpen, setIsModalOpen] = useState(false);

  const toggleModal = () => setIsModalOpen(!isModalOpen);

  const handleOutsideClick = (event: any) => {
    if (event.target.className.includes("modal")) {
      setIsModalOpen(false);
    }
  };

  const handleLinkClick = () => {
    document.getElementById("fileInput")?.click();
  };

  useEffect(() => {
    const handleKeyDown = (event: KeyboardEvent) => {
      if (event.key === "r" || event.key === "R") {
        setIsModalOpen(true);
      } else if (event.key === "Escape") {
        setIsModalOpen(false);
      }
    };

    window.addEventListener("keydown", handleKeyDown);

    return () => {
      window.removeEventListener("keydown", handleKeyDown);
    };
  }, []);

  return (
    <div>
      <button
        className="text-white px-4 py-2 rounded flex gap-2 items-center bg-gradient-to-r from-[#4B63DD] to-[#0524BF]"
        onClick={toggleModal}
      >
        <img src={reply} alt="" />
        Reply
      </button>

      {isModalOpen && (
        <div
          className="modal fixed inset-0 flex items-center justify-center"
          onClick={handleOutsideClick}
        >
          <div className="modal-content bg-[var(--sidebar-background-color)] border-2 border-[var(--sidebar-border-color)] p-6 pt-0 rounded-lg shadow-lg">
            <div
              className="flex justify-between items-center close bg-[var(--header-background-color)] p-2 w-full rounded-t-lg"
              onClick={toggleModal}
            >
              <span className="text-xl text-[var(--text-color)] font-bold">
                Reply
              </span>
              <span className="cursor-pointer text-[var(--text-color)] font-bold text-2xl">
                &times;
              </span>
            </div>
            <div className="text-[var(--header-background-color)] p-4">
              <div className="flex mb-2">
                <span className="text-[var(--secondary-text-color)] mr-2">
                  To:
                </span>
                <input type="text" className="bg-transparent w-full" />
              </div>
              <div className="flex mb-2">
                <div className="text-[var(--secondary-text-color)] mr-2">
                  From:
                </div>
                <input className="bg-transparent w-full" type="text" />
              </div>
              <div className="border-1 border-[var(--header-border-color)] w-full h-1"></div>
              <div className="flex mb-2">
                <div className="text-[var(--secondary-text-color)] mr-2">
                  Subject:
                </div>
                <input className="bg-transparent w-full" type="text" />
              </div>
              <div>
                <textarea
                  name=""
                  id=""
                  className="bg-transparent focus:outline-none h-64 w-full text-[var(--text-color)]"
                  placeholder="Start writing..."
                ></textarea>
              </div>
              <div className="flex items-center gap-2 mt-4">
                <button className="bg-gradient-to-r from-[#4B63DD] to-[#0524BF] px-2 py-1 rounded-md text-white flex items-center gap-2">
                  Send
                  <img src={dropdown} alt="" />
                </button>
                <div>
                  <input type="file" id="fileInput" className="hidden" />
                  <img
                    src={link}
                    alt="Attach file"
                    className="cursor-pointer"
                    onClick={handleLinkClick}
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}

export default ReplyModal;
