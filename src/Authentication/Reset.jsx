import React, { useState } from "react";
import { FaEye, FaEyeSlash } from "react-icons/fa";
import { useNavigate } from "react-router-dom";
import axios from "axios";

const Reset = () => {
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [showPassword, setShowPassword] = useState(false);
  const [successMessage, setSuccessMessage] = useState("");
  const [errorMessage, setErrorMessage] = useState("");
  const [isLoading, setIsLoading] = useState(false);
  const navigate = useNavigate();

  const handlePasswordReset = async (e) => {
    e.preventDefault();

    if (!password || !confirmPassword) {
      setErrorMessage("Please enter both password fields.");
      return;
    }

    const passwordRegex =
      /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{8,}$/;
    if (!passwordRegex.test(password)) {
      setErrorMessage(
        "Password must be at least 8 characters long and contain at least one uppercase letter, one lowercase letter, one digit, and one special character"
      );
      return;
    }

    if (password !== confirmPassword) {
      setErrorMessage("Passwords do not match!");
      return;
    }

    setIsLoading(true);

    try {
      let token = localStorage.getItem("token");

      if (!token) {
        setErrorMessage("No token found. Please sign in.");
        setIsLoading(false);
        return;
      }
      const response = await axios({
        method: "post",
        url: "https://agrisokoconnect-backend-ipza.onrender.com/AgriSoko/user/resetPassword",
        data: {
          password: password,
        },
        headers: {
          Authorization: `Bearer ${token}`,
        },
      })

      console.log(response.data);

      setIsLoading(false);
      setSuccessMessage(response.data.message);

      
      setTimeout(() => {
        setSuccessMessage("Reset password successful. Please sign in.");
        setPassword("");
        setConfirmPassword("");
        navigate("/login");
      }, 3000);
    } catch (error) {
      setIsLoading(false);
      setErrorMessage("Failed to reset password. Please try again later.");

      // Clear error message after 3 seconds
      setTimeout(() => {
        setErrorMessage("");
        setPassword("");
        setConfirmPassword("");
      }, 3000);
    }
  };

  return (
    <div className="flex items-center justify-center min-h-screen bg-gray-100">
      <div className="w-full max-w-md p-8 space-y-6 bg-white shadow-md rounded-lg">
        <h2 className="text-2xl font-bold text-center">Reset Password</h2>
        {successMessage && (
          <div className="p-4 mb-4 text-green-700 bg-green-100 border border-green-400 rounded">
            {successMessage}
          </div>
        )}
        {errorMessage && (
          <div className="p-4 mb-4 text-red-700 bg-red-100 border border-red-400 rounded">
            {errorMessage}
          </div>
        )}
        <form onSubmit={handlePasswordReset} className="space-y-6">
          <div>
            <label
              htmlFor="password"
              className="block text-sm font-medium text-gray-700"
            >
              New Password
            </label>
            <div className="relative mt-1">
              <input
                type={showPassword ? "text" : "password"}
                id="password"
                className="w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-green-500 focus:border-green-500 sm:text-sm"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                required
              />
              <div
                className="absolute inset-y-0 right-0 flex items-center pr-3 cursor-pointer"
                onClick={() => setShowPassword(!showPassword)}
              >
                {showPassword ? <FaEyeSlash /> : <FaEye />}
              </div>
            </div>
          </div>
          <div>
            <label
              htmlFor="confirmPassword"
              className="block text-sm font-medium text-gray-700"
            >
              Confirm New Password
            </label>
            <div className="relative mt-1">
              <input
                type="password"
                id="confirmPassword"
                name="confirmPassword"
                className="w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-green-500 focus:border-green-500 sm:text-sm"
                value={confirmPassword}
                onChange={(e) => setConfirmPassword(e.target.value)}
                required
              />
            </div>
          </div>
          <button
            type="submit"
            className={`w-full px-4 py-2 text-white bg-green-900 rounded-md hover:bg-green-800 transition duration-300 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-green-500 ${
              isLoading ? "cursor-not-allowed" : ""
            }`}
            disabled={isLoading}
          >
            {isLoading ? "Loading..." : "Reset Password"}
          </button>
        </form>
      </div>
    </div>
  );
};

export default Reset;


