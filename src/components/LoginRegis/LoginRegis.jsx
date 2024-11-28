import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import "../LoginRegis/login.css";
import { FaLock, FaUser, FaEnvelope } from "react-icons/fa";

const LoginRegis = () => {
  const [isRegistering, setIsRegistering] = useState(false);
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [email, setEmail] = useState(""); // For registration
  const [error, setError] = useState("");
  const navigate = useNavigate();

  // Switch between login and registration forms
  const registerLink = (e) => {
    e.preventDefault();
    setIsRegistering(true);
  };

  const loginLink = (e) => {
    e.preventDefault();
    setIsRegistering(false);
  };

  // Handle user registration
  const handleRegister = (e) => {
    e.preventDefault();

    // Check if the user already exists
    const users = JSON.parse(localStorage.getItem("users")) || [];
    const userExists = users.find((user) => user.username === username);

    if (userExists) {
      setError("Username already exists!");
      return;
    }

    // Save new user to localStorage
    const newUser = { username, password, email };
    users.push(newUser);
    localStorage.setItem("users", JSON.stringify(users));

    setError("");
    alert("Registration successful! You can now log in.");
    setIsRegistering(false); // Switch back to login
  };

  // Handle user login
  const handleLogin = (e) => {
    e.preventDefault();

    // Retrieve users from localStorage
    const users = JSON.parse(localStorage.getItem("users")) || [];
    const validUser = users.find(
      (user) => user.username === username && user.password === password
    );

    if (validUser) {
      localStorage.setItem("isAuthenticated", "true");
      localStorage.setItem("currentUser", JSON.stringify(validUser));
      setError("");
      navigate("/general"); // Redirect to main app route
    } else {
      setError("Invalid username or password!");
    }
  };

  return (
    <div className="ImageBg">
      <div className={`wrapper ${isRegistering ? "active" : ""}`}>
        {/* Login Form */}
        <div className={`form-box login ${isRegistering ? "" : "active"}`}>
          <form onSubmit={handleLogin}>
            <h1>Login</h1>
            <div className="input-box">
              <input
                type="text"
                placeholder="Username"
                value={username}
                onChange={(e) => setUsername(e.target.value)}
                required
              />
              <FaUser className="icon" />
            </div>
            <div className="input-box">
              <input
                type="password"
                placeholder="Password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                required
              />
              <FaLock className="icon" />
            </div>

            {error && <p className="error-message">{error}</p>}

            <button type="submit">Login</button>
            <div className="register-link">
              <p>
                Don't have an account?{" "}
                <a href="/" onClick={registerLink}>
                  Register
                </a>
              </p>
            </div>
          </form>
        </div>

        {/* Registration Form */}
        <div className={`form-box register ${isRegistering ? "active" : ""}`}>
          <form onSubmit={handleRegister}>
            <h1>Registration</h1>
            <div className="input-box">
              <input
                type="text"
                placeholder="Username"
                value={username}
                onChange={(e) => setUsername(e.target.value)}
                required
              />
              <FaUser className="icon" />
            </div>
            <div className="input-box">
              <input
                type="email"
                placeholder="Email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                required
              />
              <FaEnvelope className="icon" />
            </div>
            <div className="input-box">
              <input
                type="password"
                placeholder="Password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                required
              />
              <FaLock className="icon" />
            </div>

            {error && <p className="error-message">{error}</p>}

            <button type="submit">Register</button>
            <div className="register-link">
              <p>
                Already have an account?{" "}
                <a href="/" onClick={loginLink}>
                  Login
                </a>
              </p>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default LoginRegis;
