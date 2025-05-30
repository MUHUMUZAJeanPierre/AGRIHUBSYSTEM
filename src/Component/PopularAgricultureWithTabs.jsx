// import React, { useState } from "react";
// import { FaArrowRight } from "react-icons/fa6";
// import image1 from '../assets/hero.png'
// const categories = ["All", "Seeds", "Tools", "Fertilizers", "Equipment", "Livestock"];

// const products = [
//     {
//         title: "Hybrid Maize Seeds",
//         category: "Seeds",
//         subtitle: "Rwanda Agro Co.",
//         price: "$22.00",
//         image: image1,
//     },
//     {
//         title: "Drip Irrigation Kit",
//         category: "Equipment",
//         subtitle: "SmartFarm Ltd.",
//         price: "$199.00",
//         image:image1,
//     },
//     {
//         title: "NPK Fertilizer 20-20-20",
//         category: "Fertilizers",
//         subtitle: "AgroSupplies Rwanda",
//         price: "$18.00",
//         image: image1,
//     },
//     {
//         title: "Solar Egg Incubator",
//         category: "Equipment",
//         subtitle: "AgriSolar Group",
//         price: "$320.00",
//         image: image1
//     },
//     {
//         title: "Mineral Blocks for Cows",
//         category: "Livestock",
//         subtitle: "VetCare Suppliers",
//         price: "$5.50",
//         image: image1,
//     },
//     {
//         title: "Compost Organic Mix",
//         category: "Fertilizers",
//         subtitle: "GreenEarth Rwanda",
//         price: "$12.00",
//         image: image1,
//     },
//     {
//         title: "Banana Plantlets (Tissue)",
//         category: "Seeds",
//         subtitle: "AgriBio Tech",
//         price: "$0.50/each",
//         image: image1,
//     },
//     {
//         title: "Soil PH Tester",
//         category: "Tools",
//         subtitle: "FieldTech",
//         price: "$14.00",
//         image: image1,
//     },
// ];

// const PopularAgricultureWithTabs = () => {
//     const [activeCategory, setActiveCategory] = useState("All");

//     const filteredProducts =
//         activeCategory === "All"
//             ? products
//             : products.filter((p) => p.category === activeCategory);

//     return (
//         <section className="py-20 bg-[#f0f7f2] font-[Raleway,sans-serif] text-[16px] leading-[32px] px-6 md:px-11">
//             <div className=" mx-auto bg-[#f0f7f2]">
//                 <h2 className="text-4xl text-green-900 font-medium mb-10 text-center">Popular Agricultural Products</h2>
//                 {/* <p className="text-sm text-green-600 tracking-wider mb-2">AGRICULTURAL ESSENTIALS</p> */}
//                   <p className="  text-gray-500 tracking-wide my-11 text-medium text-center ">With youth unemployment at 18.8%, addressing this challenge is vital for Rwanda’s economic future. Your contribution can provide crucial resources, mentorship, and training to empower the next generation of leaders.With youth unemployment at 18.8%, addressing this challenge is vital for Rwanda’s economic future. Your contribution can provide crucial resources, mentorship, and training to empower the next generation of leaders.</p>

//                 <div className="flex justify-center mb-8 gap-10 flex-wrap ">
//                     {categories.map((cat) => (
//                         <button
//                             key={cat}
//                             onClick={() => setActiveCategory(cat)}
//                             className={`text-sm font-semibold transition-all duration-300 pb-1 border-b-2 ${activeCategory === cat
//                                     ? "text-green-800 border-green-600"
//                                     : "text-gray-500 border-transparent hover:text-green-600"
//                                 }`}
//                         >
//                             {cat}
//                         </button>
//                     ))}
//                 </div>

