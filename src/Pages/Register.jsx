import React, { useState, useEffect } from "react";
import { FaEye, FaEyeSlash, FaUser, FaEnvelope, FaPhone, FaLock, FaUserTag, FaCheckCircle } from "react-icons/fa";
import { useNavigate } from "react-router-dom";
import { ImSpinner8 } from "react-icons/im";

const Register = ({ setIsLogin }) => {
  const navigate = useNavigate();
  const [formData, setFormData] = useState({
    username: "",
    email: "",
    phone: "",
    password: "",
    confirmPassword: "",
    role: "farmer", // Default role
  });
  const [errors, setErrors] = useState({});
  const [loading, setLoading] = useState(false);
  const [showPassword, setShowPassword] = useState(false);
  const [showConfirmPassword, setShowConfirmPassword] = useState(false);
  const [generalError, setGeneralError] = useState("");
  const [step, setStep] = useState(1);
  const [registrationSuccess, setRegistrationSuccess] = useState(false);

  const roles = [
    { id: "farmer", label: "Farmer" },
    { id: "buyer", label: "Buyer" },
    { id: "goverment", label: "Government Official" },
  ];

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
    
    // Clear error for the field being edited
    if (errors[name]) {
      setErrors({ ...errors, [name]: "" });
    }
    
    // Clear general error when user starts typing again
    if (generalError) {
      setGeneralError("");
    }
  };

  const togglePasswordVisibility = (field) => {
    if (field === "password") {
      setShowPassword(!showPassword);
    } else {
      setShowConfirmPassword(!showConfirmPassword);
    }
  };

  const validateForm = () => {
    const newErrors = {};
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    const phoneRegex = /^\d{10}$/;

    if (!formData.username.trim()) newErrors.username = "Full name is required";
    if (!formData.email.trim()) {
      newErrors.email = "Email is required";
    } else if (!emailRegex.test(formData.email)) {
      newErrors.email = "Invalid email format";
    }
    
    if (!formData.phone.trim()) {
      newErrors.phone = "Phone number is required";
    } else if (!phoneRegex.test(formData.phone)) {
      newErrors.phone = "Phone number must be 10 digits";
    }
    
    if (!formData.password) {
      newErrors.password = "Password is required";
    } else if (formData.password.length < 6) {
      newErrors.password = "Password must be at least 6 characters";
    }
    
    if (!formData.confirmPassword) {
      newErrors.confirmPassword = "Please confirm your password";
    } else if (formData.password !== formData.confirmPassword) {
      newErrors.confirmPassword = "Passwords do not match";
    }

    if (!formData.role) {
      newErrors.role = "Please select a role";
    }

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!validateForm()) return;

    setLoading(true);
    try {
      const response = await fetch("https://bookhub-back.onrender.com/register", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          username: formData.username,
          email: formData.email,
          phone: formData.phone,
          password: formData.password,
          role: formData.role, // Send role to the backend
        }),
      });

      const data = await response.json();
      if (response.ok) {
        // Store role in localStorage
        localStorage.setItem("userRole", formData.role);
        
        // Success notification
        setGeneralError("");
        navigate("/otp", { 
          state: { message: "Registration successful! Please log in to continue." } 
        });
      } else {
        setGeneralError(data.message || "Registration failed. Please try again.");
      }
    } catch (error) {
      console.error("Registration error:", error);
      setGeneralError("Server error. Please try again later.");
    } finally {
      setLoading(false);
    }
  };

  const nextStep = () => {
    const fieldsToValidate = step === 1 
      ? ["username", "email", "phone"] 
      : ["password", "confirmPassword"];
    
    const stepErrors = {};
    fieldsToValidate.forEach(field => {
      if (!formData[field]) {
        stepErrors[field] = `${field.charAt(0).toUpperCase() + field.slice(1)} is required`;
      }
    });
    
    // Additional validations
    if (step === 1) {
      const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
      const phoneRegex = /^\d{10}$/;
      
      if (formData.email && !emailRegex.test(formData.email)) {
        stepErrors.email = "Invalid email format";
      }
      
      if (formData.phone && !phoneRegex.test(formData.phone)) {
        stepErrors.phone = "Phone number must be 10 digits";
      }
    }
    
    setErrors(stepErrors);
    
    if (Object.keys(stepErrors).length === 0) {
      setStep(2);
    }
  };

  const prevStep = () => {
    setStep(1);
  };

  const renderFieldIcon = (name) => {
    switch (name) {
      case "username": return <FaUser className="text-gray-400" />;
      case "email": return <FaEnvelope className="text-gray-400" />;
      case "phone": return <FaPhone className="text-gray-400" />;
      case "password": 
      case "confirmPassword": 
        return <FaLock className="text-gray-400" />;
      case "role": return <FaUserTag className="text-gray-400" />;
      default: return null;
    }
  };

  const renderFormField = (name, label, type = "text") => {
    const isPasswordField = name === "password" || name === "confirmPassword";
    const showPasswordState = name === "password" ? showPassword : showConfirmPassword;
    
    return (
      <div className="">
        <label className="block text-sm font-medium text-gray-700 mb-1">{label}</label>
        <div className="relative">
          <div className="absolute left-3 top-3">
            {renderFieldIcon(name)}
          </div>
          <input
            type={isPasswordField ? (showPasswordState ? "text" : "password") : type}
            name={name}
            value={formData[name]}
            onChange={handleInputChange}
            className="w-full pl-10 pr-10 py-2 border rounded-md focus:ring-2 focus:ring-green-600 focus:border-green-600 transition-colors"
            placeholder={`Enter your ${label.toLowerCase()}`}
          />
          {isPasswordField && (
            <span
              onClick={() => togglePasswordVisibility(name)}
              className="absolute top-3 right-3 cursor-pointer text-gray-500 hover:text-gray-700"
            >
              {showPasswordState ? <FaEyeSlash /> : <FaEye />}
            </span>
          )}
        </div>
        {errors[name] && <p className="text-red-500 text-sm mt-1">{errors[name]}</p>}
      </div>
    );
  };

  const renderRoleSelector = () => {
    return (
      <div className="mb-4">
        <label className="block text-sm font-medium text-gray-700 mb-1">Select Your Role</label>
        <div className="relative">
          <div className="absolute left-3 top-3">
            <FaUserTag className="text-gray-400" />
          </div>
          <select
            name="role"
            value={formData.role}
            onChange={handleInputChange}
            className="w-full pl-10 pr-4 py-2 border rounded-md focus:ring-2 focus:ring-green-600 focus:border-green-600 transition-colors appearance-none"
          >
            {roles.map((role) => (
              <option key={role.id} value={role.id}>
                {role.label}
              </option>
            ))}
          </select>
        </div>
        {errors.role && <p className="text-red-500 text-sm mt-1">{errors.role}</p>}
      </div>
    );
  };

  return (
    <div className="bg-gray-50">
      <div className="bg-white rounded-xl w-full max-w-md">
        <h2 className="text-xl font-medium text-green-800 mb-6 text-center">Create Your Account</h2>
        
        {generalError && (
          <div className="mb-4 p-3 bg-red-50 border border-red-200 text-red-600 rounded-md text-sm">
            {generalError}
          </div>
        )}
        
        {registrationSuccess ? (
          <div className="flex flex-col items-center justify-center py-12">
            <div className="mb-4 flex items-center justify-center">
              <ImSpinner8 className="animate-spin text-green-900 text-4xl" />
            </div>
            <div className="flex items-center gap-2 text-green-900">
              <FaCheckCircle />
              <p className="text-lg font-medium">Registration Successful!</p>
            </div>
            <p className="text-gray-500 mt-2 text-center">Redirecting you to login...</p>
          </div>
        ) : (
          <>
            <div className="mb-6 flex justify-between">
              <div className={`h-1 w-1/2 ${step === 1 ? 'bg-green-800' : 'bg-green-200'} rounded-l-full`}></div>
              <div className={`h-1 w-1/2 ${step === 2 ? 'bg-green-800' : 'bg-green-200'} rounded-r-full`}></div>
            </div>
            
            <form onSubmit={handleSubmit}>
              {step === 1 ? (
                <div className="space-y-1">
                  <p className="text-sm text-gray-500 mb-4">Step 1: Personal Information</p>
                  {renderFormField("username", "Full Name")}
                  {renderFormField("email", "Email", "email")}
                  {renderFormField("phone", "Phone Number", "tel")}
                  {renderRoleSelector()}
                  
                  <button
                    type="button"
                    onClick={nextStep}
                    className="w-full mt-6 bg-green-800 text-white py-3 rounded-md hover:bg-green-700 transition-colors focus:outline-none focus:ring-2 focus:ring-green-500 focus:ring-offset-2"
                  >
                    Continue
                  </button>
                </div>
              ) : (
                <div className="space-y-1">
                  <p className="text-sm text-gray-500 mb-4">Step 2: Set Your Password</p>
                  {renderFormField("password", "Password")}
                  {renderFormField("confirmPassword", "Confirm Password")}
                  
                  <div className="flex gap-4 mt-6">
                    <button
                      type="button"
                      onClick={prevStep}
                      className="w-1/3 bg-gray-200 text-gray-800 py-3 rounded-md hover:bg-gray-300 transition-colors focus:outline-none focus:ring-2 focus:ring-gray-400 focus:ring-offset-2"
                    >
                      Back
                    </button>
                    <button
                      type="submit"
                      disabled={loading}
                      className="w-2/3 bg-green-800 text-white py-3 rounded-md hover:bg-green-700 transition-colors focus:outline-none focus:ring-2 focus:ring-green-500 focus:ring-offset-2 disabled:opacity-70 disabled:cursor-not-allowed"
                    >
                      {loading ? (
                        <div className="flex items-center justify-center gap-2">
                          <ImSpinner8 className="animate-spin" />
                          <span>Creating Account...</span>
                        </div>
                      ) : "Register"}
                    </button>
                  </div>
                </div>
              )}
            </form>
          </>
        )}
      </div>
    </div>
  );
};

export default Register;