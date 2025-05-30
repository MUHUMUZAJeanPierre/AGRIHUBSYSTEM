import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Layout from "./Layout/Layout";
import Home from "./Pages/Home";
import Auth from "./Component/Auth";
import Shop from "./Pages/Shop";
import ProtectedRoute from "./ProtectedRoute";
import BuyerLayout from "./Dashboard/Buyer/BuyerLayout";
// import SignIn from "./Authentication/SignIn";
// import SignUp from "./Authentication/SignUp";
// import Forget from "./Authentication/Forget";
// import Reset from "./Authentication/Reset";
// import Otp from "./Authentication/Otp";
// import About from "./Pages/About";
// import Contact from "./Pages/Contact";
// import Services from "./Pages/Services";
// import Farmers from "./Pages/Farmers";
// import Navbar from "./Dashboard/Navbar";

// import FirstPage from "./Dashboard/Admin/FirstPage";
// import Cooperatives from "./Dashboard/Admin/Cooperatives";
// import Operation from "./Dashboard/Admin/Operation";
// import Setting from "./Dashboard/Admin/Setting";
// import OneOrderDetails from "./Dashboard/Admin/OneOrderDetails";

// import LandingPage from "./Dashboard/Farmer/LandingPage";
// import ReceivedOrders from "./Dashboard/Farmer/ReceivedOrders";
// import UploadProduct from "./Dashboard/Farmer/UploadProduct";
// import Profile from "./Dashboard/Farmer/Profile";
// import FarmerLayout from "./Dashboard/Farmer/FarmerLayout";
// import Stock from "./Dashboard/Farmer/Stock";

// import BuyerLayout from "./Dashboard/Buyer/BuyerLayout";
import BLandingPage from "./Dashboard/Buyer/BLandingPage";
import ViewOrder from "./Dashboard/Buyer/ViewOrder";
import Support from "./Dashboard/Buyer/Support";
import BuyerProfile from "./Dashboard/Buyer/Profile";
import News from "./Dashboard/Buyer/News";
import AllOrder from "./Dashboard/Buyer/AllOrder";
import CreateOrder from "./Dashboard/Buyer/CreateOrder";
import About from "./Pages/About";
import Otp from "./Authentication/Otp";
import Forget from "./Authentication/Forget";
import Reset from "./Authentication/Reset";
import ServicesSection from "./Pages/ServicesSection";

const App = () => {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<Home />} />
          <Route path="/shop" element={<Shop />} />
          <Route path="/about" element={<About />} />
          <Route path="/services" element={<ServicesSection />} />

        </Route>
        <Route path="/login" element={<Auth />} />
        <Route path="/otp" element={<Otp />} />
        <Route path="/forget" element={<Forget />} />
        <Route path="/reset" element={<Reset />} />

         <Route path="dashboard">
          <Route
            path="buyer"
            // element={<ProtectedRoute allowedRoles={["buyer"]} />}
          >
          
            <Route path="" element={<BuyerLayout />}>
              <Route path="" element={<BLandingPage />} />
              <Route path="allorders" element={<AllOrder />} />
              <Route
                path="create/:productId/:NameOfProduct"
                element={<CreateOrder />}
              />
              <Route path="create" element={<CreateOrder />} />
              <Route path="profile" element={<BuyerProfile />} />
              <Route path="news" element={<News />} />
              <Route path="view" element={<ViewOrder />} />
              <Route path="support" element={<Support />} />
            </Route>
          </Route>
        </Route> 
      </Routes>
    </Router>
  );
};

export default App;
