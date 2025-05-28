// import React from 'react'
// import { Link } from 'react-router-dom'
// import { PiArrowBendDownLeftThin } from "react-icons/pi";
// import { MdOutlineFacebook } from "react-icons/md";
// import { FaTwitter } from "react-icons/fa6";
// import { FaInstagram } from "react-icons/fa6";
// import { FaPinterestP } from "react-icons/fa";

// const Home = () => {
//   return (
//     <>
//       <div>
//         <div className='relative'>
//           <img src='logincp.jpg' className=' lg:h-[100vh] md:h-[90vh] sm:h-[100vh] w-full object-cover'></img>
//           <div className='text-white mt-[10rem] absolute lg:top-24 md:top-14 sm:top-14 lg:left-48 md:left-20 sm:left-10 flex flex-col lg:gap-10 md:gap-7 sm:gap-5'>
//             <p className='underline underline-offset-8'>WE'RE AGRISUPPLY CHAIN COMMUNITY</p>
//             <p className='lg:text-7xl md:text-6xl sm:text-4xl lg:w-[80vh] md:w-[80vh] sm:w-[40vh]'>Welcome to AgriSoko Connect</p>
//             <p className='lg:w-[70vh] md:w-[70vh] sm:w-[40vh]'>Empowering farmers, bridging markets, revolutionizing agriculture through seamless market connections</p>
//             <div className='flex gap-8 relative'>
//               <Link to='/about'><button className='bg-yellow-300 rounded-2xl text-black p-3 px-5 hover:text-white hover:bg-green-900 transition duration-300 ease-in-out'>DISCOVER MORE</button></Link>
//               <div className=' absolute bottom-0 left-56'>
//                 <PiArrowBendDownLeftThin className='text-yellow-300 text-8xl lg:block md:block sm:hidden' />
//               </div>
//             </div>
//           </div>
//         </div>

//         <div>
//           <div className='bg-[#eaeaf1] relative'>
//             <div className='absolute bottom-0 left-60'>
//             </div>
//             <div className=' w-20 h-40 bg-[#5f766f] opacity-60 absolute rounded-r-xl top-32 left-0'></div>
//             <div className='w-14 h-12 bg-yellow-300 opacity-90 absolute  rounded-2xl top-[36vh] left-12'></div>
//             <div className='py-32 flex lg:flex-row md:flex-row sm:flex-col items-center justify-center gap-10'>
//               <div className='lg:w-[69vh] md:w-[44vh] sm:w-[44vh] flex flex-col lg:p-0 md:p-0 sm:p-3 gap-3'>
//                 <p className='text-lg'>Get to know our priority:</p>
//                 <p className='text-4xl text-green-900'>Harvest Showcasing</p>
//                 <p className='text-lg text-justify'>Cooperatives celebrating the food they grow, proudly show them off to everyone
//                   and throughout the day, they engage with the distributors and vendors for increasing MARKET ACCESS
//                   bridge the gap between farmers and buyers, promote agricultural development, and empower farmers through technology.
//                 </p>
//                 <p className=''><i>It is marvelous seeing farmers benefiting from what they have made </i></p>
//               </div>
//               <div>
//                 <img src='Growth.jpg' className='lg:w-[66vh] md:w-[56vh] sm:w-[66vh] rounded-lg'></img>
//               </div>
//             </div>
//           </div>

//         </div>

//         {/* VIDEO */}

//         <div>

//         </div>


//         {/* MISSION, VISION & VALUES */}

//         <div className='flex lg:flex-row md:flex-col sm:flex-col items-center justify-evenly text-white px-40 py-20 bg-cover bg-no-repeat lg:pl-32 md:pl-0 sm:pl-10'
//           style={{ backgroundImage: "url('Mission.jpg')" }}
//         >
//           <div className='flex flex-col gap-7 md:pl-0 lg:pl-0 sm:pl-32 mb-10'>
//             <p className='text-2xl'>MISSION</p>
//             <div>
//               <p className=' lg:border-r-2 border-gray-400 lg:w-[50vh] md:w-[60vh] sm:w-[40vh] text-lg pr-5'>create a transparent, efficient, and inclusive agricultural marketplace that connects farmers, buyers,
//                 and other stakeholders, enabling fair and profitable transactions while promoting sustainability
//                 and economic growth in rural communities.
//               </p>
//             </div>

