import { useState, useEffect } from 'react';
import { Star, ShoppingCart, Heart, Eye } from 'lucide-react';
import image1 from '../assets/10001.jpg'
import image2 from '../assets/10002.jpg'
import image3 from '../assets/10003.jpg'
import image4 from '../assets/10004.jpg'
import image5 from '../assets/10005.jpg'
import hero from '../assets/hero.png'

export default function Shop() {
    const [activePage, setActivePage] = useState(1);
    const [loading, setLoading] = useState(true);
    const [products, setProducts] = useState([]);
    const [featuredProducts, setFeaturedProducts] = useState([]);

    const allProducts = [
        // Page 1 products
        {
            id: 1,
            name: "Organic Cucumber",
            price: 5.15,
            originalPrice: null,
            image: image1,
            isNew: false,
            discount: null,
            isOrganic: true,
            category: "Vegetables"
        },
        {
            id: 2,
            name: "Fresh Banana",
            price: 6.25,
            originalPrice: null,
            image: image2,
            isNew: true,
            discount: null,
            isOrganic: false,
            category: "Fruits"
        },
        {
            id: 3,
            name: "Fresh Red Seedless",
            subName: "Strawberry",
            price: 3.12,
            originalPrice: null,
            image: image3,
            isNew: true,
            discount: null,
            isOrganic: false,
            category: "Fruits",
            featured: true
        },
        {
            id: 4,
            name: "Native Organic Carrot",
            price: 0.99,
            originalPrice: 1.15,
            image: image4,
            isNew: false,
            discount: "14%",
            isOrganic: true,
            category: "Vegetables",
            featured: true
        },
        {
            id: 5,
            name: "Green Cabbage",
            price: 1.00,
            priceRange: true,
            maxPrice: 6.00,
            image: image5,
            isNew: true,
            discount: null,
            isOrganic: false,
            category: "Vegetables",
            featured: true
        },
        {
            id: 6,
            name: "Green Bell Pepper",
            price: 12.40,
            originalPrice: 14.40,
            image: image1,
            isNew: false,
            discount: "13.9%",
            isOrganic: false,
            category: "Vegetables",
            featured: true
        },
        // Page 2 products
        {
            id: 7,
            name: "Fresh Avocado",
            price: 2.99,
            originalPrice: 3.99,
            image: image2,
            isNew: false,
            discount: "25%",
            isOrganic: true,
            category: "Fruits"
        },
        {
            id: 8,
            name: "Red Tomato",
            price: 1.49,
            originalPrice: null,
            image: image3,
            isNew: true,
            discount: null,
            isOrganic: true,
            category: "Vegetables"
        },
        {
            id: 9,
            name: "Organic Broccoli",
            price: 4.25,
            originalPrice: null,
            image: image4,
            isNew: false,
            discount: null,
            isOrganic: true,
            category: "Vegetables"
        },
        {
            id: 10,
            name: "Sweet Pineapple",
            price: 7.99,
            originalPrice: 9.99,
            image: image5,
            isNew: false,
            discount: "20%",
            isOrganic: false,
            category: "Fruits"
        },
        {
            id: 11,
            name: "Juicy Oranges",
            price: 3.75,
            originalPrice: null,
            image: image1,
            isNew: false,
            discount: null,
            isOrganic: false,
            category: "Fruits"
        },
        {
            id: 12,
            name: "Organic Spinach",
            price: 2.50,
            originalPrice: 3.50,
            image: image2,
            isNew: true,
            discount: "28%",
            isOrganic: true,
            category: "Vegetables"
        }
    ];

    const featuredProductsList = [
        {
            id: 101,
            name: "Strawberry",
            price: 6.99,
            originalPrice: 9.99,
            image: "/api/placeholder/50/50",
            rating: 5
        },
        {
            id: 102,
            name: "Red Apple",
            price: 2.20,
            originalPrice: 4.40,
            image: "/api/placeholder/50/50"
        },
        {
            id: 103,
            name: "Green Bell Pepper",
            price: 3.40,
            originalPrice: 5.40,
            image: "/api/placeholder/50/50"
        },
        {
            id: 104,
            name: "Green Cabbage",
            price: 1.00,
            priceRange: true,
            maxPrice: 6.00,
            image: "/api/placeholder/50/50"
        },
        {
            id: 105,
            name: "Native Organic Carrot",
            price: 0.99,
            originalPrice: 2.99,
            image: "/api/placeholder/50/50"
        }
    ];

    // Products per page
    const productsPerPage = 6;

    // Calculate total pages
    const totalPages = Math.ceil(allProducts.length / productsPerPage);

    useEffect(() => {
        // Simulate API call or data loading
        const fetchData = async () => {
            setLoading(true);

            // Simulate network delay
            await new Promise(resolve => setTimeout(resolve, 1500));

            // Get current products based on active page
            const indexOfLastProduct = activePage * productsPerPage;
            const indexOfFirstProduct = indexOfLastProduct - productsPerPage;
            const currentProducts = allProducts.slice(indexOfFirstProduct, indexOfLastProduct);

            setProducts(currentProducts);
            setFeaturedProducts(featuredProductsList);
            setLoading(false);
        };

        fetchData();
    }, [activePage]);

    const categories = ["Apples", "Fruits", "Organic Foods", "Package Foods", "Vegetables"];

    return (
        <>
            <div className="w-full h-[40rem] relative mb-8">
                <img src={hero} alt="Fresh Organic Produce" className="w-full h-full object-cover" />
                <div 
                style={{
                  background:
                    "linear-gradient(to bottom, rgba(0, 0, 0, 0.8), rgba(0, 0, 0, 0.6))",
                }}
                 className="absolute inset-0 z-10  flex flex-col items-center justify-center text-white text-center px-4">
                    <h1 className="text-2xl md:text-4xl font-semibold mb-2 uppercase">Fresh & Organic</h1>
                    <p className="text-sm md:text-xl mb-4">Quality products for your healthy lifestyle</p>
                    <button className="bg-green-600 hover:bg-green-700 text-white px-5 py-2 rounded-full text-sm md:text-base transition duration-300">
                        Shop Now
                    </button>
                </div>
            </div>
            <div className="px-6 md:px-10 lg:px-11 py-8 bg-gray-50 min-h-screen">
                <div className="flex flex-col md:flex-row justify-between items-center mb-6 gap-4">
                    <input
                        type="text"
                        placeholder="Search for a product..."
                        className="w-full md:w-1/3 border border-gray-300 rounded px-4 py-2 focus:outline-none focus:ring-2 focus:ring-green-500"
                    />
                    <select
                        className="w-full md:w-1/4 border border-gray-300 rounded px-4 py-2 focus:outline-none focus:ring-2 focus:ring-green-500"
                    >
                        <option value="">All Categories</option>
                        {categories.map((cat, idx) => (
                            <option key={idx} value={cat}>{cat}</option>
                        ))}
                    </select>
                </div>

                {/* Product Grid */}
                {loading ? (
                    <div className="flex justify-center items-center h-72">
                        {/* New spinner design */}
                        <div className="flex flex-col items-center">
                            <div className="relative">
                                {/* Outer spinner circle */}
                                <div className="w-20 h-20 border-t-4 border-b-4 border-green-500 rounded-full animate-spin"></div>
                                {/* Inner spinner circle */}
                                <div className="absolute top-2 left-2 w-16 h-16 border-r-4 border-l-4 border-green-300 rounded-full animate-spin"></div>
                                {/* Green leaf icon in the middle */}
                                <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2">
                                    <svg className="w-8 h-8 text-green-600" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                                        <path d="M12 2C6.47715 2 2 6.47715 2 12C2 17.5228 6.47715 22 12 22C17.5228 22 22 17.5228 22 12C22 6.47715 17.5228 2 12 2Z" fill="currentColor" fillOpacity="0.2" />
                                        <path d="M8 12C8 9.79086 9.79086 8 12 8C14.2091 8 16 9.79086 16 12C16 14.2091 14.2091 16 12 16C9.79086 16 8 14.2091 8 12Z" fill="currentColor" />
                                    </svg>
                                </div>
                            </div>
                            <p className="mt-4 text-gray-600 font-medium">Loading fresh products...</p>
                            <p className="text-xs text-gray-500 mt-1">Please wait while we harvest the best items for you</p>
                        </div>
                    </div>
                ) : (
                    <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-6 ">
                        {products.map((product) => (
                            <div key={product.id} className="bg-white rounded-lg  w-64 shadow-md border border-gray-100 hover:border-1 hover:border-green-600 hover:shadow-lg transition duration-300">
                                <div className="relative">
                                    <img src={product.image} alt={product.name} className="w-full h-52 object-cover rounded-t-lg" />
                                    {product.isNew && (
                                        <span className="absolute top-2 right-2 bg-green-500 text-white text-xs px-2 py-1 rounded">NEW</span>
                                    )}
                                    {product.discount && (
                                        <span className="absolute top-2 left-2 bg-yellow-500 text-white text-xs px-2 py-1 rounded">{product.discount}</span>
                                    )}
                                </div>
                                <div className="p-4">
                                    <h3 className="text-center font-semibold text-sm">{product.name}</h3>
                                    {product.subName && <p className="text-center text-gray-500 text-xs">{product.subName}</p>}
                                    <div className="flex justify-center gap-2 mt-2">
                                        {product.originalPrice && <span className="text-gray-400 line-through text-sm">${product.originalPrice.toFixed(2)}</span>}
                                        <span className="text-green-700 font-semibold">
                                            {product.priceRange ? `$${product.price.toFixed(2)} - $${product.maxPrice.toFixed(2)}` : `$${product.price.toFixed(2)}`}
                                        </span>
                                    </div>
                                </div>

                                {/* Actions */}
                                <div className="flex justify-center gap-4 py-3 text-gray-400">
                                    <button><ShoppingCart size={18} className="hover:text-green-600" /></button>
                                    <button><Eye size={18} className="hover:text-green-600" /></button>
                                    <button><Heart size={18} className="hover:text-green-600" /></button>
                                </div>
                            </div>
                        ))}
                    </div>
                )}

                {/* Pagination */}
                <div className="flex justify-center mt-10">
                    <nav className="flex items-center gap-2 px-[20rem] ">
                        <button
                            onClick={() => setActivePage(prev => Math.max(prev - 1, 1))}
                            disabled={activePage === 1 || loading}
                            className={`w-10 h-10 rounded ${activePage === 1 || loading ? 'bg-gray-200 text-gray-400 cursor-not-allowed' : 'bg-white text-gray-700 border border-gray-300 hover:bg-gray-100'}`}
                        >
                            &larr;
                        </button>
                        {[...Array(totalPages)].map((_, index) => (
                            <button
                                key={index}
                                onClick={() => setActivePage(index + 1)}
                                className={`w-10 h-10 rounded ${activePage === index + 1 ? 'bg-green-700 text-white' : 'bg-white text-gray-700 border border-gray-300 hover:bg-gray-100'}`}
                                disabled={loading}
                            >
                                {index + 1}
                            </button>
                        ))}
                        <button
                            onClick={() => setActivePage(prev => Math.min(prev + 1, totalPages))}
                            disabled={activePage === totalPages || loading}
                            className={`w-10 h-10 rounded ${activePage === totalPages || loading ? 'bg-gray-200 text-gray-400 cursor-not-allowed' : 'bg-white text-gray-700 border border-gray-300 hover:bg-gray-100'}`}
                        >
                            &rarr;
                        </button>
                    </nav>
                </div>
                {/* <p className="text-center mt-2 text-sm text-gray-500">Page {activePage} of {totalPages}</p> */}
            </div>
        </>
    );
}