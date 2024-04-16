import { useState, useRef } from "react";
import CreateUser from "./CreateUser";
import FilteredCollection from "./FilteredCollection";
import FlippedCollection from "./FlippedCollection";
import UnwrapComponent from "./UnwrapComponent";
import RejectComponent from "./RejectComponent";

export default function App() {
  const [modalContent, setModalContent] = useState(null);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const modalRef = useRef();

  const openModal = (component) => {
    setModalContent(component);
    setIsModalOpen(true);
  };

  const closeModal = () => {
    setModalContent(null);
    setIsModalOpen(false);
  };

  const handleModalClick = (event) => {
    if (event.target === modalRef.current) {
      closeModal();
    }
  };

  return (
    <div className="w-screen h-screen content-center bg-gradient-to-tr from-sky-300 via-sky-400 to-blue-500">
      <ul className="flex  space-x-4 text-center justify-center items-center">
        <li>
          <button
            className="text-white bg-gradient-to-br from-pink-500 to-orange-400 hover:bg-gradient-to-bl focus:ring-4 focus:outline-none focus:ring-pink-200 dark:focus:ring-pink-800 font-medium rounded-lg text-sm px-5 py-2.5 text-center me-2 mb-2"
            onClick={() => openModal(<CreateUser />)}
          >
            times()
          </button>
        </li>
        <li>
          <button
            className="text-white bg-gradient-to-br from-pink-500 to-orange-400 hover:bg-gradient-to-bl focus:ring-4 focus:outline-none focus:ring-pink-200 dark:focus:ring-pink-800 font-medium rounded-lg text-sm px-5 py-2.5 text-center me-2 mb-2"
            onClick={() => openModal(<FilteredCollection />)}
          >
            where()
          </button>
        </li>
        <li>
          <button
            className="text-white bg-gradient-to-br from-pink-500 to-orange-400 hover:bg-gradient-to-bl focus:ring-4 focus:outline-none focus:ring-pink-200 dark:focus:ring-pink-800 font-medium rounded-lg text-sm px-5 py-2.5 text-center me-2 mb-2"
            onClick={() => openModal(<FlippedCollection />)}
          >
            flip()
          </button>
        </li>
        <li>
          <button
            className="text-white bg-gradient-to-br from-pink-500 to-orange-400 hover:bg-gradient-to-bl focus:ring-4 focus:outline-none focus:ring-pink-200 dark:focus:ring-pink-800 font-medium rounded-lg text-sm px-5 py-2.5 text-center me-2 mb-2"
            onClick={() => openModal(<UnwrapComponent />)}
          >
            unwrap()
          </button>
        </li>
        <li>
          <button
            className="text-white bg-gradient-to-br from-pink-500 to-orange-400 hover:bg-gradient-to-bl focus:ring-4 focus:outline-none focus:ring-pink-200 dark:focus:ring-pink-800 font-medium rounded-lg text-sm px-5 py-2.5 text-center me-2 mb-2"
            onClick={() => openModal(<RejectComponent />)}
          >
            reject()
          </button>
        </li>
      </ul>
      {isModalOpen && (
        <div
          ref={modalRef}
          className="fixed inset-0 z-50 flex items-center justify-center bg-black bg-opacity-50"
          onClick={handleModalClick}
        >
          <div className="bg-slate-800 p-6 rounded-lg max-w-lg w-full">
            <span
              className="absolute top-0 right-0 cursor-pointer text-gray-500 hover:text-gray-700"
              onClick={closeModal}
            >
              &times;
            </span>
            {modalContent}
          </div>
        </div>
      )}
    </div>
  );
}