//           </div>
//           <div className='flex flex-col gap-7 sm:pl-16 mb-10'>
//             <p className='text-2xl md:pl-0 sm:pl-7'>VISION</p>
//             <p className='lg:border-r-2 border-gray-400 lg:w-[50vh] md:w-[70vh] sm:w-[40vh] lg:pl-0 md:pl-0 sm:pl-8 text-lg pr-5'>
//               revolutionize agricultural trade by leveraging technology to bridge the gap
//               between producers and consumers, ensuring food security, empowering farmers, and fostering prosperity
//               across the agricultural value chain.
//             </p>
//           </div>
//           <div className='flex flex-col gap-7 lg:mt-0 md:mt-0 sm:mt-10'>
//             <p className='text-2xl'>VALUES</p>
//             <div>
//               <ol className=' text-lg'>
//                 <li>Transparency</li>
//                 <li>Empowerment</li>
//                 <li>Sustainability</li>
//                 <li>Community collaboration</li>
//               </ol>
//             </div>
//           </div>
//         </div>

//         {/* TESTIMONIAL */}

//         <div>
//           <div className='flex lg:flex-row md:flex-col sm:flex-col lg:items-start md:items-center sm:items-center justify-evenly py-24 bg-[#6d8c54]'>
//             <div className=' flex flex-col gap-3 mb-10'>
//               <p>OUR TESTINOMIALS</p>
//               <p className='text-4xl lg:w-80 md:w-[96vh] sm:w-[40vh]'> What did AgriSoko Connect change to your harvest sale?</p>
//             </div>
//             <div className=' mb-5 lg:w-80 md:w-[96vh] sm:w-[40vh] lg:h-80 md:h-60 sm:h-[60vh] p-10 flex flex-col gap-5 border rounded-lg bg-white'>
//               <p>"With AgriSoko Connect, I sold my extra bags of potatoes effortlessly. The platform connected me with buyers in no time,
//                 making the whole process smooth and stress-free."
//               </p>
//               <div className='flex items-center gap-5'>
//                 <img src='Testimonial1.jpg' className='w-20 h-20 rounded-full'></img>
//                 <div className='flex flex-col gap-1 items-center'>
//                   <p className='text-2xl text-green-900 font-bold'>Marc</p>
//                   <p>Farmer</p>
//                 </div>
//               </div>
//             </div>

//             <div className=' mb-5 lg:w-80 md:w-[96vh] sm:w-[40vh] lg:h-80 md:h-60 sm:h-[60vh] p-10 flex flex-col gap-5 border rounded-lg bg-white'>
//               <p>"I never thought selling our surplus onions could be so easy until we tried AgriSoko Connect. Listing them on the platform was a breeze,
//                 and we had interested buyers reaching out to us within hours!"
//               </p>
//               <div className='flex items-center gap-5'>
//                 <img src='Testimonial2.jpg' className='w-20 h-20 rounded-full'></img>
//                 <div className='flex flex-col gap-1'>
//                   <p className='text-2xl text-green-900 font-bold'>Tarisa</p>
//                   <p>Cooperative manager</p>
//                 </div>
//               </div>
//             </div>
//           </div>
//         </div>

//         {/* COOPERATIVES */}

