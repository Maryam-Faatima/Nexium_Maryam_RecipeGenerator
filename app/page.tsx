// // "use client";

// // import { useState } from "react";

// // export default function Home() {
// //   const [ingredients, setIngredients] = useState("");
// //   const [recipe, setRecipe] = useState("");
// //   const [loading, setLoading] = useState(false);

// //   const generateRecipe = async () => {
// //     if (!ingredients.trim()) return;
// //     setLoading(true);
// //     setRecipe("");

// //     try {
// //       const res = await fetch("/api/recipe", {
// //         method: "POST",
// //         headers: { "Content-Type": "application/json" },
// //         body: JSON.stringify({ ingredients }),
// //       });
// //       const data = await res.json();
// //       setRecipe(data.recipe || "No recipe found.");
// //     } catch (err) {
// //       setRecipe("Error generating recipe.");
// //     } finally {
// //       setLoading(false);
// //     }
// //   };

// //   return (
// //     <main className="min-h-screen bg-gradient-to-br from-pink-50 to-pink-100 flex items-center justify-center px-4 py-8">
// //       <div className="w-full max-w-xl bg-white shadow-2xl rounded-3xl p-8 space-y-6 border border-pink-200">
// //         <h1 className="text-4xl font-extrabold text-pink-600 text-center">
// //           🍓 AI Recipe Generator
// //         </h1>

// //         <div>
// //           <label className="block text-pink-700 font-medium mb-2">
// //             Enter Ingredients:
// //           </label>
// //           <textarea
// //             className="w-full p-4 rounded-xl border-2 border-pink-300 focus:outline-none focus:ring-2 focus:ring-pink-500 bg-pink-100 text-pink-900 placeholder-pink-400 resize-y min-h-[120px] max-h-64"
// //             placeholder="e.g. eggs, flour, chocolate..."
// //             value={ingredients}
// //             onChange={(e) => setIngredients(e.target.value)}
// //           />
// //         </div>

// //         <button
// //           onClick={generateRecipe}
// //           disabled={loading}
// //           className="w-full py-3 text-white font-semibold bg-pink-500 hover:bg-pink-600 rounded-xl transition duration-200 flex justify-center items-center"
// //         >
// //           {loading ? (
// //             <span className="animate-pulse">✨ Generating...</span>
// //           ) : (
// //             "✨ Generate Recipe"
// //           )}
// //         </button>

// //         {recipe && (
// //           <div className="bg-pink-50 p-5 rounded-xl border border-pink-300 text-pink-800 whitespace-pre-line shadow-md">
// //             <h2 className="text-xl font-bold mb-3">🍽️ Your Recipe</h2>
// //             <div>{recipe}</div>
// //           </div>
// //         )}
// //       </div>
// //     </main>
// //   );
// // }


// // // 'use client';

// // // import { useState } from 'react';

// // // export default function Home() {
// // //   const [ingredients, setIngredients] = useState('');
// // //   const [recipe, setRecipe] = useState('');
// // //   const [loading, setLoading] = useState(false);

// // //   const handleGenerate = async () => {
// // //     setLoading(true);
// // //     setRecipe('');
// // //     try {
// // //       const response = await fetch('/api/recipe', {
// // //         method: 'POST',
// // //         headers: { 'Content-Type': 'application/json' },
// // //         body: JSON.stringify({ ingredients }),
// // //       });

// // //       const data = await response.json();
// // //       if (data.recipe) {
// // //         setRecipe(data.recipe);
// // //       } else {
// // //         setRecipe('No recipe found. Try different ingredients.');
// // //       }
// // //     } catch (error) {
// // //       setRecipe('An error occurred. Please try again.');
// // //     }
// // //     setLoading(false);
// // //   };

// // //   return (
// // //     <main className="min-h-screen bg-pink-50 flex flex-col items-center justify-center px-4">
// // //       <div className="max-w-xl w-full bg-white p-8 rounded-2xl shadow-xl">
// // //         <h1 className="text-3xl font-bold text-center mb-6 text-pink-600">
// // //           Recipe Generator
// // //         </h1>
// // //         <p className="text-center mb-4 text-gray-600">
// // //           Enter the ingredients you have and generate a recipe ✨
// // //         </p>
// // //         <input
// // //           type="text"
// // //           value={ingredients}
// // //           onChange={(e) => setIngredients(e.target.value)}
// // //           placeholder="e.g. eggs, flour, milk"
// // //           className="w-full p-3 border border-gray-300 rounded-xl mb-4 focus:outline-none focus:ring-2 focus:ring-pink-400"
// // //         />
// // //         <button
// // //           onClick={handleGenerate}
// // //           className="w-full bg-pink-500 text-white font-semibold py-3 rounded-xl hover:bg-pink-600 transition duration-200"
// // //         >
// // //           {loading ? 'Generating...' : 'Generate Recipe'}
// // //         </button>

// // //         {recipe && (
// // //           <div className="mt-6 bg-gray-100 p-4 rounded-xl whitespace-pre-wrap text-gray-700">
// // //             {recipe}
// // //           </div>
// // //         )}
// // //       </div>
// // //     </main>
// // //   );
// // // }

