

// import React, { useState } from 'react';
// import { Link } from 'react-router-dom';
// import { IoMenu, IoClose } from "react-icons/io5";

// const Header = () => {
//   const [isMenuOpen, setIsMenuOpen] = useState(false);

//   const toggleMenu = () => setIsMenuOpen((prev) => !prev);
//   const closeMenu = () => setIsMenuOpen(false);

//   const navLinks = [
//     { path: '/', label: 'Home' },
//     { path: '/about', label: 'About' },
//     { path: '/allfarmers', label: 'Farmers' },
//     { path: '/services', label: 'Services' },
//     { path: '/contact', label: 'Contact' },
//   ];

//   return (
//     <>
//       <header className='fixed z-20 w-full bg-white shadow-sm px-6 lg:px-40 py-3 flex justify-between gap-10 items-center text-[16px] text-gray-600 font-[Raleway,sans-serif]'>
//         {/* Logo */}
//         <div>
//           <img src='logo.png' alt='AgriSoko Logo' className='w-28 md:w-36 lg:w-40' />
//         </div>

//         {/* Desktop Nav */}
//         <nav className='hidden md:flex gap-6 lg:gap-10 items-center'>
//           {navLinks.map(({ path, label }) => (
//             <Link
//               key={path}
//               to={path}
//               className='hover:underline hover:decoration-yellow-400 underline-offset-[1vh] transition-all'
//             >
//               {label}
//             </Link>
//           ))}
//           <Link
//             to='/login'
//             className='ml-3 bg-green-900 text-white px-5 py-2 rounded-md hover:bg-yellow-300 hover:text-black transition'
//           >
//             Sign In
//           </Link>
//         </nav>

//         {/* Mobile Menu Icon */}
//         <div className='md:hidden'>
//           <button onClick={toggleMenu} className='text-3xl text-green-800 focus:outline-none'>
//             {isMenuOpen ? <IoClose /> : <IoMenu />}
//           </button>
//         </div>
//       </header>

//       {/* Mobile Slide Menu */}
//       <div className={`fixed top-[72px] right-0 w-[70%] sm:w-[60%] h-[calc(100%-72px)] bg-[#eff2ef] z-10 transform transition-transform duration-500 ease-in-out ${isMenuOpen ? 'translate-x-0' : 'translate-x-full'}`}>
//         <nav className='flex flex-col items-center text-xl gap-6 pt-10 font-[Raleway,sans-serif]'>
//           {navLinks.map(({ path, label }) => (
//             <Link
//               key={path}
//               to={path}
//               className='hover:underline hover:decoration-yellow-400 underline-offset-[1vh]'
//               onClick={closeMenu}
//             >
//               {label}
//             </Link>
//           ))}
//           <Link
//             to='/login'
//             className='bg-green-900 text-white px-5 py-2 rounded-md hover:bg-yellow-300 hover:text-black transition'
//             onClick={closeMenu}
//           >
//             Sign In
//           </Link>
//         </nav>
//       </div>
//     </>
//   );
// };

// export default Header;
// import React, { useState, useEffect } from 'react';
// import { Link, useLocation } from 'react-router-dom';
// import { IoMenu, IoClose } from "react-icons/io5";

// const Header = () => {
//   const [isMenuOpen, setIsMenuOpen] = useState(false);
//   const [isScrolled, setIsScrolled] = useState(false);
//   const location = useLocation();

//   const toggleMenu = () => setIsMenuOpen((prev) => !prev);
//   const closeMenu = () => setIsMenuOpen(false);

//   // Handle scroll effect
//   useEffect(() => {
//     const handleScroll = () => {
//       setIsScrolled(window.scrollY > 20);
//     };

//     window.addEventListener('scroll', handleScroll);
//     return () => window.removeEventListener('scroll', handleScroll);
//   }, []);

//   // Close mobile menu when route changes
//   useEffect(() => {
//     closeMenu();
//   }, [location.pathname]);

