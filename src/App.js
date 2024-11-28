import React, { useEffect, useState } from "react";
import { Route, Routes, useNavigate } from "react-router-dom";
import LoginRegis from "./components/LoginRegis/LoginRegis";
import MainRouters from "./Routers/MainRouters";
import Navbar from "./components/Navbar";
import About from "./components/About";

function App() {
  const [isAuthenticated, setIsAuthenticated] = useState(false);
  const navigate = useNavigate();

  const handleLogout = () => {
    localStorage.clear();
    setIsAuthenticated(false);
    navigate("/login");
  };

  useEffect(() => {
    const authStatus = localStorage.getItem("isAuthenticated") === "true";

    if (authStatus) {
      setIsAuthenticated(true);
    } else {
      navigate("/login");
    }
  }, [navigate]);

  return (
    <div>
      {isAuthenticated ? (
        <div>
          <Navbar handleLogout={handleLogout} />
          <MainRouters />
          <button onClick={handleLogout}></button>
          <Routes>
            <Route path="/about" element={<About />} />
          </Routes>
        </div>
      ) : (
        <Routes>
          <Route path="/login" element={<LoginRegis />} />
          <Route path="/about" element={<About />} />
          <Route path="*" element={<div>Redirecting...</div>} />
        </Routes>
      )}
    </div>
  );
}

export default App;
