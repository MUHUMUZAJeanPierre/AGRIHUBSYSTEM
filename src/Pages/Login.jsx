// import React, { useState } from "react";
// import { useNavigate } from "react-router-dom";

// const Login = () => {
//   const [formData, setFormData] = useState({ email: "", password: "" });
//   const [loading, setLoading] = useState(false);
//   const navigate = useNavigate();

//   const handleInputChange = (e) => {
//     setFormData({ ...formData, [e.target.name]: e.target.value });
//   };

//   const handleSubmit = async (e) => {
//     e.preventDefault();
//     setLoading(true);

//     try {
//       const response = await fetch("https://bookhub-back.onrender.com/login", {
//         method: "POST",
//         headers: { "Content-Type": "application/json" },
//         body: JSON.stringify(formData),
//       });

//       const data = await response.json();
//       console.log(data)
//       setLoading(false);

//       if (response.ok) {
//         alert("Login successful!");

//         if (formData.email === "admin@gmail.com" && formData.password === "admin@123") {
//           navigate("/dashboard/admin");
//         } else {
//           navigate("/dashboard");
//         }
//       } else {
//         alert(`Login failed: ${data.message || "Invalid credentials"}`);
//       }
//     } catch (error) {
//       alert("Error connecting to the server.");
//       setLoading(false);
//     }
//   };

//   return (
//     <form onSubmit={handleSubmit} className="mt-6">
//       <div className="mb-4">
//         <label className="block text-green-800 font-sm mb-2 text-sm">Email Address</label>
//         <input
//           type="email"
//           name="email"
//           value={formData.email}
//           onChange={handleInputChange}
//           placeholder="Enter your email"
//           className="w-full px-4 py-2 border rounded-md focus:outline-none focus:border-gray-300"
//           required
//         />
//       </div>

//       <div className="mb-4">
//         <label className="block text-green-800 font-sm mb-2 text-sm">Password</label>
//         <input
//           type="password"
//           name="password"
//           value={formData.password}
//           onChange={handleInputChange}
//           placeholder="Enter your password"
//           className="w-full px-4 py-2 border rounded-md focus:outline-none focus:border-gray-300"
//           required
//         />
//       </div>

//       <button
//         type="submit"
//         className="w-full bg-green-800 text-white py-2 text-sm rounded-md font-sm hover:bg-green-700 transition"
//         disabled={loading}
//       >
//         {loading ? "Processing..." : "Login"}
//       </button>
//     </form>
//   );
// };

// export default Login;
import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { Eye, EyeOff, Mail, Lock, LogIn } from "lucide-react";