//         <div className='flex lg:flex-row md:flex-row sm:flex-col justify-evenly md:items-start sm:items-center lg:items-start py-10 border border-t-2'>
//           <div className='flex lg:flex-col md:flex-col sm:flex-row lg:gap-3 md:gap-3 sm:gap-5 items-center'>
//             <img src='Tuzamurane.jpg' className='lg:w-32 md:w-20 sm:w-24 lg:h-32 md:h-20 sm:h-24 rounded-full object-cover '></img>
//             <p className='lg:w-32 md:w-20 sm:w-20 lg:text-xl md:text-xl sm:text-lg'>Tuzamurane cooperative</p>
//           </div>
//           <div className='flex lg:flex-col md:flex-col sm:flex-row lg:gap-3 md:gap-3 sm:gap-5 items-center'>
//             <img src='KangukaCooperative.webp' className='lg:w-32 md:w-20 sm:w-24 lg:h-32 md:h-20 sm:h-24 rounded-full'></img>
//             <p className='lg:w-32 md:w-20 sm:w-20 lg:text-xl md:text-xl sm:text-lg'>Kanguka Association</p>
//           </div>
//           <div className='flex lg:flex-col md:flex-col sm:flex-row items-center  lg:gap-3 md:gap-3 sm:gap-5'>
//             <img src='KopenyaruCooperative.jpg' className='lg:w-32 md:w-20 sm:w-24 lg:h-32 md:h-20 sm:h-24 rounded-full'></img>
//             <p className='lg:w-32 md:w-20 sm:w-20 lg:text-xl md:text-xl sm:text-lg'>Kopenyaru Cooperative</p>
//           </div>
//           <div className='flex lg:flex-col md:flex-col sm:flex-row items-center lg:gap-3 md:gap-3 sm:gap-5'>
//             <img src='KarabaCoffee.png' className='lg:w-32 md:w-20 sm:w-24 lg:h-32 md:h-20 sm:h-24 rounded-full'></img>
//             <p className='lg:w-32 md:w-20 sm:w-20 lg:text-xl md:text-xl sm:text-lg'>Karaba Coffee Cooperative</p>
//           </div>
//           <div className='flex lg:flex-col md:flex-col sm:flex-row items-center lg:gap-3 md:gap-3 sm:gap-5 '>
//             <img src='MilleniumCooperative.jpg' className='lg:w-32 md:w-20 sm:w-24 lg:h-32 md:h-20 sm:h-24 rounded-full object-cover'></img>
//             <p className='lg:w-32 md:w-20 sm:w-20 lg:text-xl md:text-xl sm:text-lg'>Millenium Village Tour</p>
//           </div>
//         </div>

//         {/* GET IN TOUCH */}

//         <div>
//           <div className='flex lg:flex-row md:flex-col sm:flex-col justify-evenly py-28  bg-[#f2f2f2]'>
//             <div className='lg:w-[44vh] md:w-[80vh] mb-10 sm:w-[44vh] flex flex-col lg:p-0 md:p-0 sm:p-3 gap-3  lg:ml-0 md:ml-20 sm:ml-7'>
//               <p className=''>Contact now</p>
//               <p className='text-5xl text-green-900'>Get in touch with us</p>
//               <p className=''>our contact information reflects our commitment to providing excellent
//                 customer service and support to all users of our AgriSoko connect platform. Feel free to
//                 reach out to us with any questions or needs you may have.
//               </p>
//               <div className='flex gap-3'>
//                 <div className='rounded-full bg-[#eae5cb] flex items-center justify-center w-11 h-11 opacity-60 text-2xl'><FaTwitter /></div>
//                 <div className='rounded-full bg-[#eae5cb] flex items-center justify-center w-11 h-11 opacity-60 text-2xl'><MdOutlineFacebook /></div>
//                 <div className='rounded-full bg-[#eae5cb] flex items-center justify-center w-11 h-11 opacity-60 text-2xl'><FaPinterestP /></div>
//                 <div className='rounded-full bg-[#eae5cb] flex items-center justify-center w-11 h-11 opacity-60 text-2xl'><FaInstagram /></div>
//               </div>
//             </div>
//             <div className='flex flex-col gap-5 lg:ml-0 md:ml-20 sm:ml-7'>
//               <div className='flex lg:flex-row md:flex-col sm:flex-col gap-5'>
//                 <input type='text' placeholder='Names' className='bg-[#eceae0] rounded-xl p-5 lg:w-[40vh] md:w-[80vh] sm:w-[40vh]'></input>
//                 <input type='email' placeholder='Email' className='bg-[#eceae0] rounded-xl p-5 lg:w-[40vh] md:w-[80vh] sm:w-[40vh]'></input>
//               </div>
//               <div className='flex lg:flex-row md:flex-col sm:flex-col gap-5 '>
//                 <input type='phone' placeholder='Phone number' className='bg-[#eceae0] rounded-xl p-5 lg:w-[40vh] md:w-[80vh] sm:w-[40vh]'></input>
//                 <input type='text' placeholder='Subject' className='bg-[#eceae0] rounded-xl p-5 lg:w-[40vh] md:w-[80vh] sm:w-[40vh]'></input>
//               </div>
//               <div>
//                 <textarea placeholder='Write message' className='bg-[#eceae0] rounded-xl p-2 lg:w-[83vh] md:w-[80vh] sm:w-[40vh] h-[30vh]'></textarea>
//               </div>
//               <Link to='/login' className=' bg-yellow-200 px-5 py-3 lg:w-[23vh] md:w-[27vh] sm:w-[27vh] text-xl rounded-xl text-black hover:text-white hover:bg-green-900'> Send message</Link>

