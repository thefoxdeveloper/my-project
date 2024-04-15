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
    <div className="min-h-screen flex justify-center items-center bg-slate-600">
      <ul className="flex space-x-4">
        <li
          className="cursor-pointer text-blue-500 hover:text-blue-700"
          onClick={() => openModal(<CreateUser />)}
        >
          Create User
        </li>
        <li
          className="cursor-pointer text-blue-500 hover:text-blue-700"
          onClick={() => openModal(<FilteredCollection />)}
        >
          Filtered Collection
        </li>
        <li
          className="cursor-pointer text-blue-500 hover:text-blue-700"
          onClick={() => openModal(<FlippedCollection />)}
        >
          Flipped Collection
        </li>
        <li
          className="cursor-pointer text-blue-500 hover:text-blue-700"
          onClick={() => openModal(<UnwrapComponent />)}
        >
          Unwrap Component
        </li>
        <li
          className="cursor-pointer text-blue-500 hover:text-blue-700"
          onClick={() => openModal(<RejectComponent />)}
        >
          Reject Component
        </li>
      </ul>
      {isModalOpen && (
        <div
          ref={modalRef}
          className="fixed inset-0 z-50 flex items-center justify-center bg-black bg-opacity-50"
          onClick={handleModalClick}
        >
          <div className="bg-slate-800 p-6 rounded-lg max-w-md w-full">
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
