// import React, { useState, useEffect } from "react";
// // import {
// //   Card,
// //   CardContent,
// //   Typography,
// //   Box,
// //   TextField,
// //   IconButton,
// //   Grid,
// //   Button,
// // } from "@mui/material";
// // import DeleteIcon from "@mui/icons-material/Delete";
// // import EditIcon from "@mui/icons-material/Edit";
// // import VisibilityIcon from "@mui/icons-material/Visibility";
// import { Link } from "react-router-dom";
// import { FaAmazonPay } from "react-icons/fa";
// import axios from "axios";

// const AllOrder = () => {
//   const [searchQuery, setSearchQuery] = useState("");
//   const [editingOrderId, setEditingOrderId] = useState(null);
//   const [editedOrder, setEditedOrder] = useState({});
//   const [isLoading, setIsLoading] = useState(false);
//   const [error, setError] = useState("");
//   const [orderData, setOrderData] = useState([]);
//   const [successMessage, setSuccessMessage] = useState("");

//   useEffect(() => {
//     fetchOrders();
//   }, []);

//   useEffect(() => {
//     if (successMessage) {
//       setTimeout(() => {
//         setSuccessMessage("");
//         window.location.reload();
//       }, 2000); // Adjust the time as needed
//     }
//   }, [successMessage]);

//   const fetchOrders = async () => {
//     setIsLoading(true);
//     const token = localStorage.getItem("token");
//     console.log("Token:", token);

//     if (!token) {
//       setError("No token found");
//       setIsLoading(false);
//       return;
//     }
//     try {
//       const response = await axios({
//         method: "GET",
//         url: "https://agrisokoconnect-backend-ipza.onrender.com/AgriSoko/order/retrieve",
//         headers: {
//           Authorization: `Bearer ${token}`,
//         },
//       });

//       console.log("Fetched Orders:", response.data);
//       setOrderData(response.data.data || []);
//     } catch (error) {
//       console.log(error);
//       setError("Failed to fetch stock data");
//     } finally {
//       setIsLoading(false);
//     }
//   };

//   const handleDelete = async (id) => {
//     try {
//       const token = localStorage.getItem("token");
//       if (!token) {
//         throw new Error("Authorization token not found");
//       }
//       const response = await axios.delete(
//         `https://agrisokoconnect-backend-ipza.onrender.com/AgriSoko/order/delete/{id}`,
//         {
//           headers: {
//             Authorization: `Bearer ${token}`,
//           },
//         }
//       );
//       if (response.status === 200) {
//         setSuccessMessage("Order deleted successfully");
//       }
//       setOrderData((prevOrders) =>
//         prevOrders.filter((order) => order._id !== id)
//       );
//     } catch (error) {
//       console.error("Error deleting order:", error);
//       setError(error.message);
//     }
//   };

//   const handleEdit = (id) => {
//     setEditingOrderId(id);
//     const order = orderData.find((order) => order._id === id);
//     setEditedOrder(order);
//   };

//   const handleSaveEdit = async () => {
//     setIsLoading(true);
//     try {
//       const token = localStorage.getItem("token");
//       const updates = {
//         selectedStockItems: editedOrder.selectedStockItems.map((item) => ({
//           NameOfProduct: item.NameOfProduct,
//           typeOfProduct: item.typeOfProduct,
//           quantity: item.quantity,
//         })),
//         phoneNumber: editedOrder.phoneNumber,
//         shippingAddress: editedOrder.shippingAddress,
//       };

//       const response = await axios(
//         `https://agrisokoconnect-backend-ipza.onrender.com/AgriSoko/order/update/${editingOrderId}`,

//         {
//           method: "PUT",
//           headers: {
//             "Content-Type": "application/json",
//             Authorization: `Bearer ${token}`,
//           },
//           data: JSON.stringify(updates),
//         }
//       );
//       if (response.status === 200) {
//         setSuccessMessage("Order updated successfully");
//       } else {
//         const errorMessage = await response.text();
//         console.error("Failed to update profile:", errorMessage);
//       }
//     } catch (error) {
//       console.error("Error updating profile:", error);
//     } finally {
//       setIsLoading(false);
//     }
//   };

//   const handleEditOrderData = (field, value) => {
//     if (field === "quantity") {
//       setEditedOrder((prevEditedOrder) => ({
//         ...prevEditedOrder,
//         selectedStockItems: prevEditedOrder.selectedStockItems.map(
//           (item, index) => (index === 0 ? { ...item, quantity: value } : item)
//         ),
//       }));
//     } else {
//       setEditedOrder((prevEditedOrder) => ({
//         ...prevEditedOrder,
//         [field]: value,
//       }));
//     }
//   };

