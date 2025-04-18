import React from "react";

function AuctionCard({ itemName, description, currentBid, timeLeft }) {
  return (
    <div className="bg-white shadow-md rounded-lg overflow-hidden p-4">
      <h3 className="text-xl font-semibold">{itemName}</h3>
      <p className="mt-2 text-gray-600">{description}</p>
      <div className="mt-4">
        <p className="font-bold text-lg">Current Bid: ${currentBid}</p>
        <p className="text-sm text-gray-500">Time Left: {timeLeft} hours</p>
      </div>
      <button className="mt-4 bg-blue-500 text-white py-2 px-4 rounded-md hover:bg-blue-600">
        Place Bid
      </button>
    </div>
  );
}

export default AuctionCard;
