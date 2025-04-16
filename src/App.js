import React from "react";
import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";
import AuctionsPage from "./pages/AuctionsPage";

function Home() {
  return (
    <div className="p-6">
      <h1 className="text-2xl font-bold">Auction Platform</h1>
      <p className="mt-2">Welcome to the auction platform. Browse and bid on live auctions.</p>
    </div>
  );
}


function Dashboard() {
  return (
    <div className="p-6">
      <h1 className="text-2xl font-bold">Dashboard</h1>
      <p className="mt-2">View your activity here.</p>
    </div>
  );
}

function App() {
  return (
    <Router>
      <header className="bg-gray-800 text-white p-4">
        <nav className="flex gap-4">
          <Link to="/" className="hover:underline">Home</Link>
          <Link to="/auctions" className="hover:underline">Auctions</Link>
          <Link to="/dashboard" className="hover:underline">Dashboard</Link>
        </nav>
      </header>
      <main className="min-h-screen bg-gray-100 p-6">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/auctions" element={<AuctionsPage />} />
          <Route path="/dashboard" element={<Dashboard />} />
        </Routes>
      </main>
    </Router>
  );
}

export default App;
