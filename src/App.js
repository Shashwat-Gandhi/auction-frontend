import React, { useState } from "react";
import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";
import HomePage from "./pages/HomePage";
import DashboardPage from "./pages/DashboardPage";
import AuctionsPage from "./pages/AuctionsPage";
import LoginPage from "./pages/LoginPage";
import PrivateRoute from "./components/PrivateRoute";

function App() {
  const [user, setUser] = useState(null);

  const handleLogin = (username) => setUser(username);
  const handleLogout = () => setUser(null);

  return (
    <Router>
      <header className="bg-gray-800 text-white p-4">
        <nav className="flex gap-4">
          <Link to="/" className="hover:underline">Home</Link>
          <Link to="/auctions" className="hover:underline">Auctions</Link>
          <Link to="/dashboard" className="hover:underline">Dashboard</Link>
          {user ? (
            <button onClick={handleLogout} className="hover:underline">Logout ({user})</button>
          ) : (
            <Link to="/login" className="hover:underline">Login</Link>
          )}
        </nav>
      </header>
      <main className="min-h-screen bg-gray-100 p-6">
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/auctions" element={<AuctionsPage />} />
          <Route path="/login" element={<LoginPage onLogin={handleLogin} />} />
          <Route
            path="/dashboard"
            element={
              <PrivateRoute user={user}>
                <DashboardPage />
              </PrivateRoute>
            }
          />
        </Routes>
      </main>
    </Router>
  );
}

export default App;
