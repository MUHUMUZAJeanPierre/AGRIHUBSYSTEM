import React, { useState, useEffect } from "react";
import axios from "axios";

const ViewOrder = ({ orderId }) => {
  const [orderData, setOrderData] = useState(null);
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchData = async () => {
      setIsLoading(true);
      setError(null);

      try {
        const response = await axios.get(
          `Api plus id of the product/${orderId}`
        );
        setOrderData(response.data);
      } catch (error) {
        setError(error);
      } finally {
        setIsLoading(false);
      }
    };

    fetchData();
  }, [orderId]);

  if (isLoading) {
    return <div className="text-center">Loading order details...</div>;
  }

  if (error) {
    return (
      <div className="text-center text-red-500">
        Error fetching order details: {error.message}
      </div>
    );
  }

  if (!orderData) {
    return <div className="text-center">Order not found.</div>;
  }

  const { id, productName, quantity, quality, phoneNumber, price, status } =
    orderData;

  return (
    <div className="container mx-auto px-4 py-8 w-[70%]">
      <h1 className="text-2xl font-bold mb-4">Order Details (ID: {id})</h1>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        <div className="bg-gray-300 rounded-lg shadow-md shadow-slate-800 p-4">
          <h3 className="text-lg font-bold mb-2">Product Information</h3>
          <ul className="list-disc pl-4">
            <li>Product Name: {productName}</li>
            <li>Quantity: {quantity}</li>
            <li>Quality: {quality}</li>
            <li>Price: {price}</li>
          </ul>
        </div>
        <div className="bg-gray-300 rounded-lg shadow-md shadow-slate-800 p-4">
          <h3 className="text-lg font-bold mb-2">Order Details</h3>
          <ul className="list-disc pl-4">
            <li>Phone Number: {phoneNumber}</li>
            <li>Status: {status}</li>
            <li>Shipping Address:</li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default ViewOrder;
