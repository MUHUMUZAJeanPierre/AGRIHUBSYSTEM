import React, { useState } from "react";
import axios from "axios";

const Forget = () => {
  const [email, setEmail] = useState("");
  const [successMessage, setSuccessMessage] = useState("");
  const [errorMessage, setErrorMessage] = useState("");
  const [showModal, setShowModal] = useState(false);
  const [isLoading, setIsLoading] = useState(false); 

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsLoading(true); 
    try {
      const response = await axios.post(
        "https://agrisokoconnect-backend-ipza.onrender.com/AgriSoko/user/forgotPassword",
        {
          email
        }
      );
      setSuccessMessage("Password reset instructions sent to your email.");
      setShowModal(true);
    } catch (error) {
      setErrorMessage("Invalid email address. Please try again.");
    }
    setIsLoading(false); 

    setTimeout(() => {
      setEmail("");
      setErrorMessage("");
    }, 7000);
  };

  return (
    <div className="flex justify-center items-center h-screen bg-[#e4e3e3]">
      <form
        onSubmit={handleSubmit}
        className="bg-[#fbfbfb] shadow-md rounded lg:w-[35%] md:w-[60%] sm:w-[60%] px-8 pt-6 pb-8 mb-4"
      >
        <h1 className="text-2xl text-center font-bold mb-1">
          Reset Your Password
        </h1>
        <p className="text-center mb-3">
          Please Provide the email address you used when you signed up for your
          Agrisoko-connect account
        </p>
        <div className="mb-4">
          <input
            className="shadow appearance-none border rounded w-full py-3 px-3 text-gray-700  focus:outline-black focus:shadow-outline"
            id="email"
            type="email"
            placeholder="Email Address"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            required
          />
        </div>
        {errorMessage && (
          <span className="text-red-500 sm:inline">{errorMessage}</span>
        )}
        <div className="flex items-center justify-center mt-2">
          <button
            type="submit"
            className={`bg-green-900 hover:bg-green-700 text-white font-bold py-2 px-7 rounded-md focus:outline-none focus:shadow-outline ${
              isLoading ? "opacity-50 cursor-not-allowed" : ""
            }`}
            disabled={isLoading}
          >
            {isLoading ? "Submitting..." : "Submit"}{" "}
          </button>
        </div>
      </form>
      {showModal && (
        <div className="fixed z-10 inset-0 overflow-y-auto">
          <div className="flex items-end justify-center min-h-screen pt-4 px-4 pb-20 text-center sm:block sm:p-0">
            <div
              className="fixed inset-0 transition-opacity"
              aria-hidden="true"
            >
              <div className="absolute inset-0 bg-[#e4e3e3]"></div>
            </div>
            <span
              className="hidden sm:inline-block sm:align-middle sm:h-screen"
              aria-hidden="true"
            >
              &#8203;
            </span>
            <div className="inline-block align-bottom h-[14rem] bg-white rounded-lg text-left overflow-hidden shadow-xl transform transition-all sm:my-8 sm:align-middle sm:max-w-lg sm:w-full">
              <div className="px-4 pt-5 pb-4 sm:p-6 sm:pb-4">
                <div className="sm:flex sm:items-start">
                  <div className="mt-3 text-center sm:mt-0 sm:ml-4 sm:text-left">
                    <h3
                      className="text-2xl leading-6  font-medium text-green-600"
                      id="modal-title"
                    >
                      Success!
                    </h3>
                    <div className="mt-5">
                      <p className=" text-gray-500">
                        {successMessage} You can check your email in{" "}
                        <a
                          href="https://mail.google.com/"
                          target="_blank"
                          className="text-blue-500"
                        >
                          Gmail
                        </a>
                        .
                      </p>
                    </div>
                  </div>
                </div>
              </div>
              <div className="mt-10 pr-4 sm:flex sm:flex-row-reverse">
                <button
                  onClick={() => setShowModal(false)}
                  type="button"
                  className="w-full inline-flex justify-center rounded-md border border-transparent shadow-sm px-4 py-2 bg-green-600 text-base font-medium text-white hover:bg-green-600 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500 sm:ml-3 sm:w-auto sm:text-sm"
                >
                  Close
                </button>
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default Forget;