// 'use client';

// import { useState } from 'react';

// export default function Home() {
//   const [ingredients, setIngredients] = useState('');
//   const [recipe, setRecipe] = useState('');
//   const [loading, setLoading] = useState(false);

//   const generateRecipe = async () => {
//     if (!ingredients.trim()) return;
//     setLoading(true);
//     setRecipe('');

//     const res = await fetch('/api/recipe', {
//       method: 'POST',
//       headers: { 'Content-Type': 'application/json' },
//       body: JSON.stringify({ ingredients }),
//     });

//     const data = await res.json();
//     setRecipe(data.recipe || 'No recipe found.');
//     setLoading(false);
//   };

//   return (
//     <main className="min-h-screen bg-pastel-cream text-[#444] flex items-center justify-center p-6">
//       <div className="w-full max-w-2xl bg-white rounded-2xl shadow-xl p-8 border-2 border-pastel-pink">
//         <h1 className="text-3xl font-bold text-pastel-pink text-center mb-6">✨ Recipe Generator ✨</h1>

//         <textarea
//           value={ingredients}
//           onChange={(e) => setIngredients(e.target.value)}
//           placeholder="Enter ingredients (e.g., eggs, milk, flour)..."
//           className="w-full p-4 rounded-xl border border-gray-300 mb-4 text-lg focus:outline-pastel-mint resize-none h-32"
//         />

//         <button
//           onClick={generateRecipe}
//           disabled={loading}
//           className="w-full bg-pastel-pink text-white font-semibold py-3 rounded-xl shadow hover:bg-pastel-pink-dark transition-all"
//         >
//           {loading ? '✨ Generating...' : 'Generate Recipe'}
//         </button>

//         {recipe && (
//           <div className="mt-6 bg-pastel-blue bg-opacity-10 border border-pastel-blue text-base p-4 rounded-xl whitespace-pre-wrap font-medium shadow-inner">
//             {recipe}
//           </div>
//         )}
//       </div>
//     </main>
//   );
// }

'use client';
declare global {
  interface Window {
    html2pdf: any;
  }
}

import { useState, useRef } from 'react';

export default function Home() {
  const [ingredients, setIngredients] = useState('');
  const [recipe, setRecipe] = useState('');
  const [loading, setLoading] = useState(false);
  const recipeRef = useRef<HTMLDivElement>(null);

  const handleGenerate = async () => {
    setLoading(true);
    const res = await fetch('/api/recipe', {
      method: 'POST',
      body: JSON.stringify({ ingredients }),
      headers: { 'Content-Type': 'application/json' }
    });
    const data = await res.json();
    setRecipe(data.recipe || 'No recipe found.');
    setLoading(false);
  };

 const downloadPDF = async () => {
  if (recipeRef.current && typeof window !== 'undefined') {
    const html2pdf = (await import('html2pdf.js')).default;
    html2pdf().from(recipeRef.current).save('recipe.pdf');
    
    // Show alert after short delay (to allow download to trigger)
    setTimeout(() => {
      alert('✅ Recipe downloaded as PDF!');
    }, 1000);
  }
};




  return (
    <main style={{
  maxWidth: '700px',
  margin: '0 auto',
  padding: '2rem',
  background: '#fff8fb',
  borderRadius: '12px',
  boxShadow: '0 2px 8px rgba(0, 0, 0, 0.05)'
}}>

      <h1 style={{ textAlign: 'center', color: '#cc66a0' }}>💖 Recipe Generator</h1>

      <input
        type="text"
        placeholder="e.g. eggs, chocolate, flour"
        value={ingredients}
        onChange={(e) => setIngredients(e.target.value)}
        style={{ width: '100%', marginBottom: '1rem', padding: '0.5rem' }}
      />

      <button onClick={handleGenerate} disabled={loading}>
        {loading ? 'Generating...' : '🍓 Generate Recipe'}
      </button>

      {recipe && (
  <div
    ref={recipeRef}
    style={{
      marginTop: '2rem',
      background: '#fef6fb',
      padding: '2rem',
      borderRadius: '12px',
      boxShadow: '0 4px 10px rgba(0, 0, 0, 0.1)',
      lineHeight: '1.7',
      fontSize: '1rem',
      fontFamily: "'Poppins', sans-serif",
      color: '#333',
      whiteSpace: 'pre-line'
    }}
  >
    <h2 style={{
      color: '#d16ba5',
      borderBottom: '2px solid #fcd6e9',
      paddingBottom: '0.5rem',
      marginBottom: '1.5rem'
    }}>
      📝 Your Recipe
    </h2>

    <p>{recipe}</p>

    <button
      onClick={downloadPDF}
      style={{
        marginTop: '2rem',
        padding: '0.6rem 1.2rem',
        background: '#ffe6f0',
        color: '#b30059',
        border: '1px solid #fcd6e9',
        borderRadius: '8px',
        cursor: 'pointer',
        fontWeight: 600
      }}
    >
      📄 Download as PDF
    </button>
  </div>
)}
    </main>
  );
}
