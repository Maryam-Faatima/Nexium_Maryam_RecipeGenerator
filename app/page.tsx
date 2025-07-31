"use client";

import { useState } from "react";

export default function Home() {
  const [ingredients, setIngredients] = useState("");
  const [recipe, setRecipe] = useState("");
  const [loading, setLoading] = useState(false);

  const generateRecipe = async () => {
    if (!ingredients.trim()) return;
    setLoading(true);
    setRecipe("");

    try {
      const res = await fetch("/api/recipe", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ ingredients }),
      });
      const data = await res.json();
      setRecipe(data.recipe || "No recipe found.");
    } catch (err) {
      setRecipe("Error generating recipe.");
    } finally {
      setLoading(false);
    }
  };

  return (
    <main className="min-h-screen bg-gradient-to-br from-pink-50 to-pink-100 flex items-center justify-center px-4 py-8">
      <div className="w-full max-w-xl bg-white shadow-2xl rounded-3xl p-8 space-y-6 border border-pink-200">
        <h1 className="text-4xl font-extrabold text-pink-600 text-center">
          🍓 AI Recipe Generator
        </h1>

        <div>
          <label className="block text-pink-700 font-medium mb-2">
            Enter Ingredients:
          </label>
          <textarea
            className="w-full p-4 rounded-xl border-2 border-pink-300 focus:outline-none focus:ring-2 focus:ring-pink-500 bg-pink-100 text-pink-900 placeholder-pink-400 resize-y min-h-[120px] max-h-64"
            placeholder="e.g. eggs, flour, chocolate..."
            value={ingredients}
            onChange={(e) => setIngredients(e.target.value)}
          />
        </div>

        <button
          onClick={generateRecipe}
          disabled={loading}
          className="w-full py-3 text-white font-semibold bg-pink-500 hover:bg-pink-600 rounded-xl transition duration-200 flex justify-center items-center"
        >
          {loading ? (
            <span className="animate-pulse">✨ Generating...</span>
          ) : (
            "✨ Generate Recipe"
          )}
        </button>

        {recipe && (
          <div className="bg-pink-50 p-5 rounded-xl border border-pink-300 text-pink-800 whitespace-pre-line shadow-md">
            <h2 className="text-xl font-bold mb-3">🍽️ Your Recipe</h2>
            <div>{recipe}</div>
          </div>
        )}
      </div>
    </main>
  );
}


// 'use client';

// import { useState } from 'react';

// export default function Home() {
//   const [ingredients, setIngredients] = useState('');
//   const [recipe, setRecipe] = useState('');
//   const [loading, setLoading] = useState(false);

//   const handleGenerate = async () => {
//     setLoading(true);
//     setRecipe('');
//     try {
//       const response = await fetch('/api/recipe', {
//         method: 'POST',
//         headers: { 'Content-Type': 'application/json' },
//         body: JSON.stringify({ ingredients }),
//       });

//       const data = await response.json();
//       if (data.recipe) {
//         setRecipe(data.recipe);
//       } else {
//         setRecipe('No recipe found. Try different ingredients.');
//       }
//     } catch (error) {
//       setRecipe('An error occurred. Please try again.');
//     }
//     setLoading(false);
//   };

//   return (
//     <main className="min-h-screen bg-pink-50 flex flex-col items-center justify-center px-4">
//       <div className="max-w-xl w-full bg-white p-8 rounded-2xl shadow-xl">
//         <h1 className="text-3xl font-bold text-center mb-6 text-pink-600">
//           Recipe Generator
//         </h1>
//         <p className="text-center mb-4 text-gray-600">
//           Enter the ingredients you have and generate a recipe ✨
//         </p>
//         <input
//           type="text"
//           value={ingredients}
//           onChange={(e) => setIngredients(e.target.value)}
//           placeholder="e.g. eggs, flour, milk"
//           className="w-full p-3 border border-gray-300 rounded-xl mb-4 focus:outline-none focus:ring-2 focus:ring-pink-400"
//         />
//         <button
//           onClick={handleGenerate}
//           className="w-full bg-pink-500 text-white font-semibold py-3 rounded-xl hover:bg-pink-600 transition duration-200"
//         >
//           {loading ? 'Generating...' : 'Generate Recipe'}
//         </button>

//         {recipe && (
//           <div className="mt-6 bg-gray-100 p-4 rounded-xl whitespace-pre-wrap text-gray-700">
//             {recipe}
//           </div>
//         )}
//       </div>
//     </main>
//   );
// }