//   const handlePayment = async () => {
//     const token = localStorage.getItem("token");
//     console.log("Token:", token);
//     if (!token) {
//       throw new Error("Authorization token not found");
//     }
//     try {
//       const response = await axios.get(
//         "https://agrisokoconnect-backend-ipza.onrender.com/AgriSoko/pay/momo",
//         {
//           headers: {
//             Authorization: `Bearer ${token}`,
//           },
//         }
//       );
//       console.log("Payment initiated:");

//       console.log("Payment initiated:", response.data.data.data.link);
//       if (response.status == 200) {
//         window.location.href = `${response.data.data.data.link}`;
//       }
//       // Redirect to payment link if needed
//     } catch (error) {
//       console.error("Error initiating payment:", error);
//     }
//   };

//   const filteredOrders = Array.isArray(orderData)
//     ? orderData.filter(
//         (order) =>
//           order.customer &&
//           order.customer.toLowerCase().includes(searchQuery.toLowerCase())
//       )
//     : [];

//   const handleSearch = (event) => {
//     setSearchQuery(event.target.value);
//   };

//   return (
//     <div
//       style={{
//         width: "90%",
//         display: "flex",
//         flexDirection: "column",
//         alignItems: "center",
//         justifyContent: "center",
//         marginTop: 16,
//         paddingLeft: 100,
//       }}
//     >
//       <div
//         style={{
//           display: "flex",
//           justifyContent: "space-between",
//           alignItems: "center",
//           marginBottom: 16,
//           width: "60%",
//         }}
//       >
//         <TextField
//           label="Search Orders"
//           variant="outlined"
//           value={searchQuery}
//           onChange={handleSearch}
//           style={{ width: 300 }}
//         />
//       </div>
//       <Grid container spacing={2}>
//         {filteredOrders.map((order) => (
//           <Grid item xs={12} sm={15} md={4} key={order._id}>
//             <Card>
//               <CardContent>
//                 {order.selectedStockItems &&
//                   order.selectedStockItems.map((item, index) => (
//                     <div key={index}>
//                       <Typography variant="h5" sx={{ fontWeight: "bold" }}>
//                         Product Name:{" "}
//                         <Box
//                           component="span"
//                           sx={{ fontWeight: "bold", color: "green" }}
//                         >
//                           {item.NameOfProduct}
//                         </Box>
//                       </Typography>
//                       <Typography variant="body1">
//                         Quality:{" "}
//                         <Box
//                           component="span"
//                           sx={{ fontWeight: "bold", color: "green" }}
//                         >
//                           {item.typeOfProduct}
//                         </Box>
//                       </Typography>
//                       <Typography variant="body1">
//                         Quantity: {item.quantity} Ton
//                       </Typography>
//                     </div>
//                   ))}
//                 <Typography variant="body1">
//                   Phone Number: {order.phoneNumber}
//                 </Typography>
//                 <Typography variant="body1">
//                   Shipping Address: {order.shippingAddress}
//                 </Typography>
//                 <Typography variant="body1">
//                   Total Amount: {order.totalAmount}
//                 </Typography>
//                 <Typography variant="body1">Status: {order.status}</Typography>
//                 <Typography variant="body2">
//                   Created At: {new Date(order.createdAt).toLocaleString()}
//                 </Typography>
//                 <div>
//                   <IconButton onClick={handlePayment}>
//                     <FaAmazonPay style={{ fontSize: "24px", color: "black" }} />
//                   </IconButton>
//                   <IconButton onClick={() => handleDelete(order._id)}>
//                     <DeleteIcon color="error" />
//                   </IconButton>
//                   <IconButton onClick={() => handleEdit(order._id)}>
//                     <EditIcon color="primary" />
//                   </IconButton>
//                   <Link to="/dashboard/buyer/view">
//                     <IconButton>
//                       <VisibilityIcon color="primary" />
//                     </IconButton>
//                   </Link>
//                 </div>
//               </CardContent>
//             </Card>
//           </Grid>
//         ))}
//       </Grid>
//       {editingOrderId && (
//         <div style={{ marginTop: 16, marginBottom: 25 }}>
//           <h3 className="text-2xl mb-3 font-medium text-green-600">
//             Edit Order
//           </h3>
//           {editedOrder.selectedStockItems &&
//             editedOrder.selectedStockItems.map((item, index) => (
//               <TextField
//                 key={index}
//                 label={`Quantity for ${item.NameOfProduct}`}
//                 variant="outlined"
//                 value={item.quantity || ""}
//                 onChange={(e) =>
//                   handleEditOrderData("quantity", e.target.value, index)
//                 }
//                 style={{ marginRight: 16, marginTop: 16 }}
//               />
//             ))}

