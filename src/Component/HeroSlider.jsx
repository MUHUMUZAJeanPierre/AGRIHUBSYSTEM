import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination, Autoplay } from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import "../index.css"; 
import heroImage from ".././assets/hero.png";
import heroImage2 from ".././assets/hero5.jpg";
import heroImage3 from ".././assets/hero2.avif";


const slides = [
  {
    imageClass: heroImage,
    title: "Welcome to AgriSoko Connect",
    subtitle:
      "Empowering farmers, bridging markets, revolutionizing agriculture through seamless market connections.",
    buttonText: "DISCOVER MORE",
    link: "/about",
  },
  {
    imageClass: heroImage2,
    title: "Grow and Thrive Together",
    subtitle:
      "We build networks that uplift farmer cooperatives and empower communities.",
    buttonText: "JOIN US",
    link: "/cooperatives",
  },
  {
    imageClass: heroImage3,
    title: "Our Vision for Agriculture",
    subtitle:
      "Using technology to transform access and opportunity for all stakeholders in the supply chain.",
    buttonText: "LEARN MORE",
    link: "/vision",
  },
];

export default function HeroSlider() {
  return (
    <section className="relative w-full overflow-hidden font-raleway">
      <Swiper
        modules={[Navigation, Pagination, Autoplay]}
        spaceBetween={0}
        slidesPerView={1}
        loop
        navigation
        pagination={{ clickable: true }}
        autoplay={{ delay: 5000, disableOnInteraction: false }}
        className="hero-swiper"
      >
        {slides.map((slide, index) => (
          <SwiperSlide key={index}>
            <div
              className="relative pt-14 h-screen w-full flex items-center justify-center text-white"
              aria-label={`Slide ${index + 1}`}
               style={{
                backgroundImage: `url(${slide.imageClass})`,
                backgroundSize: "cover",
                backgroundPosition: "center",
                backgroundRepeat: "no-repeat",
              }}
            >
                <div
                className="absolute inset-0 z-10"
                style={{
                  background:
                    "linear-gradient(to bottom, rgba(0, 0, 0, 0.8), rgba(0, 0, 0, 0.6))",
                }}
              />
              {/* <div className={`absolute inset-0 bg-slide-${index} bg-cover bg-center z-0`}></div> */}
              
              {/* <div className="absolute inset-0 bg-black bg-opacity-50 z-10"></div> */}

        
              <div className="relative z-20 px-6 max-w-2xl text-center leading-[32px] text-[16px] tracking-normal">
                <h1 className="text-3xl md:text-4xl font-normal mb-4 text-white drop-shadow-lg">
                  {slide.title}
                </h1>
                <p className="text-lg md:text-xl mb-6 font-normal text-white drop-shadow-md">
                  {slide.subtitle}
                </p>
                <a
                  href={slide.link}
                  className="inline-block text-white font-sm px-8 py-2 rounded-full bg-[#0d542b] hover:text-white transition-all duration-300"
                >
                  {slide.buttonText}
                </a>
              </div>
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
    </section>
  );
}
