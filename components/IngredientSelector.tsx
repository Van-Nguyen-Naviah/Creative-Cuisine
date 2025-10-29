
import React from 'react';
import type { IngredientCategory } from '../types';

interface IngredientSelectorProps {
  categories: IngredientCategory[];
  selectedIngredients: string[];
  toggleIngredient: (ingredientName: string) => void;
}

const IngredientSelector: React.FC<IngredientSelectorProps> = ({ categories, selectedIngredients, toggleIngredient }) => {
  return (
    <div className="p-6 bg-white rounded-2xl shadow-lg">
      <div className="space-y-6">
        {categories.map(({ category, items }) => (
          <div key={category}>
            <h3 className="text-lg font-semibold text-gray-800 border-b-2 border-emerald-200 pb-2 mb-4">{category}</h3>
            <div className="flex flex-wrap gap-3">
              {items.map(ingredient => {
                const isSelected = selectedIngredients.includes(ingredient.name);
                return (
                  <button
                    key={ingredient.name}
                    onClick={() => toggleIngredient(ingredient.name)}
                    className={`flex items-center gap-2 px-3 py-2 rounded-lg text-sm font-medium transition-all duration-200 transform hover:scale-105 ${
                      isSelected
                        ? 'bg-emerald-500 text-white shadow-md'
                        : 'bg-gray-100 text-gray-700 hover:bg-gray-200'
                    }`}
                  >
                    <span>{ingredient.emoji}</span>
                    <span>{ingredient.name}</span>
                  </button>
                );
              })}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default IngredientSelector;