//           <TextField
//             label="Phone Number"
//             variant="outlined"
//             value={editedOrder.phoneNumber || ""}
//             onChange={(e) => handleEditOrderData("phoneNumber", e.target.value)}
//             style={{ marginRight: 16, marginTop: 16 }}
//           />
//           <TextField
//             label="Shipping Address"
//             variant="outlined"
//             value={editedOrder.shippingAddress || ""}
//             onChange={(e) =>
//               handleEditOrderData("shippingAddress", e.target.value)
//             }
//             style={{ marginRight: 16, marginTop: 16 }}
//           />
//           <Button
//             variant="contained"
//             color="primary"
//             onClick={handleSaveEdit}
//             style={{
//               paddingLeft: 20,
//               paddingRight: 20,
//               paddingBottom: 10,
//               paddingTop: 10,
//               marginTop: 18,
//               backgroundColor: "green",
//             }}
//             disabled={isLoading}
//           >
//             {isLoading ? "Saving..." : "Save Changes"}
//           </Button>
//           {successMessage && <p style={{ color: "red" }}>{successMessage}</p>}
//         </div>
//       )}
//     </div>
//   );
// };

// export default AllOrder;

// import React, { useState, useEffect } from "react";
// import {
//   Typography,
//   Box,
//   Card,
//   CardContent,
//   Grid,
//   TextField,
//   IconButton,
//   Button,
// } from "@mui/material";
// import { Link } from "react-router-dom";
// import axios from "axios";

// // Icons from react-icons
// import { FaAmazonPay, FaTrash, FaEdit, FaEye } from "react-icons/fa";

// const AllOrder = () => {
//   const [searchQuery, setSearchQuery] = useState("");
//   const [editingOrderId, setEditingOrderId] = useState(null);
//   const [editedOrder, setEditedOrder] = useState({});
//   const [isLoading, setIsLoading] = useState(false);
//   const [error, setError] = useState("");
//   const [orderData, setOrderData] = useState([]);
//   const [successMessage, setSuccessMessage] = useState("");

//   useEffect(() => {
//     fetchOrders();
//   }, []);

//   useEffect(() => {
//     if (successMessage) {
//       setTimeout(() => {
//         setSuccessMessage("");
//         window.location.reload();
//       }, 2000);
//     }
//   }, [successMessage]);

//   const fetchOrders = async () => {
//     setIsLoading(true);
//     const token = localStorage.getItem("token");
//     if (!token) {
//       setError("No token found");
//       setIsLoading(false);
//       return;
//     }

//     try {
//       const response = await axios.get(
//         "https://agrisokoconnect-backend-ipza.onrender.com/AgriSoko/order/retrieve",
//         {
//           headers: { Authorization: `Bearer ${token}` },
//         }
//       );
//       setOrderData(response.data.data || []);
//     } catch (error) {
//       console.error(error);
//       setError("Failed to fetch stock data");
//     } finally {
//       setIsLoading(false);
//     }
//   };

//   const handleDelete = async (id) => {
//     try {
//       const token = localStorage.getItem("token");
//       await axios.delete(
//         `https://agrisokoconnect-backend-ipza.onrender.com/AgriSoko/order/delete/${id}`,
//         {
//           headers: { Authorization: `Bearer ${token}` },
//         }
//       );
//       setOrderData((prevOrders) =>
//         prevOrders.filter((order) => order._id !== id)
//       );
//       setSuccessMessage("Order deleted successfully");
//     } catch (error) {
//       console.error("Error deleting order:", error);
//       setError(error.message);
//     }
//   };

//   const handleEdit = (id) => {
//     setEditingOrderId(id);
//     const order = orderData.find((order) => order._id === id);
//     setEditedOrder(order);
//   };

//   const handleSaveEdit = async () => {
//     setIsLoading(true);
//     try {
//       const token = localStorage.getItem("token");
//       const updates = {
//         selectedStockItems: editedOrder.selectedStockItems.map((item) => ({
//           NameOfProduct: item.NameOfProduct,
//           typeOfProduct: item.typeOfProduct,
//           quantity: item.quantity,
//         })),
//         phoneNumber: editedOrder.phoneNumber,
//         shippingAddress: editedOrder.shippingAddress,
//       };

