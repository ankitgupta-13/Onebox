import { useEffect, useState } from "react";
import reply from "../assets/reply.svg";

function Modal() {
  const [isModalOpen, setIsModalOpen] = useState(true);
  //   const [isModalOpen, setIsModalOpen] = useState(false);

  const toggleModal = () => setIsModalOpen(!isModalOpen);

  // Close modal when clicking outside of it
  const handleOutsideClick = (event: any) => {
    if (event.target.className.includes("modal")) {
      setIsModalOpen(false);
    }
  };

  useEffect(() => {
    const handleKeyDown = (event: any) => {
      if (event.key === "r" || event.key === "R") {
        toggleModal();
      } else if (event.key === "Escape") {
        setIsModalOpen(false);
      }
    };

    window.addEventListener("keydown", handleKeyDown);

    // Clean up the event listener on component unmount
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
              className="flex justify-between close bg-[var(--header-background-color)] p-2 w-full"
              onClick={toggleModal}
            >
              <span className="text-sm">Reply</span>
              <span className="cursor-pointer">&times;</span>
            </div>
            <div className="text-[var(--header-background-color)]">
              <div className="flex">
                <div className="text-[var(--secondary-text-color)]">To : </div>
                <input type="text" className="bg-transparent" />
              </div>
              <div className="flex">
                <div className="text-[var(--secondary-text-color)]">From :</div>
                <input className="bg-transparent" type="text" />
              </div>
              <div className="flex">
                <div className="text-[var(--secondary-text-color)]">
                  Subject :
                </div>
                <input className="bg-transparent" type="text" />
              </div>
              <div>
                <textarea
                  name=""
                  id=""
                  className="bg-transparent"
                  placeholder="Start writing..."
                ></textarea>
              </div>
              <div>
                <button className="bg-gradient-to-r from-[#4B63DD] to-[#0524BF]">
                  Send
                </button>
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}

export default Modal;
