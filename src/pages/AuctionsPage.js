// src/pages/AuctionsPage.js
import React from "react";
import AuctionCard from "../components/AuctionCard";

function AuctionsPage() {
  const auctions = [
    {
      itemName: "Vintage Watch",
      description: "A rare vintage wristwatch from 1950s, working condition.",
      currentBid: 1200,
      timeLeft: 3,
    },
    {
      itemName: "Antique Vase",
      description: "Beautiful hand-painted antique vase.",
      currentBid: 300,
      timeLeft: 5,
    },
    {
      itemName: "Guitar",
      description: "Classic electric guitar in excellent condition.",
      currentBid: 850,
      timeLeft: 1,
    },
  ];

  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 p-6">
      {auctions.map((auction, index) => (
        <AuctionCard
          key={index}
          itemName={auction.itemName}
          description={auction.description}
          currentBid={auction.currentBid}
          timeLeft={auction.timeLeft}
        />
      ))}
    </div>
  );
}

export default AuctionsPage;
