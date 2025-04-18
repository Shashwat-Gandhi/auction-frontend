import React from "react";

function CreateAuctionPage() {
  return (
    <div className="max-w-xl mx-auto bg-white p-6 shadow rounded">
      <h1 className="text-2xl font-bold mb-4">Create New Auction</h1>
      <form className="flex flex-col gap-4">
        <input className="p-2 border rounded" placeholder="Title" />
        <textarea className="p-2 border rounded" placeholder="Description" rows="4" />
        <input className="p-2 border rounded" type="number" placeholder="Starting Bid (₹)" />
        <input className="p-2 border rounded" type="datetime-local" />
        <button className="bg-green-600 text-white px-4 py-2 rounded hover:bg-green-700">
          Submit Auction
        </button>
      </form>
    </div>
  );
}

export default CreateAuctionPage;
