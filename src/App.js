import React, { useState } from "react";
import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";

// Pages
import HomePage from "./pages/HomePage";
import AuctionsPage from "./pages/AuctionsPage";
import AuctionDetailPage from "./pages/AuctionDetailPage";
import CreateAuctionPage from "./pages/CreateAuctionPage";
import DashboardPage from "./pages/DashboardPage";
import LoginPage from "./pages/LoginPage";
import RegisterPage from "./pages/RegisterPage";

// Components
import PrivateRoute from "./components/PrivateRoute";

function App() {
  const [user, setUser] = useState(null);

  const handleLogin = (username) => setUser(username);
  const handleLogout = () => setUser(null);

  return (
    <Router>
      <header className="bg-gray-800 text-white p-4">
        <nav className="flex flex-wrap gap-4">
          <Link to="/" className="hover:underline">Home</Link>
          <Link to="/auctions" className="hover:underline">Auctions</Link>
          <Link to="/dashboard" className="hover:underline">Dashboard</Link>
          <Link to="/create" className="hover:underline">Create Auction</Link>
          {user ? (
            <button onClick={handleLogout} className="hover:underline">Logout ({user})</button>
          ) : (
            <>
              <Link to="/login" className="hover:underline">Login</Link>
              <Link to="/register" className="hover:underline">Register</Link>
            </>
          )}
        </nav>
      </header>

      <main className="min-h-screen bg-gray-100 p-6">
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/auctions" element={<AuctionsPage />} />
          <Route path="/auction/:id" element={<AuctionDetailPage />} />
          <Route path="/create" element={
            <PrivateRoute user={user}>
              <CreateAuctionPage />
            </PrivateRoute>
          } />
          <Route path="/dashboard" element={
            <PrivateRoute user={user}>
              <DashboardPage />
            </PrivateRoute>
          } />
          <Route path="/login" element={<LoginPage onLogin={handleLogin} />} />
          <Route path="/register" element={<RegisterPage />} />
        </Routes>
      </main>
    </Router>
  );
}

export default App;
