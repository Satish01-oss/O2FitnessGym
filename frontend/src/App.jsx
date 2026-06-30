import { BrowserRouter, Routes, Route } from "react-router-dom";
import Navbar from "./components/layout/Navbar";
import Home from "./components/pages/Home";
import About from "./components/pages/About";
import Membership from "./components/pages/Membership";
import Contact from "./components/pages/Contact";
import Login from "./components/auth/authPages/Login";
import CreateAccount from "./components/auth/authPages/CreateAccount";
import VerifyOtp from "./components/auth/OTPVerify/VerifyOtp";

import AdminLayout from "./admin/components/AdminLayout";
import AdminDashboard from "./admin/pages/AdminDashboard";
import AdminMembers from "./admin/pages/AdminMembers";
import AdminPlans from "./admin/pages/AdminPlans";
import AdminPayments from "./admin/pages/AdminPayments";
import AdminRoute from "./admin/routes/AdminRoute";


function App() {

  const phone = "919339974912";

  return (
    <BrowserRouter>
      <Navbar phone={phone} />

      <div className="pt-24">
        <Routes>
          <Route path="/" element={<Home phone={phone} />} />
          <Route path="/about" element={<About />} />
          <Route path="/membership" element={<Membership phone={phone} />} />
          <Route path="/contact" element={<Contact phone={phone} />} />
          <Route path="/login" element={<Login />} />
          <Route path="/create-account" element={<CreateAccount />} />
          <Route path="/verify-otp" element={<VerifyOtp />} />

           {/* ADMIN ROUTES */}
                  <Route
                    path="/admin"
                    element={
                      <AdminRoute>
                        <AdminLayout />
                      </AdminRoute>
                    }
                  >
                    <Route index element={<AdminDashboard />} />
          
                    <Route
                      path="members"
                      element={<AdminMembers />}
                    />
          
                    <Route
                      path="plans"
                      element={<AdminPlans />}
                    />
          
                    <Route
                      path="payments"
                      element={<AdminPayments />}
                    />
                  </Route>

        </Routes>
      </div>
    </BrowserRouter>
  );
}

export default App;