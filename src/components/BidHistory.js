import React from "react";

function BidHistory() {
  const dummyBids = [
    { user: "Alice", amount: 5000 },
    { user: "Bob", amount: 4800 },
    { user: "Carol", amount: 4700 },
  ];

  return (
    <div className="mt-6">
      <h3 className="font-semibold mb-2">Bid History</h3>
      <ul className="space-y-1">
        {dummyBids.map((bid, index) => (
          <li key={index} className="text-sm text-gray-700">
            {bid.user} – ₹{bid.amount}
          </li>
        ))}
      </ul>
    </div>
  );
}

export default BidHistory;
