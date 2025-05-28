import React from 'react';
import { FaArrowRight } from 'react-icons/fa6';
import image1 from '../assets/hero.png'

const featuredItems = [
  {
    image: image1,
    name: 'Organic Maize Seeds',
    supplier: 'GreenHarvest Co.',
    price: '$12.00',
  },
  {
    image: image1,
    name: 'Drip Irrigation Kit',
    supplier: 'AgroTech Rwanda',
    price: '$85.00',
  },
  {
    image: image1,
    name: 'Solar Crop Dryer',
    supplier: 'SunFarm Solutions',
    price: '$150.00',
  },
  {
    image: image1,
    name: 'Fortified Cow Feed',
    supplier: 'Rwanda AgroVet',
    price: '$35.00',
  },
];

export default function FeaturedAgricultureSection() {
  return (
    <section className="bg-[#fefef9] py-20 font-raleway px-6 md:px-11">
      <div className="text-center mb-12">
        <h2 className="text-4xl font-medium text-green-900">Featured Agriculture Tools</h2>
        <p className="  text-gray-500 tracking-wide mt-5 text-medium my-11 text-center">With youth unemployment at 18.8%, addressing this challenge is vital for Rwanda’s economic future. Your contribution can provide crucial resources, mentorship, and training to empower the next generation of leaders.With youth unemployment at 18.8%, addressing this challenge is vital for Rwanda’s economic future. Your contribution can provide crucial resources, mentorship, and training to empower the next generation of leaders.</p>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-10 mb-12">
        {featuredItems.map((item, index) => (
          <div key={index} className="text-center group transition duration-300 hover:shadow-md">
            <div className="overflow-hidden border border-gray-100 p-4 bg-white">
              <img
                src={item.image}
                alt={item.name}
                className="mx-auto mb-4 w-full h-[280px] object-cover rounded"
              />
            </div>
            <h3 className="text-lg font-semibold text-green-900 mt-4">{item.name}</h3>
            <p className="text-sm text-gray-500">{item.supplier}</p>
            <p className="text-md text-yellow-700 font-medium mt-2">{item.price}</p>
          </div>
        ))}
      </div>

      <div className="text-right">
        <a
          href="/products"
          className="text-sm font-semibold text-green-900 hover:text-yellow-500 inline-flex items-center"
        >
          View All Products <FaArrowRight className="ml-2" />
        </a>
      </div>
    </section>
  );
}
