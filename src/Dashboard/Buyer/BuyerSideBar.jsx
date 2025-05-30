// import React, { useState, useEffect } from "react";
// import { Link, useLocation } from "react-router-dom";
// import { IoMdStats } from "react-icons/io";
// import { RiLogoutCircleLine } from "react-icons/ri";
// import { MdOutlineAddShoppingCart } from "react-icons/md";
// import { RiFolderUploadLine } from "react-icons/ri";
// import { CgProfile } from "react-icons/cg";
// import { MdContactSupport } from "react-icons/md";

// function BuyerSideBar() {
//   const location = useLocation();
//   const [isCollapsed, setIsCollapsed] = useState(window.innerWidth < 768);

//   useEffect(() => {
//     const handleResize = () => setIsCollapsed(window.innerWidth < 768);
//     window.addEventListener("resize", handleResize);
//     return () => window.removeEventListener("resize", handleResize);
//   }, []);

//   const handleLogout = () => {
//     const confirmLogout = window.confirm("Are you sure you want to log out?");
//     if (confirmLogout) {
//       localStorage.removeItem("token");
//       window.location.href = "/";
//     }
//   };

//   const navItems = [
//     { path: "/dashboard/buyer", name: "Dashboard", icon: <IoMdStats className="text-xl" /> },
//     { path: "/dashboard/buyer/allorders", name: "Orders History", icon: <MdOutlineAddShoppingCart className="text-xl" /> },
//     { path: "/dashboard/buyer/news", name: "News Letter", icon: <RiFolderUploadLine className="text-xl" /> }
//   ];

//   const bottomNavItems = [
//     { path: "/dashboard/buyer/profile", name: "Profile", icon: <CgProfile className="text-xl" /> },
//     { path: "/dashboard/buyer/support", name: "Help & Support", icon: <MdContactSupport className="text-xl" /> }
//   ];

//   return (
//     <div className={`relative flex flex-col justify-between bg-white text-green-900 border-r border-gray-200 shadow-md h-screen transition-all duration-300 ${isCollapsed ? "w-20" : "w-64"}`}>
//       <button 
//         onClick={() => setIsCollapsed(!isCollapsed)}
//         className="absolute right-2 top-2 md:-right-3 md:top-10 bg-green-900 text-white p-1 rounded-full shadow-md hover:bg-green-800"
//       >
//         <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" viewBox="0 0 20 20" fill="currentColor">
//           {isCollapsed ? (
//             <path fillRule="evenodd" d="M7.293 14.707a1 1 0 010-1.414L10.586 10 7.293 6.707a1 1 0 011.414-1.414l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414 0z" clipRule="evenodd" />
//           ) : (
//             <path fillRule="evenodd" d="M12.707 5.293a1 1 0 010 1.414L9.414 10l3.293 3.293a1 1 0 01-1.414 1.414l-4-4a1 1 0 010-1.414l4-4a1 1 0 011.414 0z" clipRule="evenodd" />
//           )}
//         </svg>
//       </button>

//       <div className="flex flex-col gap-6 pt-6 overflow-auto">
//         <div className={`flex justify-center py-2 ${isCollapsed ? "px-2" : "px-6"}`}>
//           <img src="../logo.png" alt="logo" className={`${isCollapsed ? "w-10" : "w-32"} h-auto object-contain`} />
//         </div>

//         <div className="flex flex-col gap-1 px-2">
//           {navItems.map((item) => (
//             <Link
//               key={item.path}
//               to={item.path}
//               className={`flex items-center gap-3 p-3 rounded-lg transition-all duration-200 ${location.pathname === item.path ? "bg-green-900 text-white" : "hover:bg-green-100"}`}
//             >
//               {item.icon}
//               {!isCollapsed && <span className="font-medium text-sm">{item.name}</span>}
//             </Link>
//           ))}
//         </div>
//       </div>

//       <div className="flex flex-col gap-1 px-2 pb-4">
//         {bottomNavItems.map((item) => (
//           <Link
//             key={item.path}
//             to={item.path}
//             className={`flex items-center gap-3 p-3 rounded-lg transition-all duration-200 ${location.pathname === item.path ? "bg-green-900 text-white" : "hover:bg-green-100"}`}
//           >
//             {item.icon}
//             {!isCollapsed && <span className="font-medium text-sm">{item.name}</span>}
//           </Link>
//         ))}

