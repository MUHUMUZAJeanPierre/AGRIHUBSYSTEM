import React from "react";
import {
  Leaf,
  Handshake,
  Tractor,
  Shovel,
  Sprout,
  ShoppingBasket,
  Droplet,
  Carrot,
} from "lucide-react";

const services = [
  { id: 1, icon: <Leaf size={48} />, title: "Planting" },
  { id: 2, icon: <Handshake size={48} />, title: "Mulching" },
  { id: 3, icon: <Tractor size={48} />, title: "Plowing" },
  { id: 4, icon: <Shovel size={48} />, title: "Mowing" },
  { id: 5, icon: <Sprout size={48} />, title: "Seeding" },
  { id: 6, icon: <Carrot size={48} />, title: "Fresh Vegetables" },
  { id: 7, icon: <Droplet size={48} />, title: "Watering" },
  { id: 8, icon: <ShoppingBasket size={48} />, title: "Vegetable Selling" },
];

const ServicesSection = () => {
  return (
    <section className="py-16 px-11 bg-white text-center">
      <p className="text-green-700 font-semibold mb-2 tracking-wide uppercase">Services</p>
      <h2 className="text-3xl md:text-4xl font-serif mb-10">
        Providing Fresh Produce Every Single Day
      </h2>

      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-0 border-t border-gray-400 border-l">
        {services.map((service) => (
          <div
            key={service.id}
            className="border-b border-r p-6 text-left relative group hover:shadow-md transition"
          >
            <span className="absolute top-4 right-4 text-gray-200 text-sm font-semibold">
              {String(service.id).padStart(2, "0")}
            </span>

            <div className="text-green-700 mb-4">{service.icon}</div>
            <h3 className="text-lg font-semibold mb-2">{service.title}</h3>

            <p className="text-gray-600 text-sm leading-relaxed">
              Gravida sodales condimentum pellen tesq accumsan orci quam sagittis sapie
            </p>
          </div>
        ))}
      </div>
    </section>
  );
};

export default ServicesSection;
