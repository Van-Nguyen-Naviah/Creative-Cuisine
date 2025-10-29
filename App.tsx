
import React, { useState, useCallback } from 'react';
import { DIETARY_OPTIONS, INGREDIENT_CATEGORIES } from './constants';
import { generateRecipe } from './services/geminiService';
import Header from './components/Header';
import IngredientSelector from './components/IngredientSelector';
import RecipeDisplay from './components/RecipeDisplay';
import type { Ingredient } from './types';

const App: React.FC = () => {
  const [selectedIngredients, setSelectedIngredients] = useState<string[]>([]);
  const [dietaryPreference, setDietaryPreference] = useState<string>(DIETARY_OPTIONS[0]);
  const [generatedRecipe, setGeneratedRecipe] = useState<string | null>(null);
  const [isLoading, setIsLoading] = useState<boolean>(false);
  const [error, setError] = useState<string | null>(null);

  const toggleIngredient = useCallback((ingredientName: string) => {
    setSelectedIngredients(prev =>
      prev.includes(ingredientName)
        ? prev.filter(item => item !== ingredientName)
        : [...prev, ingredientName]
    );
  }, []);

  const handleGenerateRecipe = async () => {
    if (selectedIngredients.length === 0) {
      setError('Please select at least one ingredient.');
      return;
    }
    setError(null);
    setIsLoading(true);
    setGeneratedRecipe(null);

    try {
      const recipe = await generateRecipe(selectedIngredients, dietaryPreference);
      setGeneratedRecipe(recipe);
    } catch (err) {
      setError('Failed to generate recipe. Please try again.');
      console.error(err);
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <div className="min-h-screen bg-gray-50 text-gray-800 font-sans">
      <Header />
      <main className="container mx-auto p-4 md:p-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 lg:gap-12">
          {/* Controls Section */}
          <div className="flex flex-col gap-8">
            <div>
              <h2 className="text-2xl font-bold mb-4 text-gray-700">Choose Your Ingredients</h2>
              <IngredientSelector
                categories={INGREDIENT_CATEGORIES}
                selectedIngredients={selectedIngredients}
                toggleIngredient={toggleIngredient}
              />
            </div>
            
            <div>
              <h2 className="text-2xl font-bold mb-4 text-gray-700">Select Dietary Preference</h2>
              <div className="flex flex-wrap gap-3">
                {DIETARY_OPTIONS.map(option => (
                  <button
                    key={option}
                    onClick={() => setDietaryPreference(option)}
                    className={`px-4 py-2 rounded-full text-sm font-semibold transition-all duration-200 ease-in-out transform hover:scale-105 ${
                      dietaryPreference === option
                        ? 'bg-emerald-500 text-white shadow-lg'
                        : 'bg-white text-gray-600 hover:bg-gray-200 border border-gray-200'
                    }`}
                  >
                    {option}
                  </button>
                ))}
              </div>
            </div>
          </div>

          {/* Recipe Display Section */}
          <div className="mt-8 lg:mt-0">
            <h2 className="text-2xl font-bold mb-4 text-gray-700">Your Creative Recipe</h2>
            <RecipeDisplay recipe={generatedRecipe} isLoading={isLoading} error={error} />
          </div>
        </div>
      </main>

      {/* Sticky Generate Button */}
      <div className="sticky bottom-0 left-0 right-0 p-4 bg-gradient-to-t from-gray-100 to-transparent flex justify-center">
        <button
          onClick={handleGenerateRecipe}
          disabled={isLoading || selectedIngredients.length === 0}
          className="w-full md:w-auto px-12 py-4 bg-emerald-600 text-white font-bold text-lg rounded-full shadow-2xl hover:bg-emerald-700 disabled:bg-gray-400 disabled:cursor-not-allowed transition-all duration-300 transform hover:scale-105 flex items-center justify-center gap-3"
        >
          {isLoading ? (
             <svg className="animate-spin h-5 w-5 text-white" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
              <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
              <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
            </svg>
          ) : 'Generate Recipe'}
        </button>
      </div>
    </div>
  );
};

export default App;
