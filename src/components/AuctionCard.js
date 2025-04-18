import React from "react";
import { Link } from "react-router-dom";

function AuctionCard({ title, currentBid, timeLeft }) {
  return (
    <div className="border rounded shadow p-4 bg-white">
      <h2 className="text-lg font-bold">{title}</h2>
      <p className="text-sm text-gray-600">Current Bid: ₹{currentBid}</p>
      <p className="text-sm text-gray-500">Time left: {timeLeft}</p>
      <Link to="/auction/1" className="text-blue-600 hover:underline text-sm">
        View Details
      </Link>
    </div>
  );
}

export default AuctionCard;
