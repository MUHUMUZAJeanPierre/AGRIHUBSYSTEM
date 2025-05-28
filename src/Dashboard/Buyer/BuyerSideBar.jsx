// import React from "react";
// import { Link } from "react-router-dom";
// import { IoMdStats } from "react-icons/io";
// import { RiLogoutCircleLine } from "react-icons/ri";
// import { MdOutlineAddShoppingCart } from "react-icons/md";
// import { RiFolderUploadLine } from "react-icons/ri";
// import { CgProfile } from "react-icons/cg";
// import { MdContactSupport } from "react-icons/md";

// function BuyerSideBar() {

//  const handleLogout = () => {
//    const confirmLogout = window.confirm("Are you sure you want to log out?");
//    if (confirmLogout) {
//      localStorage.removeItem("token");
//      window.location.href = "/";
//    }
//  };
//   return (
//     <>
//       <div className=" flex flex-col justify-between text-2xl text-green-900 border-r-2 shadow-xl px-5 py-10 h-[100vh]">
//         <div className="flex flex-col gap-5 w-[36vh]">
//           <div className="w-40 h-20">
//             <img src="../logo.png" alt="logo" />
//           </div>
//           <div className="flex items-center gap-5">
//             <Link
//               to="/dashboard/buyer"
//               className=" flex items-center gap-2 px-3 py-1 rounded-xl hover:text-white hover:bg-green-900"
//             >
//               <IoMdStats />
//               <button>Dashboard</button>
//             </Link>
//           </div>
//           <div className="flex items-center gap-5">
//             <Link
//               to="/dashboard/buyer/allorders"
//               className=" flex items-center gap-2 px-3 py-1 rounded-xl hover:text-white hover:bg-green-900"
//             >
//               <MdOutlineAddShoppingCart />
//               <button>Orders History</button>
//             </Link>
//           </div>
//           <div className="flex items-center gap-5">
//             <Link
//               to="/dashboard/buyer/news"
//               className=" flex items-center gap-2 px-3 py-1 rounded-xl hover:text-white hover:bg-green-900"
//             >
//               <RiFolderUploadLine />
//               <button>News letter</button>
//             </Link>
//           </div>
//         </div>
//         <div className="flex flex-col gap-2">
//           <div className="flex items-center gap-5">
//             <Link
//               to="/dashboard/buyer/profile"
//               className=" flex items-center gap-2 px-3 py-1 rounded-xl hover:text-white hover:bg-green-900"
//             >
//               <CgProfile />
//               <button>Profile</button>
//             </Link>
//           </div>
//           <div className="flex items-center gap-5">
//             <Link
//               to="/dashboard/buyer/support"
//               className=" flex items-center gap-2 px-3 py-1 rounded-xl hover:text-white hover:bg-green-900"
//             >
//               <MdContactSupport />
//               <button>Help & support</button>
//             </Link>
//           </div>
//           <div className="flex items-center gap-5">
//             <Link
//               to="/"
//               onClick={handleLogout}
//               className=" flex items-center gap-2 px-3 py-1 rounded-xl hover:text-white hover:bg-green-900"
//             >
//               <RiLogoutCircleLine />
//               <button>Log Out</button>
//             </Link>
//           </div>
//         </div>
//       </div>
//     </>
//   );
// }

// export default BuyerSideBar;

import React, { useState } from "react";
import { Link, useLocation } from "react-router-dom";
import { IoMdStats } from "react-icons/io";
import { RiLogoutCircleLine } from "react-icons/ri";
import { MdOutlineAddShoppingCart } from "react-icons/md";
import { RiFolderUploadLine } from "react-icons/ri";
import { CgProfile } from "react-icons/cg";
import { MdContactSupport } from "react-icons/md";

