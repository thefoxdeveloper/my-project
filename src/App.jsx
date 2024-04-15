import React, { useState, useRef } from "react";
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
    <div className="w-screen">
      <ul className="flex space-x-4 text-center justify-center">
        <li>
          <button
            className="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm w-full sm:w-auto px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
            onClick={() => openModal(<CreateUser />)}
          >
            times()
          </button>
        </li>
        <li>
          <button
            className="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm w-full sm:w-auto px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
            onClick={() => openModal(<FilteredCollection />)}
          >
            where()
          </button>
        </li>
        <li>
          <button
            className="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm w-full sm:w-auto px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
            onClick={() => openModal(<FlippedCollection />)}
          >
            flip()
          </button>
        </li>
        <li>
          <button
            className="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm w-full sm:w-auto px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
            onClick={() => openModal(<UnwrapComponent />)}
          >
            unwrap()
          </button>
        </li>
        <li>
          <button
            className="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm w-full sm:w-auto px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
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