//       await axios.put(
//         `https://agrisokoconnect-backend-ipza.onrender.com/AgriSoko/order/update/${editingOrderId}`,
//         updates,
//         {
//           headers: {
//             Authorization: `Bearer ${token}`,
//           },
//         }
//       );
//       setSuccessMessage("Order updated successfully");
//     } catch (error) {
//       console.error("Error updating order:", error);
//     } finally {
//       setIsLoading(false);
//     }
//   };

//   const handleEditOrderData = (field, value) => {
//     if (field === "quantity") {
//       setEditedOrder((prev) => ({
//         ...prev,
//         selectedStockItems: prev.selectedStockItems.map((item, index) =>
//           index === 0 ? { ...item, quantity: value } : item
//         ),
//       }));
//     } else {
//       setEditedOrder((prev) => ({
//         ...prev,
//         [field]: value,
//       }));
//     }
//   };

//   const handlePayment = async () => {
//     try {
//       const token = localStorage.getItem("token");
//       const response = await axios.get(
//         "https://agrisokoconnect-backend-ipza.onrender.com/AgriSoko/pay/momo",
//         {
//           headers: { Authorization: `Bearer ${token}` },
//         }
//       );
//       if (response.status === 200) {
//         window.location.href = response.data.data.data.link;
//       }
//     } catch (error) {
//       console.error("Payment error:", error);
//     }
//   };

//   const filteredOrders = orderData.filter(
//     (order) =>
//       order.customer &&
//       order.customer.toLowerCase().includes(searchQuery.toLowerCase())
//   );

//   return (
//     <div className="w-full px-6 md:px-12 lg:px-20 py-8">
//       <div className="flex justify-between items-center mb-6">
//         <TextField
//           label="Search Orders"
//           variant="outlined"
//           value={searchQuery}
//           onChange={(e) => setSearchQuery(e.target.value)}
//           className="w-full md:w-[300px]"
//         />
//       </div>

//       <Grid container spacing={2}>
//         {filteredOrders.map((order) => (
//           <Grid item xs={12} sm={6} md={4} key={order._id}>
//             <Card>
//               <CardContent>
//                 {order.selectedStockItems?.map((item, idx) => (
//                   <div key={idx}>
//                     <Typography variant="h6">
//                       Product:{" "}
//                       <Box component="span" fontWeight="bold" color="green">
//                         {item.NameOfProduct}
//                       </Box>
//                     </Typography>
//                     <Typography variant="body2">
//                       Quality: {item.typeOfProduct}
//                     </Typography>
//                     <Typography variant="body2">
//                       Quantity: {item.quantity} Ton
//                     </Typography>
//                   </div>
//                 ))}
//                 <Typography>Phone: {order.phoneNumber}</Typography>
//                 <Typography>Address: {order.shippingAddress}</Typography>
//                 <Typography>Total: {order.totalAmount}</Typography>
//                 <Typography>Status: {order.status}</Typography>
//                 <Typography variant="body2">
//                   Date: {new Date(order.createdAt).toLocaleString()}
//                 </Typography>

//                 <div className="mt-4 flex gap-3">
//                   <IconButton onClick={handlePayment}>
//                     <FaAmazonPay size={20} color="black" />
//                   </IconButton>
//                   <IconButton onClick={() => handleDelete(order._id)}>
//                     <FaTrash size={18} color="red" />
//                   </IconButton>
//                   <IconButton onClick={() => handleEdit(order._id)}>
//                     <FaEdit size={18} color="green" />
//                   </IconButton>
//                   <Link to="/dashboard/buyer/view">
//                     <IconButton>
//                       <FaEye size={18} color="blue" />
//                     </IconButton>
//                   </Link>
//                 </div>
//               </CardContent>
//             </Card>
//           </Grid>
//         ))}
//       </Grid>

//       {editingOrderId && (
//         <div className="mt-10">
//           <h3 className="text-xl font-bold text-green-600 mb-4">Edit Order</h3>
//           {editedOrder.selectedStockItems?.map((item, idx) => (
//             <TextField
//               key={idx}
//               label={`Quantity for ${item.NameOfProduct}`}
//               variant="outlined"
//               value={item.quantity || ""}
//               onChange={(e) =>
//                 handleEditOrderData("quantity", e.target.value, idx)
//               }
//               style={{ marginRight: 16, marginBottom: 16 }}
//             />
//           ))}

//           <TextField
//             label="Phone Number"
//             variant="outlined"
//             value={editedOrder.phoneNumber || ""}
//             onChange={(e) =>
//               handleEditOrderData("phoneNumber", e.target.value)
//             }
//             style={{ marginRight: 16, marginBottom: 16 }}
//           />
//           <TextField
//             label="Shipping Address"
//             variant="outlined"
//             value={editedOrder.shippingAddress || ""}
//             onChange={(e) =>
//               handleEditOrderData("shippingAddress", e.target.value)
//             }
//             style={{ marginRight: 16, marginBottom: 16 }}
//           />

