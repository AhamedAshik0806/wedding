"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";

export default function PasswordForm() {
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");
  const router = useRouter();

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (password === "af") {
      router.push("/invitation");
    } else {
      setError("Incorrect password. Please try again.");
    }
  };

  return (
    <div className="bg-white/80 backdrop-blur-xl rounded-3xl shadow-2xl p-10 w-96 text-center">
      <h1 className="text-3xl font-bold text-pink-600 mb-6">💍 Nikkah Invitation</h1>
      <p className="mb-4 text-gray-600">Enter the password to view the invitation</p>

      <form onSubmit={handleSubmit}>
        <input
          type="password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          placeholder="Enter password"
          className="w-full px-4 py-3 rounded-xl border border-pink-300 focus:outline-none focus:ring-2 focus:ring-pink-400 mb-3"
        />
        {error && <p className="text-red-500 text-sm mb-3">{error}</p>}
        <button
          type="submit"
          className="bg-pink-500 hover:bg-pink-600 text-white w-full py-3 rounded-xl font-semibold transition-all"
        >
          Unlock Invitation
        </button>
      </form>
    </div>
  );
}