//                 <div className="grid grid-cols-2 md:grid-cols-4 gap-10 ">
//                     {filteredProducts.map((item, index) => (
//                         <div key={index} className="group">
//                             <div className="aspect-[3/4] w-full overflow-hidden rounded-lg shadow-sm">
//                                 <img
//                                     src={item.image}
//                                     alt={item.title}
//                                     className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
//                                 />
//                             </div>
//                             <h3 className="mt-4 text-green-900 font-semibold">{item.title}</h3>
//                             <p className="text-gray-700 text-sm">{item.subtitle}</p>
//                             <p className="text-green-700">{item.price}</p>
//                         </div>
//                     ))}
//                 </div>

                // <div className="text-right">
                //     <a
                //         href="/products"
                //         className="text-sm font-semibold text-green-900 hover:text-yellow-500 inline-flex items-center"
                //     >
                //         View All Products <FaArrowRight className="ml-2" />
                //     </a>
                // </div>
//             </div>
//         </section>
//     );
// };

// export default PopularAgricultureWithTabs;


import React, { useState } from "react";
import { ArrowRight, ShoppingCart, Heart, Star } from "lucide-react";
import { FaArrowRight } from "react-icons/fa6";

const categories = ["All", "Seeds", "Tools", "Fertilizers", "Equipment", "Livestock"];

const products = [
    {
        id: 1,
        title: "Hybrid Maize Seeds",
        category: "Seeds",
        subtitle: "Rwanda Agro Co.",
        price: "$22.00",
        originalPrice: "$25.00",
        rating: 4.8,
        reviews: 124,
        image: "https://images.unsplash.com/photo-1571771894821-ce9b6c11b08e?w=300&h=200&fit=crop&auto=format&q=80",
        badge: "Bestseller",
        inStock: true,
    },
    {
        id: 2,
        title: "Drip Irrigation Kit",
        category: "Equipment",
        subtitle: "SmartFarm Ltd.",
        price: "$199.00",
        originalPrice: "$220.00",
        rating: 4.6,
        reviews: 89,
        image: "https://images.unsplash.com/photo-1559056199-641a0ac8b55e?w=300&h=200&fit=crop&auto=format&q=80",
        badge: "New",
        inStock: true,
    },
    {
        id: 3,
        title: "NPK Fertilizer 20-20-20",
        category: "Fertilizers",
        subtitle: "AgroSupplies Rwanda",
        price: "$18.00",
        originalPrice: "$20.00",
        rating: 4.9,
        reviews: 156,
        image: "https://images.unsplash.com/photo-1540420773420-3366772f4999?w=300&h=200&fit=crop&auto=format&q=80",
        badge: "Popular",
        inStock: true,
    },
    {
        id: 4,
        title: "Solar Egg Incubator",
        category: "Equipment",
        subtitle: "AgriSolar Group",
        price: "$320.00",
        originalPrice: "$350.00",
        rating: 4.7,
        reviews: 67,
        image: "https://images.unsplash.com/photo-1518977676601-b53f82aba655?w=300&h=200&fit=crop&auto=format&q=80",
        badge: "Premium",
        inStock: false,
    },
    {
        id: 5,
        title: "Mineral Blocks for Cows",
        category: "Livestock",
        subtitle: "VetCare Suppliers",
        price: "$5.50",
        originalPrice: "$6.00",
        rating: 4.5,
        reviews: 203,
        image: "https://images.unsplash.com/photo-1560493676-04071c5f467b?w=300&h=200&fit=crop&auto=format&q=80",
        badge: "Value",
        inStock: true,
    },
    {
        id: 6,
        title: "Compost Organic Mix",
        category: "Fertilizers",
        subtitle: "GreenEarth Rwanda",
        price: "$12.00",
        originalPrice: "$15.00",
        rating: 4.4,
        reviews: 98,
        image: "https://images.unsplash.com/photo-1416879595882-3373a0480b5b?w=300&h=200&fit=crop&auto=format&q=80",
        badge: "Organic",
        inStock: true,
    },
    {
        id: 7,
        title: "Banana Plantlets (Tissue)",
        category: "Seeds",
        subtitle: "AgriBio Tech",
        price: "$0.50",
        originalPrice: "$0.60",
        rating: 4.6,
        reviews: 45,
        image: "https://images.unsplash.com/photo-1571771894821-ce9b6c11b08e?w=300&h=200&fit=crop&auto=format&q=80",
        badge: "Fresh",
        inStock: true,
        unit: "each",
    },
    {
        id: 8,
        title: "Soil pH Tester",
        category: "Tools",
        subtitle: "FieldTech",
        price: "$14.00",
        originalPrice: "$16.00",
        rating: 4.3,
        reviews: 78,
        image: "https://images.unsplash.com/photo-1585314062604-1a357de8b000?w=300&h=200&fit=crop&auto=format&q=80",
        badge: "Essential",
        inStock: true,
    },
];