const Login = () => {
  const [formData, setFormData] = useState({ email: "", password: "" });
  const [errors, setErrors] = useState({ email: "", password: "" });
  const [loading, setLoading] = useState(false);
  const [showPassword, setShowPassword] = useState(false);
  const navigate = useNavigate();

  const validateEmail = (email) => {
    const re = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return re.test(email);
  };

  const validateForm = () => {
    let valid = true;
    const newErrors = { email: "", password: "" };

    if (!formData.email) {
      newErrors.email = "Email is required";
      valid = false;
    } else if (!validateEmail(formData.email)) {
      newErrors.email = "Please enter a valid email";
      valid = false;
    }

    if (!formData.password) {
      newErrors.password = "Password is required";
      valid = false;
    } else if (formData.password.length < 6) {
      newErrors.password = "Password must be at least 6 characters";
      valid = false;
    }

    setErrors(newErrors);
    return valid;
  };

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
    // Clear error when typing
    if (errors[name]) {
      setErrors({ ...errors, [name]: "" });
    }
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    
    if (!validateForm()) return;
    
    setLoading(true);

    try {
      const response = await fetch("https://bookhub-back.onrender.com/login", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(formData),
      });

      const data = await response.json();
      setLoading(false);

      if (response.ok) {
        if (formData.email === "admin@gmail.com" && formData.password === "admin@123") {
          navigate("/dashboard/admin");
        } else {
          navigate("/dashboard");
        }
      } else {
        setErrors({
          ...errors,
          general: data.message || "Invalid credentials. Please try again."
        });
      }
    } catch (error) {
      setErrors({
        ...errors,
        general: "Error connecting to the server. Please try again later."
      });
      setLoading(false);
    }
  };

  const togglePasswordVisibility = () => {
    setShowPassword(!showPassword);
  };

  return (
    <div className=" bg-gray-50">
      <div className="w-full max-w-md space-y-8 bg-white">
        <div className="text-center">
          <h1 className="text-xl font-medium  text-green-800">Welcome Back</h1>
        </div>
        
        {errors.general && (
          <div className="rounded-md bg-red-50 p-4">
            <p className="text-sm text-red-600">{errors.general}</p>
          </div>
        )}
        
        <form className="mt-8 space-y-6" onSubmit={handleSubmit}>
          <div className="space-y-4">
            <div>
              <label htmlFor="email" className="block text-sm font-medium text-gray-700">
                Email Address
              </label>
              <div className="relative mt-1">
                <div className="pointer-events-none absolute inset-y-0 left-0 flex items-center pl-3">
                  <Mail className="h-5 w-5 text-gray-400" />
                </div>
                <input
                  id="email"
                  name="email"
                  type="email"
                  autoComplete="email"
                  value={formData.email}
                  onChange={handleInputChange}
                  className={`block w-full rounded-md border pl-10 py-3 px-4 focus:border-blue-500 focus:ring-blue-500 ${
                    errors.email ? "border-red-300" : "border-gray-300"
                  }`}
                  placeholder="you@example.com"
                />
                {errors.email && (
                  <p className="mt-1 text-sm text-red-600">{errors.email}</p>
                )}
              </div>
            </div>
            
            <div>
              <label htmlFor="password" className="block text-sm font-medium text-gray-700">
                Password
              </label>
              <div className="relative mt-1">
                <div className="pointer-events-none absolute inset-y-0 left-0 flex items-center pl-3">
                  <Lock className="h-5 w-5 text-gray-400" />
                </div>
                <input
                  id="password"
                  name="password"
                  type={showPassword ? "text" : "password"}
                  autoComplete="current-password"
                  value={formData.password}
                  onChange={handleInputChange}
                  className={`block w-full rounded-md border pl-10 py-3 px-4 pr-10 focus:border-blue-500 focus:ring-blue-500 ${
                    errors.password ? "border-red-300" : "border-gray-300"
                  }`}
                  placeholder="••••••••"
                />
                <div className="absolute inset-y-0 right-0 flex items-center pr-3">
                  <button
                    type="button"
                    onClick={togglePasswordVisibility}
                    className="text-gray-400 hover:text-gray-500 focus:outline-none"
                  >
                    {showPassword ? (
                      <EyeOff className="h-5 w-5" />
                    ) : (
                      <Eye className="h-5 w-5" />
                    )}
                  </button>
                </div>
                {errors.password && (
                  <p className="mt-1 text-sm text-red-600">{errors.password}</p>
                )}
              </div>
            </div>
          </div>

          <div className="flex items-center justify-between">
            <div className="flex items-center">
              <input
                id="remember-me"
                name="remember-me"
                type="checkbox"
                className="h-4 w-4 rounded border-gray-300 text-gren-600 focus:ring-green-500"
              />
              <label htmlFor="remember-me" className="ml-2 block text-sm text-gray-700">
                Remember me
              </label>
            </div>
            <div className="text-sm">
              <a href="#" className="font-medium text-green-900 hover:text-green-900">
                Forgot password?
              </a>
            </div>
          </div>

          <button
            type="submit"
            disabled={loading}
            className={`group relative flex w-full justify-center rounded-md bg-green-800 py-3 px-4 text-sm font-medium text-white hover:bg-green-700 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2 ${
              loading ? "opacity-70 cursor-not-allowed" : ""
            }`}
          >
            <span className="absolute inset-y-0 left-0 flex items-center pl-3">
              <LogIn className="h-5 w-5 text-white group-hover:text-white" />
            </span>
            {loading ? "Logging in..." : "Sign in"}
          </button>
        </form>
        
    
      </div>
    </div>
  );
};

export default Login;