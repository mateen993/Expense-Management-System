import React, { useState } from "react";
import Modal from "./Modal";

const Home: React.FC = () => {
    const [showModal, setShowModal] = useState<boolean>(false)
  return (
    <>
      <div className=" font-bold text-2xl text-center bg-gradient-to-r from-orange-400 to-red-500 text-transparent bg-clip-text ">
        {" "}
        Welcome to Dashboard{" "}
      </div>
      <div className="mt-2 p-2  flex flex-col md:flex-row justify-center items-center gap-4 ">
        <h1 className="font-semibold"> Add new Expense </h1>
        <button onClick={() => setShowModal(!showModal)} className="font-semibold duration-150 bg-yellow-400 p-2 rounded-lg">
          {" "}
          Add New{" "}
        </button>
      </div>
      <Modal isVisible={showModal} onClose={() => setShowModal(false)}  />
    </>
  );
};

export default Home;