function BuyerSideBar() {
  const location = useLocation();
  const [isCollapsed, setIsCollapsed] = useState(false);

  const handleLogout = () => {
    const confirmLogout = window.confirm("Are you sure you want to log out?");
    if (confirmLogout) {
      localStorage.removeItem("token");
      window.location.href = "/";
    }
  };

  const navItems = [
    {
      path: "/dashboard/buyer",
      name: "Dashboard",
      icon: <IoMdStats className="text-xl" />,
    },
    {
      path: "/dashboard/buyer/allorders",
      name: "Orders History",
      icon: <MdOutlineAddShoppingCart className="text-xl" />,
    },
    {
      path: "/dashboard/buyer/news",
      name: "News Letter",
      icon: <RiFolderUploadLine className="text-xl" />,
    },
  ];

  const bottomNavItems = [
    {
      path: "/dashboard/buyer/profile",
      name: "Profile",
      icon: <CgProfile className="text-xl" />,
    },
    {
      path: "/dashboard/buyer/support",
      name: "Help & Support",
      icon: <MdContactSupport className="text-xl" />,
    },
  ];

  const toggleSidebar = () => {
    setIsCollapsed(!isCollapsed);
  };

  return (
    <div className={`relative flex flex-col justify-between bg-white text-green-900 border-r border-gray-200 shadow-md h-screen transition-all duration-300 ${isCollapsed ? "w-20" : "w-64"}`}>
      {/* Toggle button */}
      <button 
        onClick={toggleSidebar}
        className="absolute -right-3 top-10 bg-green-900 text-white p-1 rounded-full shadow-md hover:bg-green-800"
      >
        <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" viewBox="0 0 20 20" fill="currentColor">
          {isCollapsed ? (
            <path fillRule="evenodd" d="M7.293 14.707a1 1 0 010-1.414L10.586 10 7.293 6.707a1 1 0 011.414-1.414l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414 0z" clipRule="evenodd" />
          ) : (
            <path fillRule="evenodd" d="M12.707 5.293a1 1 0 010 1.414L9.414 10l3.293 3.293a1 1 0 01-1.414 1.414l-4-4a1 1 0 010-1.414l4-4a1 1 0 011.414 0z" clipRule="evenodd" />
          )}
        </svg>
      </button>

      {/* Top section */}
      <div className="flex flex-col gap-6 pt-6">
        <div className={`flex justify-center py-2 ${isCollapsed ? "px-2" : "px-6"}`}>
          <img 
            src="../logo.png" 
            alt="logo" 
            className={`${isCollapsed ? "w-12 h-12" : "w-32 h-16"} object-contain`} 
          />
        </div>

        <div className="flex flex-col gap-1 px-2">
          {navItems.map((item) => (
            <Link
              key={item.path}
              to={item.path}
              className={`flex items-center gap-3 p-3 rounded-lg transition-all duration-200 ${
                location.pathname === item.path
                  ? "bg-green-900 text-white"
                  : "hover:bg-green-100"
              }`}
            >
              {item.icon}
              {!isCollapsed && <span className="font-medium">{item.name}</span>}
            </Link>
          ))}
        </div>
      </div>

      {/* Bottom section */}
      <div className="flex flex-col gap-1 px-2 pb-8">
        {bottomNavItems.map((item) => (
          <Link
            key={item.path}
            to={item.path}
            className={`flex items-center gap-3 p-3 rounded-lg transition-all duration-200 ${
              location.pathname === item.path
                ? "bg-green-900 text-white"
                : "hover:bg-green-100"
            }`}
          >
            {item.icon}
            {!isCollapsed && <span className="font-medium">{item.name}</span>}
          </Link>
        ))}

        <button
          onClick={handleLogout}
          className="flex items-center gap-3 p-3 rounded-lg text-red-600 hover:bg-red-50 transition-all duration-200"
        >
          <RiLogoutCircleLine className="text-xl" />
          {!isCollapsed && <span className="font-medium">Log Out</span>}
        </button>
      </div>
    </div>
  );
}

export default BuyerSideBar;