//   const navLinks = [
//     { path: '/', label: 'Home' },
//     { path: '/about', label: 'About' },
//     { path: '/allfarmers', label: 'Farmers' },
//     { path: '/services', label: 'Services' },
//     { path: '/contact', label: 'Contact' },
//   ];

//   return (
//     <>
//       <header 
//         className={`fixed z-20 w-full bg-white px-6  lg:px-16 xl:px-24 py-4 flex justify-between items-center font-raleway transition-all duration-300 ${
//           isScrolled ? 'shadow-md' : 'shadow-sm'
//         }`}
//       >
//         {/* Logo Container with increased spacing */}
//         <div className="flex-shrink-0 mr-8 md:mr-16 lg:mr-20 xl:mr-32">
//           <Link to="/" className="block">
//             <img 
//               src='logo.png' 
//               alt='AgriSoko Logo' 
//               className='w-28 md:w-36 lg:w-40 transition-all duration-300' 
//             />
//           </Link>
//         </div>

//         {/* Desktop Nav - with proper spacing and active state */}
//         <nav className='hidden md:flex gap-6 lg:gap-10 items-center ml-auto'>
//           {navLinks.map(({ path, label }) => (
//             <Link
//               key={path}
//               to={path}
//               className={`text-gray-600 hover:text-gray-900 relative text-base lg:text-lg font-medium transition-all
//                 after:content-[''] after:absolute after:w-0 after:h-0.5 after:bg-yellow-400 after:left-0 after:bottom-[-6px] after:transition-all after:duration-300
//                 hover:after:w-full ${location.pathname === path ? 'text-gray-900 after:w-full' : ''}`}
//             >
//               {label}
//             </Link>
//           ))}
//           <Link
//             to='/login'
//             className='ml-3 lg:ml-6 bg-green-900 text-white px-6 py-2.5 rounded-md hover:bg-yellow-400 hover:text-black transition-all duration-300 shadow-sm hover:shadow-md text-base font-medium'
//           >
//             Sign In
//           </Link>
//         </nav>

//         {/* Mobile Menu Icon with improved styling */}
//         <div className='md:hidden'>
//           <button 
//             onClick={toggleMenu} 
//             className='text-3xl text-green-800 p-1 focus:outline-none hover:text-yellow-500 transition-colors duration-300'
//             aria-label={isMenuOpen ? 'Close menu' : 'Open menu'}
//           >
//             {isMenuOpen ? <IoClose /> : <IoMenu />}
//           </button>
//         </div>
//       </header>

//       {/* Mobile Menu Overlay */}
//       {isMenuOpen && (
//         <div 
//           className="fixed inset-0 bg-black/20 z-10 md:hidden"
//           onClick={closeMenu}
//           aria-hidden="true"
//         />
//       )}

//       {/* Mobile Slide Menu with improved styling */}
//       <div 
//         className={`fixed top-0 right-0 w-[75%] sm:w-[55%] h-full bg-white z-10 transform transition-transform duration-400 ease-in-out shadow-xl md:hidden ${
//           isMenuOpen ? 'translate-x-0' : 'translate-x-full'
//         }`}
//       >
//         {/* Mobile menu header */}
//         <div className="flex justify-between items-center px-6 py-4 border-b border-gray-100">
//           <img src='logo.png' alt='AgriSoko Logo' className='w-24 sm:w-28' />
//           <button 
//             onClick={closeMenu} 
//             className='text-3xl text-green-800 p-1 focus:outline-none hover:text-yellow-500 transition-colors'
//             aria-label="Close menu"
//           >
//             <IoClose />
//           </button>
//         </div>

//         {/* Mobile menu links */}
//         <nav className='flex flex-col pt-6 px-6 font-raleway'>
//           {navLinks.map(({ path, label }) => (
//             <Link
//               key={path}
//               to={path}
//               className={`py-4 text-lg font-medium border-b border-gray-100 ${
//                 location.pathname === path 
//                   ? 'text-green-800 border-l-4 border-l-green-800 pl-3 -ml-3' 
//                   : 'text-gray-600 hover:text-green-700'
//               }`}
//               onClick={closeMenu}
//             >
//               {label}
//             </Link>
//           ))}
//           <Link
//             to='/login'
//             className='mt-6 bg-green-900 text-white py-3 rounded-md hover:bg-yellow-400 hover:text-black transition-all duration-300 text-center font-medium shadow-sm'
//             onClick={closeMenu}
//           >
//             Sign In
//           </Link>
//         </nav>
//       </div>
//     </>
//   );
// };