//         <button
//           onClick={handleLogout}
//           className="flex items-center gap-3 p-3 rounded-lg text-red-600 hover:bg-red-50 transition-all duration-200"
//         >
//           <RiLogoutCircleLine className="text-xl" />
//           {!isCollapsed && <span className="font-medium text-sm">Log Out</span>}
//         </button>
//       </div>
//     </div>
//   );
// }

// export default BuyerSideBar;
import React, { useState, useEffect } from "react";
import { Link, useLocation } from "react-router-dom";
import { IoMdStats, IoMdNotifications } from "react-icons/io";
import { RiLogoutCircleLine, RiFolderUploadLine, RiShoppingBag3Line } from "react-icons/ri";
import { MdOutlineAddShoppingCart, MdContactSupport, MdFavorite, MdSettings } from "react-icons/md";
import { CgProfile } from "react-icons/cg";
import { BiWallet, BiSearch } from "react-icons/bi";
import { FiMessageSquare } from "react-icons/fi";

function BuyerSideBar() {
  const location = useLocation();
  const [isCollapsed, setIsCollapsed] = useState(window.innerWidth < 768);
  const [notifications, setNotifications] = useState(3); // Mock notification count
  const [userName, setUserName] = useState("John Doe"); // Mock user name

  useEffect(() => {
    const handleResize = () => setIsCollapsed(window.innerWidth < 768);
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  useEffect(() => {
    // Mock: Get user name from localStorage or API
    const storedUserName = localStorage.getItem("userName");
    if (storedUserName) {
      setUserName(storedUserName);
    }
  }, []);

  const handleLogout = () => {
    const confirmLogout = window.confirm("Are you sure you want to log out?");
    if (confirmLogout) {
      localStorage.removeItem("token");
      localStorage.removeItem("userName");
      window.location.href = "/";
    }
  };

  const navItems = [
    { 
      path: "/dashboard/buyer", 
      name: "Dashboard", 
      icon: <IoMdStats className="text-xl" />,
      description: "Overview & Analytics"
    },
    { 
      path: "/dashboard/buyer/browse", 
      name: "Browse Products", 
      icon: <BiSearch className="text-xl" />,
      description: "Discover new items"
    },
    { 
      path: "/dashboard/buyer/allorders", 
      name: "Orders History", 
      icon: <MdOutlineAddShoppingCart className="text-xl" />,
      description: "Track your purchases"
    },
    { 
      path: "/dashboard/buyer/cart", 
      name: "Shopping Cart", 
      icon: <RiShoppingBag3Line className="text-xl" />,
      description: "Items ready to buy"
    },
    { 
      path: "/dashboard/buyer/wishlist", 
      name: "Wishlist", 
      icon: <MdFavorite className="text-xl" />,
      description: "Saved for later"
    },
    { 
      path: "/dashboard/buyer/wallet", 
      name: "Wallet", 
      icon: <BiWallet className="text-xl" />,
      description: "Manage payments"
    },
    { 
      path: "/dashboard/buyer/messages", 
      name: "Messages", 
      icon: <FiMessageSquare className="text-xl" />,
      description: "Chat with sellers"
    },
    { 
      path: "/dashboard/buyer/notifications", 
      name: "Notifications", 
      icon: <IoMdNotifications className="text-xl" />,
      badge: notifications > 0 ? notifications : null,
      description: "Latest updates"
    },
    { 
      path: "/dashboard/buyer/news", 
      name: "Newsletter", 
      icon: <RiFolderUploadLine className="text-xl" />,
      description: "Latest news & offers"
    }
  ];

  const bottomNavItems = [
    { 
      path: "/dashboard/buyer/profile", 
      name: "Profile", 
      icon: <CgProfile className="text-xl" />,
      description: "Personal information"
    },
    { 
      path: "/dashboard/buyer/settings", 
      name: "Settings", 
      icon: <MdSettings className="text-xl" />,
      description: "App preferences"
    },
    { 
      path: "/dashboard/buyer/support", 
      name: "Help & Support", 
      icon: <MdContactSupport className="text-xl" />,
      description: "Get assistance"
    }
  ];

  const NavItem = ({ item, isActive }) => (
    <Link
      to={item.path}
      className={`group relative flex items-center gap-3 p-3 rounded-lg transition-all duration-200 ${
        isActive ? "bg-green-900 text-white shadow-lg" : "hover:bg-green-100 hover:shadow-sm"
      }`}
      title={isCollapsed ? item.name : ""}
    >
      <div className="relative">
        {item.icon}
        {item.badge && (
          <span className="absolute -top-2 -right-2 bg-red-500 text-white text-xs rounded-full h-5 w-5 flex items-center justify-center">
            {item.badge > 9 ? "9+" : item.badge}
          </span>
        )}
      </div>
      {!isCollapsed && (
        <div className="flex flex-col">
          <span className="font-medium text-sm">{item.name}</span>
          {item.description && (
            <span className="text-xs opacity-75">{item.description}</span>
          )}
        </div>
      )}
    </Link>
  );

  return (
    <div className={`relative flex flex-col bg-white text-green-900 border-r border-gray-200 shadow-md h-screen transition-all duration-300 ${isCollapsed ? "w-20" : "w-72"}`}>
      {/* Toggle Button */}
      <button 
        onClick={() => setIsCollapsed(!isCollapsed)}
        className="absolute right-2 top-2 md:-right-3 md:top-10 bg-green-800 text-white p-1 rounded-full shadow-md hover:bg-green-800 transition-colors duration-200 z-10"
        aria-label={isCollapsed ? "Expand sidebar" : "Collapse sidebar"}
      >
        <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" viewBox="0 0 20 20" fill="currentColor">
          {isCollapsed ? (
            <path fillRule="evenodd" d="M7.293 14.707a1 1 0 010-1.414L10.586 10 7.293 6.707a1 1 0 011.414-1.414l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414 0z" clipRule="evenodd" />
          ) : (
            <path fillRule="evenodd" d="M12.707 5.293a1 1 0 010 1.414L9.414 10l3.293 3.293a1 1 0 01-1.414 1.414l-4-4a1 1 0 010-1.414l4-4a1 1 0 011.414 0z" clipRule="evenodd" />
          )}
        </svg>
      </button>

      {/* Header Section */}
      <div className="flex flex-col border-b border-gray-200 pb-4">
        {/* <div className={`flex justify-center py-4 ${isCollapsed ? "px-2" : "px-6"}`}>
          <img 
            src="../logo.png" 
            alt="logo" 
            className={`${isCollapsed ? "w-10" : "w-32"} h-auto object-contain transition-all duration-300`} 
          />
        </div> */}

        {/* User Info */}
        {!isCollapsed && (
          <div className="px-6 py-2">
            <div className="flex items-center gap-3 p-3 bg-green-50 rounded-lg">
              <div className="w-10 h-10 bg-green-200 rounded-full flex items-center justify-center">
                <CgProfile className="text-green-900 text-lg" />
              </div>
              <div className="flex flex-col">
                <span className="font-semibold text-sm text-green-900">Welcome back!</span>
                <span className="text-xs text-green-900">{userName}</span>
              </div>
            </div>
          </div>
        )}
      </div>

      <div className="flex-1 flex flex-col gap-1 px-2 py-4 overflow-y-auto scrollbar-thin scrollbar-thumb-green-600 scrollbar-track-transparent">
        {navItems.map((item) => (
          <NavItem 
            key={item.path} 
            item={item} 
            isActive={location.pathname === item.path}
          />
        ))}
      </div>

      <div className="flex flex-col gap-1 px-2 py-4 border-t border-gray-200">
        {bottomNavItems.map((item) => (
          <NavItem 
            key={item.path} 
            item={item} 
            isActive={location.pathname === item.path}
          />
        ))}

        <button
          onClick={handleLogout}
          className="flex items-center gap-3 p-3 rounded-lg text-red-600 hover:bg-red-50 hover:shadow-sm transition-all duration-200 group"
          title={isCollapsed ? "Log Out" : ""}
        >
          <RiLogoutCircleLine className="text-xl" />
          {!isCollapsed && (
            <div className="flex flex-col">
              <span className="font-medium text-sm">Log Out</span>
              <span className="text-xs opacity-75">Sign out securely</span>
            </div>
          )}
        </button>
      </div>

      {isCollapsed && (
        <div className="absolute bottom-2 left-1/2 transform -translate-x-1/2">
          <div className="w-2 h-2 bg-green-400 rounded-full animate-pulse" title="System Online"></div>
        </div>
      )}
    </div>
  );
}

export default BuyerSideBar;