const EnhancedPopularAgriculture = () => {
    const [activeCategory, setActiveCategory] = useState("All");
    const [favorites, setFavorites] = useState(new Set());
    const [cart, setCart] = useState(new Set());

    const filteredProducts =
        activeCategory === "All"
            ? products
            : products.filter((p) => p.category === activeCategory);

    const toggleFavorite = (productId) => {
        const newFavorites = new Set(favorites);
        if (newFavorites.has(productId)) {
            newFavorites.delete(productId);
        } else {
            newFavorites.add(productId);
        }
        setFavorites(newFavorites);
    };

    const addToCart = (productId) => {
        const newCart = new Set(cart);
        newCart.add(productId);
        setCart(newCart);
    };

    const getBadgeColor = (badge) => {
        const colors = {
            Bestseller: "bg-red-500",
            New: "bg-blue-500",
            Popular: "bg-green-500",
            Premium: "bg-purple-500",
            Value: "bg-orange-500",
            Organic: "bg-emerald-500",
            Fresh: "bg-cyan-500",
            Essential: "bg-indigo-500",
        };
        return colors[badge] || "bg-gray-500";
    };

    return (
        <section className="py-20 bg-gradient-to-br from-green-50 to-emerald-50 font-sans px-6 md:px-11">
            <div className="mx-auto bg-gradient-to-br from-green-50 to-emerald-50">
                <div className="text-center mb-12">
                    <h2 className="text-4xl text-green-800 font-medium mb-10 text-center">
                        Popular Agricultural Products
                    </h2>
                    <p className="text-gray-500 tracking-wide my-11 text-medium text-center">
                        Discover high-quality agricultural products to boost your farming success. 
                        From premium seeds to modern equipment, we provide everything you need for 
                        sustainable and profitable agriculture.
                    </p>
                </div>

                <div className="flex justify-center mb-12">
                    <div className="bg-white rounded-full p-2 shadow-lg border border-green-100">
                        <div className="flex gap-2 flex-wrap justify-center">
                            {categories.map((cat) => (
                                <button
                                    key={cat}
                                    onClick={() => setActiveCategory(cat)}
                                    className={`px-6 py-3 rounded-full text-sm font-semibold transition-all duration-300 ${
                                        activeCategory === cat
                                            ? "bg-green-800 text-white shadow-md"
                                            : "text-gray-600 hover:text-green-800 hover:bg-green-50"
                                    }`}
                                >
                                    {cat}
                                </button>
                            ))}
                        </div>
                    </div>
                </div>

                {/* Products Grid */}
                <div className="grid grid-cols-2 md:grid-cols-5 gap-10 mb-12">
                    {filteredProducts.map((product) => (
                        <div
                            key={product.id}
                            className="group bg-white rounded-2xl shadow-sm hover:shadow-xl transition-all duration-300 overflow-hidden border border-green-100"
                        >
                            {/* Image Container */}
                            <div className="relative aspect-[4/3] overflow-hidden">
                                <img
                                    src={product.image}
                                    alt={product.title}
                                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                                    loading="lazy"
                                />
                                
                                {/* Badge */}
                                <div className={`absolute top-3 left-3 ${getBadgeColor(product.badge)} text-white text-xs font-bold px-2 py-1 rounded-full`}>
                                    {product.badge}
                                </div>

                                {/* Stock Status */}
                                {/* {!product.inStock && (
                                    <div className="absolute inset-0 bg-black bg-opacity-50 flex items-center justify-center">
                                        <span className="bg-red-500 text-white px-3 py-1 rounded-full text-sm font-semibold">
                                            Out of Stock
                                        </span>
                                    </div>
                                )} */}

                                {/* Action Buttons */}
                                <div className="absolute top-3 right-3 flex flex-col gap-2 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                                    <button
                                        onClick={() => toggleFavorite(product.id)}
                                        className={`p-2 rounded-full transition-colors duration-200 ${
                                            favorites.has(product.id)
                                                ? "bg-red-500 text-white"
                                                : "bg-white text-gray-600 hover:bg-red-50 hover:text-red-500"
                                        }`}
                                    >
                                        <Heart size={16} className={favorites.has(product.id) ? "fill-current" : ""} />
                                    </button>
                                </div>
                            </div>

                            {/* Product Info */}
                            <div className="p-5">
                                <h3 className="text-lg font-bold text-green-800 mb-1 line-clamp-1">
                                    {product.title}
                                </h3>
                                <p className="text-sm text-gray-600 mb-3">{product.subtitle}</p>

                                {/* Rating */}
                                <div className="flex items-center gap-2 mb-3">
                                    <div className="flex items-center gap-1">
                                        <Star size={14} className="fill-yellow-400 text-yellow-400" />
                                        <span className="text-sm font-medium text-gray-700">
                                            {product.rating}
                                        </span>
                                    </div>
                                    <span className="text-xs text-gray-500">
                                        ({product.reviews} reviews)
                                    </span>
                                </div>

                                {/* Price */}
                                <div className="flex items-center gap-2 mb-4">
                                    <span className="text-xl font-bold text-green-700">
                                        {product.price}
                                        {product.unit && <span className="text-sm font-normal">/{product.unit}</span>}
                                    </span>
                                    {product.originalPrice && (
                                        <span className="text-sm text-gray-500 line-through">
                                            {product.originalPrice}
                                        </span>
                                    )}
                                </div>

                                {/* Add to Cart Button */}
                                <button
                                    onClick={() => addToCart(product.id)}
                                    disabled={!product.inStock}
                                    className={`w-full py-3 px-4 rounded-xl font-semibold transition-all duration-300 flex items-center justify-center gap-2 ${
                                        product.inStock
                                            ? cart.has(product.id)
                                                ? "bg-green-100 text-green-700 border-2 border-green-200"
                                                : "bg-green-800 text-white hover:bg-green-700 shadow-md hover:shadow-lg"
                                            : "bg-gray-100 text-gray-400 cursor-not-allowed"
                                    }`}
                                >
                                    <ShoppingCart size={16} />
                                    {cart.has(product.id) ? "Added to Cart" : "Add to Cart"}
                                </button>
                            </div>
                        </div>
                    ))}
                </div>

                <div className="text-right">
                    <a
                        href="/products"
                        className="text-sm font-semibold text-green-800 hover:text-yellow-500 inline-flex items-center"
                    >
                        View All Products <FaArrowRight className="ml-2" />
                    </a>
                </div>
                {/* <div className="text-center">
                    <a
                        href="/products"
                        className="inline-flex items-center gap-2 text-lg font-semibold text-green-700 hover:text-green-800 transition-colors duration-300 group"
                    >
                        View All Products
                        <ArrowRight size={20} className="group-hover:translate-x-1 transition-transform duration-300" />
                    </a>
                </div> */}
            </div>
        </section>
    );
};

export default EnhancedPopularAgriculture;