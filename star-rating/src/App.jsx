import { useState } from "react";
import StarRating from "./components/StarRating";

function App() {
  const [rating, setRating] = useState(0);

  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-gradient-to-br from-blue-50 to-purple-50 p-8">
      <div className="bg-white rounded-xl shadow-lg p-8 w-full max-w-md">
        <h1 className="text-3xl font-bold text-gray-800 mb-6">Star Rating Component</h1>
        <div className="mb-6">
          <StarRating totalStars={5} onRate={setRating} />
        </div>
        <h2 className="text-xl font-semibold text-gray-700">
          Your Rating: <span className="text-indigo-600">{rating}</span> / 5
        </h2>
      </div>
    </div>
  );
}

export default App;