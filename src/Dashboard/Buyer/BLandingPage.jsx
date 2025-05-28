import React, { useState, useEffect } from "react";
import axios from "axios";
import { Link } from "react-router-dom";
import { VscLoading } from "react-icons/vsc";
import { FiSearch, FiShoppingCart, FiPackage, FiTrendingUp } from "react-icons/fi";
import { BiLeaf } from "react-icons/bi";

const BLandingPage = () => {
  const [searchQuery, setSearchQuery] = useState("");
  const [error, setError] = useState(null);
  const [fetch, setFetch] = useState([]);
  const [loading, setLoading] = useState(false);

  const handleSearchChange = (e) => {
    setSearchQuery(e.target.value);
  };

  const filteredStockData = Array.isArray(fetch)
    ? fetch.filter((stockItem) =>
      stockItem.NameOfProduct.toLowerCase().includes(
        searchQuery.toLowerCase()
      )
    )
    : [];

  const handleFetch = async () => {
    let token = localStorage.getItem("token");
    setLoading(true);
    try {
      const response = await axios({
        method: "GET",
        url: "https://agrisokoconnect-backend-ipza.onrender.com/AgriSoko/stock/getAll",
        headers: {
          Authorization: `Bearer ${token}`,
        },
      });
      console.log(response.data);
      setFetch(response.data.data);
    } catch (error) {
      console.log(error);
      setError("Failed to fetch stock data");
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    handleFetch();
  }, []);

  if (loading) {
    return (
      <div className="min-h-screen bg-gradient-to-br from-green-50 via-white to-blue-50">
        {/* Hero Section */}
        <div className="relative overflow-hidden">
          <div className="absolute inset-0 bg-gradient-to-r from-green-900/80 via-green-800/70 to-emerald-700/80"></div>
          <img
            src="../AboutUs.png"
            alt="Agri-Connect Banner"
            className="h-[25vh] w-full object-cover"
          />
          <div className="absolute inset-0 flex items-center justify-center">
            <div className="text-center text-white">
              <h1 className="text-5xl md:text-6xl font-bold mb-4 tracking-tight">
                Buyer Dashboard
              </h1>
              <div className="h-1 w-24 bg-white mx-auto rounded-full"></div>
            </div>
          </div>
        </div>

        {/* Loading State */}
        <div className="flex flex-col items-center justify-center h-[60vh]">
          <div className="relative">
            <div className="w-20 h-20 border-4 border-green-200 border-t-green-600 rounded-full animate-spin"></div>
            <div className="absolute inset-0 w-20 h-20 border-4 border-transparent border-r-emerald-400 rounded-full animate-spin animation-delay-150"></div>
          </div>
          <div className="mt-6 text-center">
            <h3 className="text-2xl font-semibold text-gray-800 mb-2">Loading Fresh Products</h3>
            <p className="text-gray-600">Fetching the best agricultural products for you...</p>
          </div>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gradient-to-br from-green-50 via-white to-blue-50">
      {/* Enhanced Hero Section */}
      <div className="relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-r from-green-900/80 via-green-800/70 to-emerald-700/80"></div>
        <img
          src="../AboutUs.png"
          alt="Agri-Connect Banner"
          className="h-[25vh] w-full object-cover"
        />
        <div className="absolute inset-0 flex items-center justify-center">
          <div className="text-center text-white">
            <h1 className="text-5xl md:text-6xl font-bold mb-4 tracking-tight animate-fade-in">
              Buyer Dashboard
            </h1>
            <div className="h-1 w-24 bg-white mx-auto rounded-full animate-scale-in"></div>
          </div>
        </div>
        
        {/* Floating Elements */}
        <div className="absolute top-20 left-10 text-white/30 animate-float">
          <BiLeaf className="text-4xl" />
        </div>
        <div className="absolute bottom-10 right-20 text-white/30 animate-float-delayed">
          <FiPackage className="text-3xl" />
        </div>
      </div>

      {/* Error Display */}
      {error && (
        <div className="mx-6 mt-6">
          <div className="bg-red-50 border-l-4 border-red-500 p-4 rounded-r-lg">
            <div className="flex">
              <div className="ml-3">
                <p className="text-red-700 font-medium">Error: {error}</p>
              </div>
            </div>
          </div>
        </div>
      )}

      {/* Enhanced Search Section */}
      <div className="container mx-auto px-6 py-12">
        <div className="max-w-2xl mx-auto mb-12">
          <div className="relative group">
            <FiSearch className="absolute left-4 top-1/2 transform -translate-y-1/2 text-gray-400 text-xl group-focus-within:text-green-600 transition-colors duration-200" />
            <input
              type="text"
              placeholder="Search for fresh agricultural products..."
              value={searchQuery}
              onChange={handleSearchChange}
              className="w-full pl-12 pr-6 py-4 text-lg border-2 border-gray-200 rounded-2xl focus:outline-none focus:border-green-500 focus:ring-4 focus:ring-green-100 transition-all duration-300 shadow-lg hover:shadow-xl bg-white/80 backdrop-blur-sm"
            />
          </div>
          
          <div className="text-center mt-8">
            <h2 className="text-2xl md:text-3xl font-bold text-gray-800 mb-3">
              Discover Premium Agricultural Products
            </h2>
            <p className="text-gray-600 text-lg">
              Browse through our curated selection and place your orders with confidence
            </p>
          </div>
        </div>

        {/* Products Section */}
        {filteredStockData.length > 0 ? (
          <div className="animate-fade-in-up">
            {/* Section Header */}
            <div className="text-center mb-12">
              <div className="inline-flex items-center gap-3 bg-green-100 px-6 py-3 rounded-full mb-6">
                <FiTrendingUp className="text-green-600 text-xl" />
                <span className="text-green-800 font-semibold">Available Stock</span>
              </div>
              <h3 className="text-4xl font-bold text-gray-800 mb-4">Fresh Products Ready for Order</h3>
              <div className="w-24 h-1 bg-gradient-to-r from-green-500 to-emerald-500 mx-auto rounded-full"></div>
            </div>

            {/* Products Grid */}
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-8">
              {filteredStockData.map((stockItem, index) => (
                <Link
                  key={index}
                  to={`/dashboard/buyer/create/${stockItem._id}/${encodeURIComponent(stockItem.NameOfProduct.trim())}`}
                  className="group block transform transition-all duration-300 hover:scale-105 hover:-translate-y-2"
                  style={{ animationDelay: `${index * 0.1}s` }}
                >
                  <div className="bg-white rounded-3xl shadow-lg hover:shadow-2xl transition-all duration-300 overflow-hidden border border-gray-100 group-hover:border-green-200">
                    {/* Image Container */}
                    <div className="relative overflow-hidden">
                      <img
                        src={stockItem.image}
                        alt={stockItem.NameOfProduct}
                        className="w-full h-56 object-cover transition-transform duration-500 group-hover:scale-110"
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                      <div className="absolute top-4 right-4 bg-white/90 backdrop-blur-sm rounded-full p-2 opacity-0 group-hover:opacity-100 transition-all duration-300 transform translate-x-4 group-hover:translate-x-0">
                        <FiShoppingCart className="text-green-600 text-lg" />
                      </div>
                    </div>

                    {/* Content */}
                    <div className="p-6">
                      <h4 className="text-xl font-bold text-gray-800 mb-3 line-clamp-1 group-hover:text-green-700 transition-colors duration-200">
                        {stockItem.NameOfProduct}
                      </h4>
                      
                      <p className="text-gray-600 mb-4 line-clamp-2 text-sm leading-relaxed">
                        {stockItem.description}
                      </p>

                      <div className="space-y-3">
                        {/* Price */}
                        <div className="flex items-center justify-between p-3 bg-green-50 rounded-xl">
                          <span className="text-sm font-medium text-green-700">Price per Ton</span>
                          <span className="text-lg font-bold text-green-800">
                            {stockItem.pricePerTon} <span className="text-sm font-normal">RWF</span>
                          </span>
                        </div>

                        {/* Quantity */}
                        <div className="flex items-center justify-between p-3 bg-blue-50 rounded-xl">
                          <span className="text-sm font-medium text-blue-700">Available</span>
                          <span className="text-lg font-bold text-blue-800">
                            {stockItem.quantity} <span className="text-sm font-normal">Tons</span>
                          </span>
                        </div>

                        {/* Product Type */}
                        <div className="mt-4">
                          <span className="inline-flex items-center px-3 py-1 rounded-full text-xs font-medium bg-gray-100 text-gray-700">
                            <BiLeaf className="mr-1" />
                            {stockItem.typeOfProduct}
                          </span>
                        </div>
                      </div>
                    </div>

                    {/* Hover Effect Bottom Bar */}
                    <div className="h-1 bg-gradient-to-r from-green-500 to-emerald-500 transform scale-x-0 group-hover:scale-x-100 transition-transform duration-300 origin-left"></div>
                  </div>
                </Link>
              ))}
            </div>
          </div>
        ) : (
          <div className="text-center py-16">
            <div className="mx-auto w-32 h-32 bg-gray-100 rounded-full flex items-center justify-center mb-6">
              <FiPackage className="text-gray-400 text-4xl" />
            </div>
            <h3 className="text-2xl font-semibold text-gray-700 mb-3">No Products Found</h3>
            <p className="text-gray-500 max-w-md mx-auto">
              {searchQuery 
                ? `No products match your search for "${searchQuery}". Try adjusting your search terms.`
                : "No stock data is currently available. Please check back later."
              }
            </p>
          </div>
        )}
      </div>

      {/* Custom Styles */}
      <style jsx>{`
        @keyframes fade-in {
          from { opacity: 0; transform: translateY(20px); }
          to { opacity: 1; transform: translateY(0); }
        }
        
        @keyframes scale-in {
          from { transform: scaleX(0); }
          to { transform: scaleX(1); }
        }
        
        @keyframes fade-in-up {
          from { opacity: 0; transform: translateY(40px); }
          to { opacity: 1; transform: translateY(0); }
        }
        
        @keyframes float {
          0%, 100% { transform: translateY(0px); }
          50% { transform: translateY(-20px); }
        }
        
        .animate-fade-in {
          animation: fade-in 0.8s ease-out;
        }
        
        .animate-scale-in {
          animation: scale-in 0.6s ease-out 0.3s both;
        }
        
        .animate-fade-in-up {
          animation: fade-in-up 0.8s ease-out;
        }
        
        .animate-float {
          animation: float 3s ease-in-out infinite;
        }
        
        .animate-float-delayed {
          animation: float 3s ease-in-out infinite 1.5s;
        }
        
        .animation-delay-150 {
          animation-delay: 150ms;
        }
        
        .line-clamp-1 {
          display: -webkit-box;
          -webkit-line-clamp: 1;
          -webkit-box-orient: vertical;
          overflow: hidden;
        }
        
        .line-clamp-2 {
          display: -webkit-box;
          -webkit-line-clamp: 2;
          -webkit-box-orient: vertical;
          overflow: hidden;
        }
      `}</style>
    </div>
  );
};

export default BLandingPage;