
import React, { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";

const partners = [
  {
    name: "Tuzamurane Cooperative",
    image: "Tuzamurane.jpg",
    description: "Empowering local farmers with sustainable banana production."
  },
  {
    name: "Kanguka Association",
    image: "KangukaCooperative.webp",
    description: "Known for quality cassava products and community leadership."
  },
  {
    name: "Kopenyaru Cooperative",
    image: "KopenyaruCooperative.jpg",
    description: "Advancing smallholder farming through innovation."
  },
  {
    name: "Karaba Coffee Cooperative",
    image: "KarabaCoffee.png",
    description: "Pioneers in organic Rwandan coffee export."
  },
  {
    name: "Millenium Village Tour",
    image: "MilleniumCooperative.jpg",
    description: "Boosting agri-tourism and learning among young farmers."
  },
];

const PartnerCooperatives = () => {
  useEffect(() => {
    AOS.init({ duration: 800, once: true });
  }, []);

  return (
    <section className="py-20 bg-[#fefef9]  font-raleway">
      <div className="mx-auto px-6 lg:px-11">
        <h2
          className="text-3xl md:text-4xl text-center text-green-900 "
          data-aos="fade-down"
        >
          Meet Our Partner Cooperatives
        </h2>
        <p className="  text-gray-500 tracking-wide my-11 text-center text-medium mb-">With youth unemployment at 18.8%, addressing this challenge is vital for Rwanda’s economic future. Your contribution can provide crucial resources, mentorship, and training to empower the next generation of leaders.With youth unemployment at 18.8%, addressing this challenge is vital for Rwanda’s economic future. Your contribution can provide crucial resources, mentorship, and training to empower the next generation of leaders.</p>


        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-10">
          {partners.map((partner, index) => (
            <div
              key={index}
              className="bg-white rounded-xl shadow-sm hover:shadow-xl transform hover:-translate-y-1 transition duration-300 p-6 text-center"
              data-aos="fade-up"
              data-aos-delay={index * 100}
            >
              <div className="w-24 h-24 mx-auto rounded-full overflow-hidden border-4 border-green-200 mb-4">
                <img
                  src={partner.image}
                  alt={partner.name}
                  className="w-full h-full object-cover"
                />
              </div>
              <h3 className="text-xl font-semibold text-green-800 mb-2">{partner.name}</h3>
              <p className="text-gray-600 text-sm leading-6">{partner.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default PartnerCooperatives;
