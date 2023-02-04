import { useState } from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

import Login from "./components/Login";
import Register from "./components/Register";
import ForgotPassword from "./components/ForgotPassword";
import { AuthProvider } from "./contexts/AuthContext";
import PrivateRoutes from "./components/PrivateRoutes";
import Landing from "./pages/Landing";
import Dashboard from "./pages/Dashboard";
import UserPage from "./pages/UserPage";
import Album from "./pages/Album";

function App() {
  return (
    <>
      <Router>
        <AuthProvider>
          <Routes>
            <Route element={<PrivateRoutes />}>
              <Route exact path="dashboard">
                <Route index element={<Dashboard />} />
                <Route exact path="user/:id">
                  <Route index element={<UserPage />} />
                  <Route path="album/:id" element={<Album />} />
                </Route>
              </Route>
            </Route>
            <Route path="/" element={<Landing />} />
            <Route path="register" element={<Register />} />
            <Route path="login" element={<Login />} />
            <Route path="forgot-password" element={<ForgotPassword />} />
          </Routes>
        </AuthProvider>
      </Router>
    </>
  );
}

export default App;
