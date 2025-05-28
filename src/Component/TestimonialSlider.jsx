import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination, Autoplay } from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import { FaQuoteLeft, FaArrowLeft, FaArrowRight } from "react-icons/fa6";

const testimonials = [
  {
    id: 1,
    name: "Marc",
    role: "Farmer",
    image: "Testimonial1.jpg",
    text: "With AgriSoko Connect, I sold my extra bags of potatoes effortlessly. The platform connected me with buyers in no time, making the whole process smooth and stress-free.",
  },
  {
    id: 2,
    name: "Tarisa",
    role: "Cooperative Manager",
    image: "Testimonial2.jpg",
    text: "Selling surplus onions was never this easy. AgriSoko Connect gave us visibility and brought buyers directly to us!  AgriSoko is a game-changer for agriculture in Rwanda.",
  },
  {
    id: 3,
    name: "Jean",
    role: "AgriTech Specialist",
    image: "Testimonial3.jpg",
    text: "It’s empowering to see farmers leverage tech to reach more markets. AgriSoko is a game-changer for agriculture in Rwanda.  AgriSoko is a game-changer for agriculture.",
  },
];

export default function TestimonialSlider() {
  return (
    <section className="relative bg-[#f0f7f2] py-24">
      <div className="max-w-8xl mx-auto px-6 md:px-11 relative">
        <div className="text-center mb-12">
          <h2 className="text-4xl  text-green-900 font-raleway mb-4">
            What Our Community Says
          </h2>
          <p className="  text-gray-500 tracking-wide my-11 text-center text-medium mb-">With youth unemployment at 18.8%, addressing this challenge is vital for Rwanda’s economic future. Your contribution can provide crucial resources, mentorship, and training to empower the next generation of leaders.With youth unemployment at 18.8%, addressing this challenge is vital for Rwanda’s economic future. Your contribution can provide crucial resources, mentorship, and training to empower the next generation of leaders.</p>

        </div>
        <Swiper
          modules={[Navigation, Pagination, Autoplay]}
          navigation={{
            nextEl: ".swiper-button-next-custom",
            prevEl: ".swiper-button-prev-custom",
          }}
          pagination={{ clickable: true }}
          autoplay={{ delay: 6000 }}
          loop
          spaceBetween={8}
          slidesPerView={2}
          breakpoints={{
            768: { slidesPerView: 2 },
            1024: { slidesPerView: 2.5 },
          }}
        >
          {testimonials.map((testimonial) => (
            <SwiperSlide key={testimonial.id}>
              <div className="bg-white rounded-lg shadow-lg p-8 mx-4 font-raleway h-full flex flex-col justify-between">
                <FaQuoteLeft className="text-green-700 opacity-20 text-4xl mb-4" />
                <p className="text-gray-800 text-base leading-8 mb-6">{testimonial.text}</p>
                <div className="flex items-center gap-4 mt-auto">
                  <img
                    src={testimonial.image}
                    alt={testimonial.name}
                    className="w-14 h-14 rounded-full object-cover"
                  />
                  <div>
                    <p className="text-green-900 font-bold text-lg">{testimonial.name}</p>
                    <p className="text-gray-600 text-sm">{testimonial.role}</p>
                  </div>
                </div>
              </div>
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </section>
  );
}
