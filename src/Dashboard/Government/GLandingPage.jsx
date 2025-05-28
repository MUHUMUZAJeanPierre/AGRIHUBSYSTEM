import React, { useEffect, useState } from "react";
import axios from "axios";

const GLandingPage = () => {
  const [farmersWithStock, setFarmersWithStock] = useState([]);
  const [searchTerm, setSearchTerm] = useState("");
  const [error, setError] = useState("");

  const handleFetch = async () => {
    let token = localStorage.getItem("token");

    if (!token) {
      setError("No token found. Please log in.");
      return;
    }

    try {
      const response = await axios({
        method: "GET",
        url: "https://agrisokoconnect-backend-ipza.onrender.com/AgriSoko/transaction/allFarmers",
        headers: {
          Authorization: `Bearer ${token}`,
        },
      });
      console.log(response.data);
      setFarmersWithStock(response.data.farmersWithStock);
    } catch (error) {
      console.error("Fetch error: ", error);
      if (error.response && error.response.status === 401) {
        setError("Unauthorized access. Please check your token.");
      } else {
        setError("Failed to fetch farmer and their stock data");
      }
    }
  };

  useEffect(() => {
    handleFetch();
  }, []);

  const filteredFarmers = farmersWithStock.filter((farmerData) =>
    farmerData.farmer.toLowerCase().includes(searchTerm.toLowerCase())
  );

  return (
    <div>
      <div className="relative">
        <img
          src="/AboutUs.png"
          alt="Agri-Connect Banner"
          className="h-[20vh] w-[100%] object-cover"
        />
        <div className="absolute lg:top-10 md:top-24 sm:top-5 lg:left-[70vh] md:left-[42vh] sm:left-[8vh] text-[#cbcaca]">
          <p className="text-4xl font-bold">Government Dashboard</p>
        </div>
      </div>
      <div className="pt-3 pl-3">
        <input
          type="text"
          placeholder="Search farmers..."
          className="p-2 mb-4 border rounded"
          onChange={(e) => setSearchTerm(e.target.value)}
        />
      </div>
      <div className="stock-container px-4 py-8 bg-white rounded-md shadow-md mt-8">
        <h2 className="text-2xl font-semibold mb-4">
          List of the Farmer and their stock
        </h2>
        {error && (
          <div className="text-red-500 mb-4">
            <p>{error}</p>
          </div>
        )}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
          {filteredFarmers.length > 0 ? (
            filteredFarmers.map((farmerData, index) => (
              <div key={index} className="border p-4 rounded shadow">
                <h3 className="text-xl font-bold">{farmerData.farmer}</h3>
                {farmerData.stock.map((item) => (
                  <div
                    key={item._id}
                    className="border p-4 rounded shadow mb-4"
                  >
                    <div className="flex justify-center">
                      <img
                        src={item.image}
                        alt={item.NameOfProduct}
                        className="w-[75%] h-[10rem] object-cover mb-4"
                      />
                    </div>
                    <span className="text-xl font-medium">
                      Product Name: {item.NameOfProduct}
                    </span>
                    <p className="text-gray-600">
                      Description: {item.description}
                    </p>
                    <div className="flex gap-2 text-xl font-medium">
                      <span>Price Per Ton: {item.pricePerTon}</span>
                      <span>RWF</span>
                    </div>
                    <div className="flex gap-2 text-xl font-medium">
                      <span>Quantity: {item.quantity}</span>
                      <span>Ton</span>
                    </div>
                    <span className="text-xl font-medium">
                      Type of Product: {item.typeOfProduct}
                    </span>
                  </div>
                ))}
              </div>
            ))
          ) : (
            <div className="pl-4">
              <p>No stock data available</p>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default GLandingPage;