//             </div>
//           </div>

//         </div>


//         {/* ADS */}

//         <div>
//           <div className=' gap-2 lg:px-40 md:px-20 sm:px-10 py-10 bg-[#6d8c54] text-white'>
//             <p className='pb-10 underline text-lg underline-offset-2 font-semibold animate-pulse'>ADVERTISMENT</p>
//             <div className='flex lg:flex-row md:flex-col sm:flex-col lg:items-center md:items-start sm:items-start lg:gap-0 md:gap-3 sm:gap-3'>
//               <div className='flex flex-col gap-3'>

//                 <img src='ads.png' className='w-[16vh]'></img>
//                 <p className='text-white'>visit us at <Link to='https://shorturl.at/MqZhv' className='text-yellow-200'>https://shorturl.at/MqZhv</Link ></p>
//                 <p className='lg:w-[80%] sm:w-[100%]'> We are theThe global tomato processing industry
//                   On a global scale, the annual production of fresh tomatoes amounts to approximately 180
//                   million tonnes. In comparison, two times more potatoes
//                   and four times more rice are grown around the world (FAO, 2019). However, about
//                   a quarter of those 160 million tonnes are grown for the processing industry, which makes
//                   tomatoes the world’s leading vegetable for processing. Almost 39 million tonnes of tomatoes are processed every year
//                   in factories belonging to the greatest labels of the global food industry.
//                 </p>
//               </div>
//               <div className='w-[80%]'>
//                 <img src='ads2.gif'></img>
//               </div>
//             </div>
//           </div>
//         </div>


//       </div >
//     </>
//   )
// }

// export default Home


import React, { useEffect } from 'react';
import { Link } from 'react-router-dom';
import { PiArrowBendDownLeftThin } from "react-icons/pi";
import { MdOutlineFacebook } from "react-icons/md";
import { FaTwitter, FaInstagram, FaPinterestP, FaArrowRight, FaQuoteLeft } from "react-icons/fa6";
import AOS from 'aos';
import 'aos/dist/aos.css';
import HeroSlider from '../Component/HeroSlider';
import FeaturedAgricultureSection from '../Component/FeaturedAgricultureSection';
import PopularAgricultureWithTabs from '../Component/PopularAgricultureWithTabs'
import NewsletterSection from '../Component/NewsletterSection'
import TestimonialSlider from '../Component/TestimonialSlider'
import PartnerCooperatives from '../Component/PartnerCooperatives'

const Home = () => {

  useEffect(() => {
    AOS.init({
      duration: 1000,
      once: true,
      easing: 'ease-in-out'
    });
  }, []);


  const testimonials = [
    {
      id: 1,
      text: "With AgriSoko Connect, I sold my extra bags of potatoes effortlessly. The platform connected me with buyers in no time, making the whole process smooth and stress-free.",
      name: "Marc",
      role: "Farmer",
      image: "Testimonial1.jpg"
    },
    {
      id: 2,
      text: "I never thought selling our surplus onions could be so easy until we tried AgriSoko Connect. Listing them on the platform was a breeze, and we had interested buyers reaching out to us within hours!",
      name: "Tarisa",
      role: "Cooperative manager",
      image: "Testimonial2.jpg"
    }
  ];
  
  // Cooperative partner data
  const partners = [
    { name: "Tuzamurane cooperative", image: "Tuzamurane.jpg" },
    { name: "Kanguka Association", image: "KangukaCooperative.webp" },
    { name: "Kopenyaru Cooperative", image: "KopenyaruCooperative.jpg" },
    { name: "Karaba Coffee Cooperative", image: "KarabaCoffee.png" },
    { name: "Millenium Village Tour", image: "MilleniumCooperative.jpg" }
  ];

  return (
    <div className="overflow-x-hidden">

      <HeroSlider />
    
      <FeaturedAgricultureSection />
 
      <PopularAgricultureWithTabs />

      <PartnerCooperatives />
      <TestimonialSlider />
      <NewsletterSection />
    </div>
  );
};

export default Home;