import React, { useState, useEffect } from "react";
import axios from "axios";
import { DataGrid } from "@mui/x-data-grid";
import { Box, CircularProgress } from "@mui/material";

function AllTransaction() {
  const [transactions, setTransactions] = useState([]);
  const [error, setError] = useState("");
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    fetchTransactions();
  }, []);

  const fetchTransactions = async () => {
    let token = localStorage.getItem("token");

    if (!token) {
      setError("No token found. Please log in.");
      return;
    }

    setLoading(true);

    try {
      const response = await axios.get(
        "https://agrisokoconnect-backend-ipza.onrender.com/AgriSoko/transaction/allTransaction",
        {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        }
      );

      const data = response.data;
      setTransactions(data.transactions);
    } catch (error) {
      if (error.response && error.response.status === 401) {
        setError("Unauthorized access. Please log in again.");
      } else {
        setError("Error fetching transactions. Please try again later.");
      }
      console.error("Error fetching transactions:", error);
    } finally {
      setLoading(false);
    }
  };

  const columns = [
    { field: "id", headerName: "ID", width: 100 },
    { field: "userFullName", headerName: "User", width: 200 },
    { field: "type", headerName: "Type", width: 200 },
    { field: "amount", headerName: "Amount", width: 200 },
    { field: "date", headerName: "Date", width: 200 },
  ];

  const rows = transactions.map((transaction, index) => ({
    id: `00${index + 1}`,
    userFullName: transaction.user.fullName,
    type: transaction.type,
    amount: transaction.amount,
    date: new Date(transaction.date).toLocaleDateString(),
  }));

  return (
    <Box
      display="flex"
      justifyContent="center"
      alignItems="center"
      flexDirection="column"
      style={{ height: "100vh" }}
    >
      <h1 style={{ textAlign: "center", 
      marginBottom: "20px", 
      color: "green",
      fontSize: "30px",
      fontFamily: "sans-serif",
      fontWeight: "bold" }}>
        All Transactions
      </h1>
      {error && <p style={{ color: "red" }}>{error}</p>}
      {loading ? (
        <Box
          display="flex"
          justifyContent="center"
          alignItems="center"
          height="400px"
        >
          <CircularProgress />
        </Box>
      ) : (
        <Box
          display="flex"
          justifyContent="center"
          alignItems="center"
          flexDirection="column"
          style={{ height: 400, width: "80%" }}
        >
          <DataGrid
            rows={rows}
            columns={columns}
            pageSize={5}
            rowsPerPageOptions={[5, 10, 20]}
            checkboxSelection
          />
        </Box>
      )}
    </Box>
  );
}

export default AllTransaction;