//           <Button
//             variant="contained"
//             style={{ backgroundColor: "green", color: "white" }}
//             onClick={handleSaveEdit}
//             disabled={isLoading}
//           >
//             {isLoading ? "Saving..." : "Save Changes"}
//           </Button>
//           {successMessage && (
//             <p className="mt-2 text-sm text-green-600">{successMessage}</p>
//           )}
//         </div>
//       )}
//     </div>
//   );
// };

// export default AllOrder;



import React, { useState, useEffect } from "react";
import {
  Typography,
  Box,
  Card,
  CardContent,
  Grid,
  TextField,
  IconButton,
  Button,
  Chip,
  Avatar,
  Divider,
  Fade,
  Skeleton,
  Alert,
  Container,
  Paper,
  InputAdornment,
} from "@mui/material";
import { Link } from "react-router-dom";
import axios from "axios";

// Icons from react-icons
import { 
  FaAmazonPay, 
  FaTrash, 
  FaEdit, 
  FaEye, 
  FaSearch,
  FaShoppingCart,
  FaMapMarkerAlt,
  FaPhone,
  FaCalendarAlt,
  FaDollarSign,
  FaBox
} from "react-icons/fa";

const AllOrder = () => {
  const [searchQuery, setSearchQuery] = useState("");
  const [editingOrderId, setEditingOrderId] = useState(null);
  const [editedOrder, setEditedOrder] = useState({});
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState("");
  const [orderData, setOrderData] = useState([]);
  const [successMessage, setSuccessMessage] = useState("");

  useEffect(() => {
    fetchOrders();
  }, []);

  useEffect(() => {
    if (successMessage) {
      setTimeout(() => {
        setSuccessMessage("");
        window.location.reload();
      }, 2000);
    }
  }, [successMessage]);

  const fetchOrders = async () => {
    setIsLoading(true);
    const token = localStorage.getItem("token");
    if (!token) {
      setError("No token found");
      setIsLoading(false);
      return;
    }

    try {
      const response = await axios.get(
        "https://agrisokoconnect-backend-ipza.onrender.com/AgriSoko/order/retrieve",
        {
          headers: { Authorization: `Bearer ${token}` },
        }
      );
      setOrderData(response.data.data || []);
    } catch (error) {
      console.error(error);
      setError("Failed to fetch stock data");
    } finally {
      setIsLoading(false);
    }
  };

  const handleDelete = async (id) => {
    try {
      const token = localStorage.getItem("token");
      await axios.delete(
        `https://agrisokoconnect-backend-ipza.onrender.com/AgriSoko/order/delete/${id}`,
        {
          headers: { Authorization: `Bearer ${token}` },
        }
      );
      setOrderData((prevOrders) =>
        prevOrders.filter((order) => order._id !== id)
      );
      setSuccessMessage("Order deleted successfully");
    } catch (error) {
      console.error("Error deleting order:", error);
      setError(error.message);
    }
  };

  const handleEdit = (id) => {
    setEditingOrderId(id);
    const order = orderData.find((order) => order._id === id);
    setEditedOrder(order);
  };

  const handleSaveEdit = async () => {
    setIsLoading(true);
    try {
      const token = localStorage.getItem("token");
      const updates = {
        selectedStockItems: editedOrder.selectedStockItems.map((item) => ({
          NameOfProduct: item.NameOfProduct,
          typeOfProduct: item.typeOfProduct,
          quantity: item.quantity,
        })),
        phoneNumber: editedOrder.phoneNumber,
        shippingAddress: editedOrder.shippingAddress,
      };

      await axios.put(
        `https://agrisokoconnect-backend-ipza.onrender.com/AgriSoko/order/update/${editingOrderId}`,
        updates,
        {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        }
      );
      setSuccessMessage("Order updated successfully");
      setEditingOrderId(null);
    } catch (error) {
      console.error("Error updating order:", error);
    } finally {
      setIsLoading(false);
    }
  };

  const handleEditOrderData = (field, value) => {
    if (field === "quantity") {
      setEditedOrder((prev) => ({
        ...prev,
        selectedStockItems: prev.selectedStockItems.map((item, index) =>
          index === 0 ? { ...item, quantity: value } : item
        ),
      }));
    } else {
      setEditedOrder((prev) => ({
        ...prev,
        [field]: value,
      }));
    }
  };

  const handlePayment = async () => {
    try {
      const token = localStorage.getItem("token");
      const response = await axios.get(
        "https://agrisokoconnect-backend-ipza.onrender.com/AgriSoko/pay/momo",
        {
          headers: { Authorization: `Bearer ${token}` },
        }
      );
      if (response.status === 200) {
        window.location.href = response.data.data.data.link;
      }
    } catch (error) {
      console.error("Payment error:", error);
    }
  };

  const getStatusColor = (status) => {
    switch (status?.toLowerCase()) {
      case "pending":
        return { color: "#ff9800", bgcolor: "#fff3e0" };
      case "completed":
        return { color: "#4caf50", bgcolor: "#e8f5e8" };
      case "cancelled":
        return { color: "#f44336", bgcolor: "#ffebee" };
      default:
        return { color: "#757575", bgcolor: "#f5f5f5" };
    }
  };

  const filteredOrders = orderData.filter(
    (order) =>
      order.customer &&
      order.customer.toLowerCase().includes(searchQuery.toLowerCase())
  );

  if (isLoading) {
    return (
      <Container maxWidth="xl" sx={{ py: 4 }}>
        <Box sx={{ mb: 4 }}>
          <Skeleton variant="text" width={300} height={60} />
          <Skeleton variant="rectangular" width="100%" height={60} sx={{ mt: 2 }} />
        </Box>
        <Grid container spacing={3}>
          {[1, 2, 3, 4, 5, 6].map((item) => (
            <Grid item xs={12} sm={6} lg={4} key={item}>
              <Skeleton variant="rectangular" width="100%" height={400} sx={{ borderRadius: 2 }} />
            </Grid>
          ))}
        </Grid>
      </Container>
    );
  }

  return (
    <Box sx={{ 
      minHeight: '100vh', 
      // background: 'linear-gradient(135deg, #667eea 0%, #764ba2 100%)',
      py: 4 
    }}>
      <Container maxWidth="xl">
        {/* Header Section */}
        <Paper 
          elevation={0} 
          sx={{ 
            p: 4, 
            mb: 4, 
            borderRadius: 3,
            background: 'rgba(255, 255, 255, 0.95)',
            backdropFilter: 'blur(10px)'
          }}
        >
          <Box sx={{ display: 'flex', alignItems: 'center', mb: 3 }}>
            <Avatar sx={{ bgcolor: '#4caf50', mr: 2, width: 56, height: 56 }}>
              <FaShoppingCart size={24} />
            </Avatar>
            <Box>
              <Typography variant="h4" sx={{ fontWeight: 'bold', color: '#2c3e50' }}>
                Order Management
              </Typography>
              <Typography variant="subtitle1" sx={{ color: '#7f8c8d', mt: 0.5 }}>
                Manage and track all your orders
              </Typography>
            </Box>
          </Box>

          <TextField
            fullWidth
            variant="outlined"
            placeholder="Search orders by customer name..."
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
            InputProps={{
              startAdornment: (
                <InputAdornment position="start">
                  <FaSearch color="#7f8c8d" />
                </InputAdornment>
              ),
            }}
            sx={{
              '& .MuiOutlinedInput-root': {
                borderRadius: 2,
                backgroundColor: 'white',
              }
            }}
          />
        </Paper>

        {/* Success/Error Messages */}
        {successMessage && (
          <Fade in={!!successMessage}>
            <Alert severity="success" sx={{ mb: 3, borderRadius: 2 }}>
              {successMessage}
            </Alert>
          </Fade>
        )}

        {error && (
          <Alert severity="error" sx={{ mb: 3, borderRadius: 2 }}>
            {error}
          </Alert>
        )}

        {/* Orders Grid */}
        <Grid container spacing={3}>
          {filteredOrders.length === 0 ? (
            <Grid item xs={12}>
              <Paper sx={{ p: 8, textAlign: 'center', borderRadius: 3 }}>
                <FaShoppingCart size={64} color="#bdc3c7" />
                <Typography variant="h5" sx={{ mt: 2, color: '#7f8c8d' }}>
                  No orders found
                </Typography>
                <Typography variant="body1" sx={{ color: '#95a5a6', mt: 1 }}>
                  {searchQuery ? 'Try adjusting your search criteria' : 'Start by creating your first order'}
                </Typography>
              </Paper>
            </Grid>
          ) : (
            filteredOrders.map((order, index) => (
              <Grid item xs={12} sm={6} lg={4} key={order._id}>
                <Fade in timeout={300 + index * 100}>
                  <Card 
                    sx={{ 
                      borderRadius: 3,
                      overflow: 'hidden',
                      transition: 'all 0.3s ease',
                      '&:hover': {
                        transform: 'translateY(-8px)',
                        boxShadow: '0 20px 40px rgba(0,0,0,0.1)'
                      },
                      background: 'linear-gradient(145deg, #ffffff 0%, #f8f9fa 100%)'
                    }}
                  >
                    <Box sx={{ 
                      background: 'linear-gradient(135deg, #4caf50 0%, #45a049 100%)',
                      p: 2,
                      color: 'white'
                    }}>
                      <Box sx={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
                        <Typography variant="h6" sx={{ fontWeight: 'bold' }}>
                          Order #{order._id?.slice(-6)}
                        </Typography>
                        <Chip 
                          label={order.status || 'Pending'}
                          size="small"
                          sx={{
                            ...getStatusColor(order.status),
                            fontWeight: 'bold',
                            textTransform: 'capitalize'
                          }}
                        />
                      </Box>
                    </Box>

                    <CardContent sx={{ p: 3 }}>
                      {/* Product Information */}
                      {order.selectedStockItems?.map((item, idx) => (
                        <Box key={idx} sx={{ mb: 2 }}>
                          <Box sx={{ display: 'flex', alignItems: 'center', mb: 1 }}>
                            <FaBox color="#4caf50" style={{ marginRight: 8 }} />
                            <Typography variant="h6" sx={{ fontWeight: 'bold', color: '#2c3e50' }}>
                              {item.NameOfProduct}
                            </Typography>
                          </Box>
                          <Box sx={{ pl: 3 }}>
                            <Typography variant="body2" sx={{ color: '#7f8c8d', mb: 0.5 }}>
                              Quality: <span style={{ fontWeight: 'bold' }}>{item.typeOfProduct}</span>
                            </Typography>
                            <Typography variant="body2" sx={{ color: '#7f8c8d' }}>
                              Quantity: <span style={{ fontWeight: 'bold' }}>{item.quantity} Ton</span>
                            </Typography>
                          </Box>
                        </Box>
                      ))}

                      <Divider sx={{ my: 2 }} />

                      {/* Contact & Shipping Info */}
                      <Box sx={{ mb: 2 }}>
                        <Box sx={{ display: 'flex', alignItems: 'center', mb: 1 }}>
                          <FaPhone color="#3498db" style={{ marginRight: 8 }} />
                          <Typography variant="body2" sx={{ color: '#2c3e50' }}>
                            {order.phoneNumber}
                          </Typography>
                        </Box>
                        <Box sx={{ display: 'flex', alignItems: 'flex-start', mb: 1 }}>
                          <FaMapMarkerAlt color="#e74c3c" style={{ marginRight: 8, marginTop: 2 }} />
                          <Typography variant="body2" sx={{ color: '#2c3e50', lineHeight: 1.4 }}>
                            {order.shippingAddress}
                          </Typography>
                        </Box>
                      </Box>

                      <Divider sx={{ my: 2 }} />

                      {/* Order Details */}
                      <Box sx={{ mb: 3 }}>
                        <Box sx={{ display: 'flex', justifyContent: 'space-between', mb: 1 }}>
                          <Box sx={{ display: 'flex', alignItems: 'center' }}>
                            <FaDollarSign color="#f39c12" style={{ marginRight: 4 }} />
                            <Typography variant="body2" sx={{ color: '#7f8c8d' }}>Total:</Typography>
                          </Box>
                          <Typography variant="h6" sx={{ fontWeight: 'bold', color: '#2c3e50' }}>
                            {order.totalAmount} RWF
                          </Typography>
                        </Box>
                        <Box sx={{ display: 'flex', alignItems: 'center' }}>
                          <FaCalendarAlt color="#9b59b6" style={{ marginRight: 8 }} />
                          <Typography variant="caption" sx={{ color: '#7f8c8d' }}>
                            {new Date(order.createdAt).toLocaleDateString('en-US', {
                              year: 'numeric',
                              month: 'short',
                              day: 'numeric',
                              hour: '2-digit',
                              minute: '2-digit'
                            })}
                          </Typography>
                        </Box>
                      </Box>

                      {/* Action Buttons */}
                      <Box sx={{ display: 'flex', gap: 1, justifyContent: 'center' }}>
                        <IconButton 
                          onClick={handlePayment}
                          sx={{ 
                            bgcolor: '#f8f9fa',
                            '&:hover': { bgcolor: '#e9ecef', transform: 'scale(1.1)' },
                            transition: 'all 0.2s'
                          }}
                        >
                          <FaAmazonPay size={20} color="#ff9900" />
                        </IconButton>
                        <IconButton 
                          onClick={() => handleDelete(order._id)}
                          sx={{ 
                            bgcolor: '#f8f9fa',
                            '&:hover': { bgcolor: '#ffebee', transform: 'scale(1.1)' },
                            transition: 'all 0.2s'
                          }}
                        >
                          <FaTrash size={16} color="#f44336" />
                        </IconButton>
                        <IconButton 
                          onClick={() => handleEdit(order._id)}
                          sx={{ 
                            bgcolor: '#f8f9fa',
                            '&:hover': { bgcolor: '#e8f5e8', transform: 'scale(1.1)' },
                            transition: 'all 0.2s'
                          }}
                        >
                          <FaEdit size={16} color="#4caf50" />
                        </IconButton>
                        <Link to="/dashboard/buyer/view" style={{ textDecoration: 'none' }}>
                          <IconButton 
                            sx={{ 
                              bgcolor: '#f8f9fa',
                              '&:hover': { bgcolor: '#e3f2fd', transform: 'scale(1.1)' },
                              transition: 'all 0.2s'
                            }}
                          >
                            <FaEye size={16} color="#2196f3" />
                          </IconButton>
                        </Link>
                      </Box>
                    </CardContent>
                  </Card>
                </Fade>
              </Grid>
            ))
          )}
        </Grid>

        {/* Edit Modal */}
        {editingOrderId && (
          <Fade in timeout={300}>
            <Paper 
              sx={{ 
                mt: 4, 
                p: 4, 
                borderRadius: 3,
                background: 'rgba(255, 255, 255, 0.95)',
                backdropFilter: 'blur(10px)'
              }}
            >
              <Typography variant="h5" sx={{ 
                fontWeight: 'bold', 
                color: '#2c3e50', 
                mb: 3,
                display: 'flex',
                alignItems: 'center'
              }}>
                <FaEdit style={{ marginRight: 12 }} />
                Edit Order
              </Typography>

              <Grid container spacing={3}>
                {editedOrder.selectedStockItems?.map((item, idx) => (
                  <Grid item xs={12} sm={6} key={idx}>
                    <TextField
                      fullWidth
                      label={`Quantity for ${item.NameOfProduct}`}
                      variant="outlined"
                      value={item.quantity || ""}
                      onChange={(e) =>
                        handleEditOrderData("quantity", e.target.value, idx)
                      }
                      sx={{
                        '& .MuiOutlinedInput-root': {
                          borderRadius: 2,
                        }
                      }}
                    />
                  </Grid>
                ))}

                <Grid item xs={12} sm={6}>
                  <TextField
                    fullWidth
                    label="Phone Number"
                    variant="outlined"
                    value={editedOrder.phoneNumber || ""}
                    onChange={(e) =>
                      handleEditOrderData("phoneNumber", e.target.value)
                    }
                    sx={{
                      '& .MuiOutlinedInput-root': {
                        borderRadius: 2,
                      }
                    }}
                  />
                </Grid>

                <Grid item xs={12} sm={6}>
                  <TextField
                    fullWidth
                    label="Shipping Address"
                    variant="outlined"
                    multiline
                    rows={2}
                    value={editedOrder.shippingAddress || ""}
                    onChange={(e) =>
                      handleEditOrderData("shippingAddress", e.target.value)
                    }
                    sx={{
                      '& .MuiOutlinedInput-root': {
                        borderRadius: 2,
                      }
                    }}
                  />
                </Grid>
              </Grid>

              <Box sx={{ display: 'flex', gap: 2, mt: 3 }}>
                <Button
                  variant="contained"
                  onClick={handleSaveEdit}
                  disabled={isLoading}
                  sx={{
                    bgcolor: '#4caf50',
                    '&:hover': { bgcolor: '#45a049' },
                    borderRadius: 2,
                    px: 4,
                    py: 1.5
                  }}
                >
                  {isLoading ? "Saving..." : "Save Changes"}
                </Button>
                <Button
                  variant="outlined"
                  onClick={() => setEditingOrderId(null)}
                  sx={{
                    borderColor: '#7f8c8d',
                    color: '#7f8c8d',
                    '&:hover': { borderColor: '#34495e', color: '#34495e' },
                    borderRadius: 2,
                    px: 4,
                    py: 1.5
                  }}
                >
                  Cancel
                </Button>
              </Box>
            </Paper>
          </Fade>
        )}
      </Container>
    </Box>
  );
};

export default AllOrder;