// export default Header;


import React, { useState } from "react";
import { Link as ScrollLink } from "react-scroll";
import { Link, Link as RouterLink } from "react-router-dom";
import { IoMenu, IoClose } from "react-icons/io5";
import { PhoneCall } from "lucide-react";

const Header = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => setIsOpen((prev) => !prev);
  const closeMenu = () => setIsOpen(false);

  return (
    <header className="bg-white shadow-md">
      <div className="flex flex-col items-center justify-center">
        <nav className="flex justify-between items-center px-10 py-5 w-full bg-[rgba(0,0,0,0.09)] mx-auto fixed top-0 left-0 right-0 z-50 backdrop-blur-md">
          <div>
            <h1 className="text-xl font-medium text-green-900">
              AGRI<span className="text-green-900">HUB</span>
            </h1>
          </div>

          <ul className="hidden md:flex space-x-6 text-gray-500  font-medium">
            <li className="nav-item cursor-pointer ">
              <RouterLink to="/">Home</RouterLink>
            </li>
              <li className="nav-item cursor-pointer ">
              <Link to="/about" smooth={true} duration={500}>
                About
              </Link>
            </li>
            <li className="nav-item cursor-pointer ">
              <Link to="/shop" smooth={true} duration={500}>
                Shop
              </Link>
            </li>
            <li className="nav-item cursor-pointer ">
              <ScrollLink to="popular" smooth={true} duration={500}>
                All Farmers
              </ScrollLink>
            </li>
            <li className="nav-item cursor-pointer ">
              <Link to="services" smooth={true} duration={500}>
                services
              </Link>
            </li>
          </ul>
          <div className="flex gap-2 items-center">
          <div className="bg-green-900 text-white px-4 py-2 rounded-md flex items-center gap-2">
            <PhoneCall />
            <div className="text-sm">
              <div className="text-xs">Call Anytime</div>
              <div className="font-semibold">250 784 127 871</div>
            </div>
          </div>
            <RouterLink to="/login" className="hidden md:block">
            <button className="text-green-800 border px-5 py-3 rounded-lg">
              JOIN NOW
            </button>
          </RouterLink>

          </div>

          <div className="md:hidden text-green-900 text-2xl">
            <button onClick={toggleMenu}>
              {isOpen ? <IoClose /> : <IoMenu />}
            </button>
          </div>
        </nav>
        {isOpen && (
          <div className="md:hidden fixed top-[70px] left-0 right-0 w-full h-screen bg-white z-40 shadow-md overflow-y-auto">
            <div className="max-w-7xl mx-auto px-6 md:px-20 py-6">
              <div className="flex flex-col justify-start items-start space-y-6 text-green-800 font-medium">
                <RouterLink to="/" onClick={closeMenu}>Home</RouterLink>
                <ScrollLink to="features" smooth={true} duration={500} onClick={closeMenu}>
                  Features
                </ScrollLink>
                <ScrollLink to="popular" smooth={true} duration={500} onClick={closeMenu}>
                  All Farmers
                </ScrollLink>
                <ScrollLink to="library" smooth={true} duration={500} onClick={closeMenu}>
                  Services
                </ScrollLink>
                <ScrollLink to="contact" smooth={true} duration={500} onClick={closeMenu}>
                  Contact
                </ScrollLink>
                <RouterLink to="/login" onClick={closeMenu} className="w-full">
                  <button className="w-full bg-green-700 text-white py-3 rounded-md font-semibold hover:bg-green-800 transition">
                    JOIN NOW
                  </button>
                </RouterLink>
              </div>
            </div>
          </div>
        )}

      </div>
    </header>
  );
};

export default Header;
