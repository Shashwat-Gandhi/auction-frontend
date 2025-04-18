import React from "react";

function RegisterPage() {
  return (
    <div className="max-w-md mx-auto bg-white p-6 mt-10 shadow rounded">
      <h2 className="text-xl font-semibold mb-4">Register</h2>
      <form className="flex flex-col gap-4">
        <input className="p-2 border rounded" placeholder="Username" />
        <input className="p-2 border rounded" placeholder="Email" />
        <input className="p-2 border rounded" type="password" placeholder="Password" />
        <button className="bg-blue-600 text-white px-4 py-2 rounded hover:bg-blue-700">
          Register
        </button>
      </form>
    </div>
  );
}

export default RegisterPage;
