import React from "react";

const App = () => {
  return (
    <div className="min-h-screen bg-pink-100 p-6 font-sans">
      <header className="text-center text-4xl font-bold text-pink-700 mb-10">
        🐾 MeowLuMart - Cat Shop 🐾
      </header>
      <main className="grid grid-cols-1 md:grid-cols-3 gap-6">
        {["Cat Food", "Cat Toys", "Cat Beds"].map((item, idx) => (
          <div key={idx} className="bg-white p-6 rounded-2xl shadow-md hover:scale-105 transition-transform">
            <h2 className="text-xl font-semibold mb-2">{item}</h2>
            <p className="text-gray-600">Best quality {item.toLowerCase()} for your feline friends.</p>
            <button className="mt-4 bg-pink-500 text-white px-4 py-2 rounded-xl hover:bg-pink-600">
              Shop Now
            </button>
          </div>
        ))}
      </main>
      <footer className="text-center text-gray-500 mt-10">
        &copy; 2025 MeowLuMart. All rights reserved.
      </footer>
    </div>
  );
};

export default App;
