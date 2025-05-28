import React, { useState } from "react";
import { FaArrowRight } from "react-icons/fa6";
import image1 from '../assets/hero.png'
const categories = ["All", "Seeds", "Tools", "Fertilizers", "Equipment", "Livestock"];

const products = [
    {
        title: "Hybrid Maize Seeds",
        category: "Seeds",
        subtitle: "Rwanda Agro Co.",
        price: "$22.00",
        image: image1,
    },
    {
        title: "Drip Irrigation Kit",
        category: "Equipment",
        subtitle: "SmartFarm Ltd.",
        price: "$199.00",
        image:image1,
    },
    {
        title: "NPK Fertilizer 20-20-20",
        category: "Fertilizers",
        subtitle: "AgroSupplies Rwanda",
        price: "$18.00",
        image: image1,
    },
    {
        title: "Solar Egg Incubator",
        category: "Equipment",
        subtitle: "AgriSolar Group",
        price: "$320.00",
        image: image1
    },
    {
        title: "Mineral Blocks for Cows",
        category: "Livestock",
        subtitle: "VetCare Suppliers",
        price: "$5.50",
        image: image1,
    },
    {
        title: "Compost Organic Mix",
        category: "Fertilizers",
        subtitle: "GreenEarth Rwanda",
        price: "$12.00",
        image: image1,
    },
    {
        title: "Banana Plantlets (Tissue)",
        category: "Seeds",
        subtitle: "AgriBio Tech",
        price: "$0.50/each",
        image: image1,
    },
    {
        title: "Soil PH Tester",
        category: "Tools",
        subtitle: "FieldTech",
        price: "$14.00",
        image: image1,
    },
];

const PopularAgricultureWithTabs = () => {
    const [activeCategory, setActiveCategory] = useState("All");

    const filteredProducts =
        activeCategory === "All"
            ? products
            : products.filter((p) => p.category === activeCategory);

    return (
        <section className="py-20 bg-[#f0f7f2] font-[Raleway,sans-serif] text-[16px] leading-[32px] px-6 md:px-11">
            <div className=" mx-auto bg-[#f0f7f2]">
                <h2 className="text-4xl text-green-900 font-medium mb-10 text-center">Popular Agricultural Products</h2>
                {/* <p className="text-sm text-green-600 tracking-wider mb-2">AGRICULTURAL ESSENTIALS</p> */}
                  <p className="  text-gray-500 tracking-wide my-11 text-medium text-center ">With youth unemployment at 18.8%, addressing this challenge is vital for Rwanda’s economic future. Your contribution can provide crucial resources, mentorship, and training to empower the next generation of leaders.With youth unemployment at 18.8%, addressing this challenge is vital for Rwanda’s economic future. Your contribution can provide crucial resources, mentorship, and training to empower the next generation of leaders.</p>

                <div className="flex justify-center mb-8 gap-10 flex-wrap ">
                    {categories.map((cat) => (
                        <button
                            key={cat}
                            onClick={() => setActiveCategory(cat)}
                            className={`text-sm font-semibold transition-all duration-300 pb-1 border-b-2 ${activeCategory === cat
                                    ? "text-green-800 border-green-600"
                                    : "text-gray-500 border-transparent hover:text-green-600"
                                }`}
                        >
                            {cat}
                        </button>
                    ))}
                </div>

                <div className="grid grid-cols-2 md:grid-cols-4 gap-10 ">
                    {filteredProducts.map((item, index) => (
                        <div key={index} className="group">
                            <div className="aspect-[3/4] w-full overflow-hidden rounded-lg shadow-sm">
                                <img
                                    src={item.image}
                                    alt={item.title}
                                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                                />
                            </div>
                            <h3 className="mt-4 text-green-900 font-semibold">{item.title}</h3>
                            <p className="text-gray-700 text-sm">{item.subtitle}</p>
                            <p className="text-green-700">{item.price}</p>
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
            </div>
        </section>
    );
};

export default PopularAgricultureWithTabs;
