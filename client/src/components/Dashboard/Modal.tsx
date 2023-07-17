import React, { MouseEvent } from "react";

interface ModalProps {
  isVisible: boolean;
  onClose: () => void;
}

const Modal: React.FC<ModalProps> = ({ isVisible, onClose }) => {
  const handleClose = (e: MouseEvent<HTMLDivElement>) => {
    if (e.target.id === "wrapper") {
      onClose();
    }
  };
  if (!isVisible) {
    return null;
  }
  return (
    <div
      onClick={handleClose}
      id="wrapper"
      className="fixed inset-0 bg-black bg-opacity-25 backdrop-blur-sm flex justify-center items-center "
    >
      <div className="md:w-[400px] w-[250px] shadow-2xl rounded-lg flex flex-col">
        <button
          onClick={onClose}
          className="text-red-600 font-extrabold -mt-6 text-xl place-self-end"
        >
          {" "}
          X
        </button>
        <div className="p-4 bg-slate-100 rounded-lg ">
          <h1 className="text-xl text-center font-bold">
            {" "}
            Create new transaction{" "}
          </h1>
          <hr className="border-[3px] border-orange-400 mb-2" />
          <label
            htmlFor="title"
            className="block text-base mb-2 cursor-pointer font-semibold"
          >
            {" "}
            Title{" "}
          </label>
          <input
            type="text"
            id="title"
            className="w-full p-1 mt-1   rounded-sm focus:outline-none focus:ring-0 focus:border-gray-400 border"
          />
          <label
            htmlFor="amount"
            className="block text-base mb-2 cursor-pointer font-semibold"
          >
            {" "}
            Amount{" "}
          </label>
          <input
            type="number"
            id="amount"
            min={0}
            className="w-full mt-1  p-1 rounded-sm focus:outline-none focus:ring-0 focus:border-gray-400 border"
          />
          <label
            htmlFor="category"
            className="block text-base mb-2 cursor-pointer font-semibold"
          >
            {" "}
            Category{" "}
          </label>
          <input
            type="text"
            id="category"
            className="w-full mt-1 p-1 rounded-sm focus:outline-none focus:ring-0 focus:border-gray-400 border"
          />
          <label
            htmlFor="Date"
            className="block text-base mb-2 cursor-pointer font-semibold"
          >
            {" "}
            Date{" "}
          </label>
          <input
            type="date"
            id="Date"
            className="w-full mt-1 p-1 rounded-sm focus:outline-none focus:ring-0 focus:border-gray-400 border"
          />
          <label
            htmlFor="description"
            className="block text-base mb-2 cursor-pointer font-semibold"
          >
            {" "}
            Description{" "}
          </label>
          <textarea className="w-full p-1 mt-1  rounded-sm focus:outline-none focus:ring-0 focus:border-gray-400 border" />

          <div className="flex justify-center items-center my-3" >
            <button className="p-2 bg-orange-400 rounded-lg font-semibold text-white  hover:scale-105 " > Submit </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Modal;
