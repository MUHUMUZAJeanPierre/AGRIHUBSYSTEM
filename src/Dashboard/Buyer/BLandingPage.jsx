import React, { useState, useEffect } from "react";
import { Search, ShoppingCart, Package, TrendingUp, Filter, Grid, List, Wheat, Coffee, Apple, Carrot } from "lucide-react";

const BLandingPage = () => {
  const [searchQuery, setSearchQuery] = useState("");
  const [error, setError] = useState(null);
  const [fetch, setFetch] = useState([]);
  const [loading, setLoading] = useState(false);
  const [viewMode, setViewMode] = useState("grid");
  const [sortBy, setSortBy] = useState("name");
  const [selectedCategory, setSelectedCategory] = useState("all");

  const handleSearchChange = (e) => {
    setSearchQuery(e.target.value);
  };

  // Get product categories and their counts
  const getProductCategories = (products) => {
    const categories = {};
    products.forEach(product => {
      const category = product.typeOfProduct || 'Other';
      categories[category] = (categories[category] || 0) + 1;
    });
    return categories;
  };

  // Get category icon
  const getCategoryIcon = (category) => {
    const iconMap = {
      'Grain': Wheat,
      'Cash Crop': Coffee,
      'Fruit': Apple,
      'Root Vegetable': Carrot,
      'Vegetable': Carrot,
      'Other': Package
    };
    return iconMap[category] || Package;
  };

  const getCategoryColor = (category) => {
    const colorMap = {
      'Grain': 'from-yellow-500 to-orange-500',
      'Cash Crop': 'from-green-600 to-emerald-600',
      'Fruit': 'from-red-500 to-pink-500',
      'Root Vegetable': 'from-orange-500 to-red-500',
      'Vegetable': 'from-green-500 to-lime-500',
      'Other': 'from-gray-500 to-slate-500'
    };
    return colorMap[category] || 'from-blue-500 to-indigo-500';
  };

  const filteredStockData = Array.isArray(fetch)
    ? fetch.filter((stockItem) => {
        const matchesSearch = stockItem.NameOfProduct.toLowerCase().includes(
          searchQuery.toLowerCase()
        );
        const matchesCategory = selectedCategory === "all" || 
          stockItem.typeOfProduct === selectedCategory;
        return matchesSearch && matchesCategory;
      })
    : [];

  const sortedData = [...filteredStockData].sort((a, b) => {
    switch (sortBy) {
      case 'price':
        return a.pricePerTon - b.pricePerTon;
      case 'quantity':
        return b.quantity - a.quantity;
      case 'name':
      default:
        return a.NameOfProduct.localeCompare(b.NameOfProduct);
    }
  });

  const handleFetch = async () => {
    setLoading(true);
    setError(null);
    
    try {
      const response = await window.fetch('https://agrisokoconnect-backend-ipza.onrender.com/AgriSoko/stock/getAll');
      
      if (!response.ok) {
        throw new Error(`HTTP error! status: ${response.status}`);
      }
      
      const data = await response.json();
      console.log("data is fetched", data)
      // Transform the API data to include default images if not provided
      const transformedData = data.map(item => ({
        ...item,
        image: item.image || getDefaultImage(item.typeOfProduct || item.NameOfProduct)
      }));
      
      setFetch(transformedData);
    } catch (error) {
      console.error('Error fetching stock data:', error);
      setError(`Failed to fetch stock data: ${error.message}`);
      
      // Fallback to sample data if API fails
      const sampleData = [
        {
          _id: "1",
          NameOfProduct: "Premium Rice",
          description: "High-quality aromatic rice perfect for all cooking needs",
          pricePerTon: 850000,
          quantity: 25,
          typeOfProduct: "Grain",
          image: "https://images.unsplash.com/photo-1586201375761-83865001e31c?w=400&h=300&fit=crop"
        },
        {
          _id: "2", 
          NameOfProduct: "Organic Maize",
          description: "Fresh organic corn, pesticide-free and locally sourced",
          pricePerTon: 680000,
          quantity: 40,
          typeOfProduct: "Grain",
          image: "https://images.unsplash.com/photo-1551754655-cd27e38d2076?w=400&h=300&fit=crop"
        },
        {
          _id: "3",
          NameOfProduct: "Sweet Potatoes",
          description: "Nutritious orange-fleshed sweet potatoes, rich in vitamins",
          pricePerTon: 450000,
          quantity: 15,
          typeOfProduct: "Root Vegetable",
          image: "https://images.unsplash.com/photo-1518977676601-b53f82aba655?w=400&h=300&fit=crop"
        },
        {
          _id: "4",
          NameOfProduct: "Coffee Beans",
          description: "Premium Arabica coffee beans, freshly harvested",
          pricePerTon: 2500000,
          quantity: 8,
          typeOfProduct: "Cash Crop",
          image: "https://images.unsplash.com/photo-1559056199-641a0ac8b55e?w=400&h=300&fit=crop"
        },
        {
          _id: "5",
          NameOfProduct: "Fresh Bananas",
          description: "Sweet and nutritious bananas, perfect for export",
          pricePerTon: 320000,
          quantity: 60,
          typeOfProduct: "Fruit",
          image: "https://images.unsplash.com/photo-1571771894821-ce9b6c11b08e?w=400&h=300&fit=crop"
        },
        {
          _id: "6",
          NameOfProduct: "Tea Leaves",
          description: "Premium black tea leaves from highland plantations",
          pricePerTon: 1800000,
          quantity: 12,
          typeOfProduct: "Cash Crop",
          image: "https://images.unsplash.com/photo-1558618047-3c8c76ca7d13?w=400&h=300&fit=crop"
        },
        {
          _id: "7",
          NameOfProduct: "Fresh Tomatoes",
          description: "Juicy red tomatoes, perfect for cooking and salads",
          pricePerTon: 380000,
          quantity: 22,
          typeOfProduct: "Vegetable",
          image: "https://images.unsplash.com/photo-1546094096-0df4bcaaa337?w=400&h=300&fit=crop"
        },
        {
          _id: "8",
          NameOfProduct: "White Beans",
          description: "High-protein white beans, excellent for export",
          pricePerTon: 1200000,
          quantity: 18,
          typeOfProduct: "Grain",
          image: "https://images.unsplash.com/photo-1585881750389-770abe504815?w=400&h=300&fit=crop"
        }
      ];
      setFetch(sampleData);
    } finally {
      setLoading(false);
    }
  };

  // Helper function to get default images based on product type
  const getDefaultImage = (productType) => {
    const imageMap = {
      'Rice': 'https://images.unsplash.com/photo-1586201375761-83865001e31c?w=400&h=300&fit=crop',
      'Maize': 'https://images.unsplash.com/photo-1551754655-cd27e38d2076?w=400&h=300&fit=crop',
      'Corn': 'https://images.unsplash.com/photo-1551754655-cd27e38d2076?w=400&h=300&fit=crop',
      'Sweet Potato': 'https://images.unsplash.com/photo-1518977676601-b53f82aba655?w=400&h=300&fit=crop',
      'Coffee': 'https://images.unsplash.com/photo-1559056199-641a0ac8b55e?w=400&h=300&fit=crop',
      'Bean': 'https://images.unsplash.com/photo-1559056199-641a0ac8b55e?w=400&h=300&fit=crop',
      'Grain': 'https://images.unsplash.com/photo-1574323347407-f5e1ad6d020b?w=400&h=300&fit=crop',
      'Vegetable': 'https://images.unsplash.com/photo-1540420773420-3366772f4999?w=400&h=300&fit=crop',
      'Root Vegetable': 'https://images.unsplash.com/photo-1518977676601-b53f82aba655?w=400&h=300&fit=crop',
      'Cash Crop': 'https://images.unsplash.com/photo-1559056199-641a0ac8b55e?w=400&h=300&fit=crop',
      'Fruit': 'https://images.unsplash.com/photo-1571771894821-ce9b6c11b08e?w=400&h=300&fit=crop'
    };

    // Find matching image or return a generic agricultural product image
    const matchedKey = Object.keys(imageMap).find(key => 
      productType?.toLowerCase().includes(key.toLowerCase())
    );
    
    return imageMap[matchedKey] || 'https://images.unsplash.com/photo-1560493676-04071c5f467b?w=400&h=300&fit=crop';
  };

  useEffect(() => {
    handleFetch();
  }, []);

  if (loading) {
    return (
      <div className="min-h-screen ">
        <div className="flex flex-col items-center justify-center py-16 sm:py-24 md:py-32 px-4">
          <div className="relative">
            <div className="w-12 h-12 sm:w-14 sm:h-14 md:w-16 md:h-16 border-4 border-green-200 border-t-green-600 rounded-full animate-spin"></div>
          </div>
          <p className="mt-4 sm:mt-6 text-lg sm:text-xl font-medium text-gray-600 text-center">
            Loading fresh products...
          </p>
        </div>
      </div>
    );
  }

  const CategoryCard = ({ category, count, isActive, onClick }) => {
    const IconComponent = getCategoryIcon(category);
    const colorClass = getCategoryColor(category);
    
    return (
      <div 
        onClick={onClick}
        className={`relative overflow-hidden rounded-xl cursor-pointer transition-all duration-300 transform hover:scale-105 ${
          isActive ? 'ring-2 ring-green-500 shadow-lg' : 'hover:shadow-md'
        }`}
      >
        <div className={`bg-gradient-to-br from-green-800 to-green-800 p-4 sm:p-6 text-white`}>
          <div className="flex items-center justify-between mb-2">
            <IconComponent className="w-6 h-6 sm:w-8 sm:h-8" />
            <div className="text-right">
              <div className="text-2xl sm:text-3xl font-bold">{count}</div>
            </div>
          </div>
          <h3 className="text-sm sm:text-base font-semibold truncate">{category}</h3>
        </div>
        <div className="absolute inset-0 bg-white/10 opacity-0 hover:opacity-100 transition-opacity duration-300"></div>
      </div>
    );
  };

  const ProductCard = ({ stockItem }) => (
    <div className="group bg-white rounded-xl shadow-md hover:shadow-xl transition-all duration-300 overflow-hidden border border-gray-100 hover:border-green-200">
      <div className="relative overflow-hidden">
        <img
          src={stockItem.image}
          alt={stockItem.NameOfProduct}
          className="w-full h-40 sm:h-44 md:h-48 object-cover group-hover:scale-105 transition-transform duration-300"
          onError={(e) => {
            e.target.src = getDefaultImage(stockItem.typeOfProduct || stockItem.NameOfProduct);
          }}
        />
        <div className="absolute top-2 sm:top-3 right-2 sm:right-3 bg-white/90 backdrop-blur-sm rounded-full px-2 sm:px-3 py-1">
          <span className="text-xs sm:text-sm font-medium text-green-800">
            {stockItem.typeOfProduct || 'Product'}
          </span>
        </div>
      </div>
      
      <div className="p-4 sm:p-5 md:p-6">
        <h3 className="text-lg sm:text-xl font-bold text-gray-800 mb-2 group-hover:text-green-800 transition-colors line-clamp-1">
          {stockItem.NameOfProduct}
        </h3>
        <p className="text-gray-600 text-sm mb-3 sm:mb-4 line-clamp-2">
          {stockItem.description || 'Premium quality agricultural product'}
        </p>
        
        <div className="space-y-2 sm:space-y-3">
          <div className="flex items-center justify-between">
            <span className="text-xs sm:text-sm text-gray-500">Price per Ton</span>
            <span className="text-base sm:text-lg font-bold text-green-800">
              {stockItem.pricePerTon?.toLocaleString() || 'N/A'} RWF
            </span>
          </div>
          
          <div className="flex items-center justify-between">
            <span className="text-xs sm:text-sm text-gray-500">Available</span>
            <span className="text-xs sm:text-sm font-medium text-gray-800">
              {stockItem.quantity || 0} Tons
            </span>
          </div>
          
          <div className="pt-2">
            <button 
              className="w-full bg-gradient-to-r from-green-800 to-green-800 hover:from-green-550 hover:to-green-550 text-white font-medium py-2.5 sm:py-3 px-4 rounded-lg transition-all duration-200 flex items-center justify-center gap-2 group-hover:shadow-lg text-sm sm:text-base"
              onClick={() => console.log(`Order ${stockItem.NameOfProduct}`)}
            >
              <ShoppingCart className="w-4 h-4" />
              Create Order
            </button>
          </div>
        </div>
      </div>
    </div>
  );

  const ProductListItem = ({ stockItem }) => (
    <div className="bg-white rounded-lg shadow-sm hover:shadow-md transition-shadow duration-200 p-4 sm:p-6 border border-gray-100">
      <div className="flex flex-col sm:flex-row items-start sm:items-center gap-4 sm:gap-6">
        <img
          src={stockItem.image}
          alt={stockItem.NameOfProduct}
          className="w-full sm:w-16 md:w-20 h-32 sm:h-16 md:h-20 object-cover rounded-lg flex-shrink-0"
          onError={(e) => {
            e.target.src = getDefaultImage(stockItem.typeOfProduct || stockItem.NameOfProduct);
          }}
        />
        <div className="flex-1 min-w-0">
          <h3 className="text-lg font-bold text-gray-800 mb-1 truncate">
            {stockItem.NameOfProduct}
          </h3>
          <p className="text-gray-600 text-sm mb-2 line-clamp-2">
            {stockItem.description || 'Premium quality agricultural product'}
          </p>
          <div className="flex flex-wrap items-center gap-2 sm:gap-6 text-xs sm:text-sm text-gray-500">
            <span className="bg-gray-100 px-2 py-1 rounded-full">
              {stockItem.typeOfProduct || 'Product'}
            </span>
            <span>{stockItem.quantity || 0} Tons available</span>
          </div>
        </div>
        <div className="flex sm:flex-col items-center sm:items-end justify-between sm:justify-center w-full sm:w-auto gap-4 sm:gap-2 pt-3 sm:pt-0 border-t sm:border-t-0 border-gray-100">
          <div className="text-lg sm:text-xl font-bold text-green-600">
            {stockItem.pricePerTon?.toLocaleString() || 'N/A'} RWF
          </div>
          <button className="bg-green-600 hover:bg-green-700 text-white px-4 sm:px-6 py-2 rounded-lg transition-colors flex items-center gap-2 text-sm sm:text-base flex-shrink-0">
            <ShoppingCart className="w-4 h-4" />
            Order
          </button>
        </div>
      </div>
    </div>
  );

  const categories = getProductCategories(fetch);
  const totalProducts = fetch.length;

  return (
    <div className="min-h-screen bg-gradient-to-br w-full ">
      
      {error && (
        <div className="max-w-7xl mx-auto px-4 mt-4">
          <div className="bg-red-50 border border-red-200 text-red-700 px-3 sm:px-4 py-3 rounded-lg">
            <p className="font-medium text-sm sm:text-base">⚠️ {error}</p>
            <p className="text-xs sm:text-sm mt-1">Showing sample data for demonstration purposes.</p>
          </div>
        </div>
      )}

      <div className="max-w-7xl mx-auto px-4 py-6 sm:py-8">
        <div className="mb-8 sm:mb-12">

          <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 xl:grid-cols-6 gap-3 sm:gap-4 mb-6">
            <CategoryCard
              category="All Products"
              count={totalProducts}
              isActive={selectedCategory === "all"}
              onClick={() => setSelectedCategory("all")}
            />
            
            {Object.entries(categories).map(([category, count]) => (
              <CategoryCard
                key={category}
                category={category}
                count={count}
                isActive={selectedCategory === category}
                onClick={() => setSelectedCategory(category)}
              />
            ))}
          </div>
        </div>

        <div className="bg-white rounded-xl shadow-sm p-4 sm:p-6 mb-6 sm:mb-8 border border-gray-100">
          <div className="flex flex-col space-y-4 lg:flex-row lg:space-y-0 lg:gap-4 lg:items-center lg:justify-between">
           
            <div className="flex-1 max-w-full lg:max-w-md">
              <div className="relative">
                <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 w-4 h-4 sm:w-5 sm:h-5" />
                <input
                  type="text"
                  placeholder="Search for products..."
                  value={searchQuery}
                  onChange={handleSearchChange}
                  className="w-full pl-9 sm:pl-10 pr-4 py-2.5 sm:py-3 border border-gray-200 rounded-lg focus:ring-1 focus:ring-green-500 focus:border-transparent transition-all text-sm sm:text-base"
                />
              </div>
            </div>
            <div className="flex flex-col sm:flex-row items-stretch sm:items-center gap-3 sm:gap-4">
              <div className="flex items-center gap-2 min-w-0">
                <Filter className="w-4 h-4 text-gray-500 flex-shrink-0" />
                <select 
                  value={sortBy} 
                  onChange={(e) => setSortBy(e.target.value)}
                  className="border border-gray-200 rounded-lg px-3 py-2 text-sm focus:ring-2 focus:ring-green-500 focus:border-transparent min-w-0 flex-1 sm:flex-initial"
                >
                  <option value="name">Sort by Name</option>
                  <option value="price">Sort by Price</option>
                  <option value="quantity">Sort by Quantity</option>
                </select>
              </div>
            
              <div className="flex border border-gray-200 rounded-lg overflow-hidden self-center sm:self-auto">
                <button
                  onClick={() => setViewMode("grid")}
                  className={`p-2 ${viewMode === "grid" ? "bg-green-600 text-white" : "bg-white text-gray-600 hover:bg-gray-50"} transition-colors`}
                  aria-label="Grid view"
                >
                  <Grid className="w-4 h-4" />
                </button>
                <button
                  onClick={() => setViewMode("list")}
                  className={`p-2 ${viewMode === "list" ? "bg-green-600 text-white" : "bg-white text-gray-600 hover:bg-gray-50"} transition-colors`}
                  aria-label="List view"
                >
                  <List className="w-4 h-4" />
                </button>
              </div>
            </div>
          </div>
        </div>

        <div className="mb-4 sm:mb-6">
          <h2 className="text-xl sm:text-2xl font-bold text-gray-800 mb-1 sm:mb-2">
            {selectedCategory === "all" ? "All Products" : selectedCategory}
          </h2>
          <p className="text-sm sm:text-base text-gray-600">
            {filteredStockData.length} product{filteredStockData.length !== 1 ? 's' : ''} found
            {searchQuery && ` for "${searchQuery}"`}
            {selectedCategory !== "all" && ` in ${selectedCategory}`}
          </p>
        </div>
        {sortedData.length > 0 ? (
          <div className={viewMode === "grid" 
            ? "grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4 sm:gap-6" 
            : "space-y-3 sm:space-y-4"
          }>
            {sortedData.map((stockItem, index) => (
              viewMode === "grid" ? (
                <ProductCard key={stockItem._id || index} stockItem={stockItem} />
              ) : (
                <ProductListItem key={stockItem._id || index} stockItem={stockItem} />
              )
            ))}
          </div>
        ) : (
          <div className="text-center py-12 sm:py-16 px-4">
            <Package className="w-12 h-12 sm:w-16 sm:h-16 text-gray-300 mx-auto mb-3 sm:mb-4" />
            <h3 className="text-lg sm:text-xl font-medium text-gray-600 mb-2">
              No products found
            </h3>
            <p className="text-sm sm:text-base text-gray-500 max-w-md mx-auto">
              {searchQuery 
                ? `No products match "${searchQuery}". Try adjusting your search.`
                : selectedCategory !== "all"
                ? `No products found in ${selectedCategory} category.`
                : "No stock data available at the moment."
              }
            </p>
            {error && (
              <button 
                onClick={handleFetch}
                className="mt-4 bg-green-600 hover:bg-green-700 text-white px-4 sm:px-6 py-2 rounded-lg transition-colors text-sm sm:text-base"
              >
                Retry Loading
              </button>
            )}
          </div>
        )}
      </div>
    </div>
  );
};

export default BLandingPage;