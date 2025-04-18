import React from "react";
import BidHistory from "../components/BidHistory";
import Timer from "../components/Timer";

function AuctionDetailPage() {
  return (
    <div className="max-w-4xl mx-auto bg-white p-6 shadow rounded">
      <h1 className="text-2xl font-bold mb-2">Vintage Clock</h1>
      <p className="text-gray-600 mb-4">Beautiful old clock from the 1800s.</p>

      <div className="mb-4">
        <Timer endTime={new Date(Date.now() + 3600 * 1000)} />
      </div>

      <div className="mb-6">
        <h2 className="text-lg font-semibold">Current Bid: ₹5,000</h2>
        <button className="mt-2 bg-blue-600 text-white px-4 py-2 rounded hover:bg-blue-700">
          Place Bid
        </button>
      </div>

      <BidHistory />
    </div>
  );
}

export default AuctionDetailPage;
