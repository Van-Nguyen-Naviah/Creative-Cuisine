
import type { IngredientCategory } from './types';

export const DIETARY_OPTIONS: string[] = [
  'Meat Eaters',
  'Vegetarian',
  'Vegan',
  'Kids',
];

export const INGREDIENT_CATEGORIES: IngredientCategory[] = [
  {
    category: 'Proteins',
    items: [
      { name: 'Chicken', emoji: '🍗' },
      { name: 'Beef', emoji: '🥩' },
      { name: 'Pork', emoji: '🥓' },
      { name: 'Fish', emoji: '🐟' },
      { name: 'Tofu', emoji: '🧱' },
      { name: 'Lentils', emoji: '🫘' },
      { name: 'Eggs', emoji: '🥚' },
      { name: 'Chickpeas', emoji: '‍🧆' },
    ],
  },
  {
    category: 'Vegetables',
    items: [
      { name: 'Carrot', emoji: '🥕' },
      { name: 'Broccoli', emoji: '🥦' },
      { name: 'Spinach', emoji: '🥬' },
      { name: 'Tomato', emoji: '🍅' },
      { name: 'Onion', emoji: '🧅' },
      { name: 'Garlic', emoji: '🧄' },
      { name: 'Bell Pepper', emoji: '🫑' },
      { name: 'Mushroom', emoji: '🍄' },
    ],
  },
  {
    category: 'Carbohydrates',
    items: [
      { name: 'Rice', emoji: '🍚' },
      { name: 'Pasta', emoji: '🍝' },
      { name: 'Potatoes', emoji: '🥔' },
      { name: 'Bread', emoji: '🍞' },
      { name: 'Quinoa', emoji: '🌾' },
    ],
  },
  {
    category: 'Dairy & Alternatives',
    items: [
      { name: 'Milk', emoji: '🥛' },
      { name: 'Cheese', emoji: '🧀' },
      { name: 'Yogurt', emoji: '🍦' },
      { name: 'Almond Milk', emoji: '🥛' },
      { name: 'Coconut Cream', emoji: '🥥' },
    ],
  },
  {
    category: 'Fruits',
    items: [
      { name: 'Apple', emoji: '🍎' },
      { name: 'Banana', emoji: '🍌' },
      { name: 'Lemon', emoji: '🍋' },
      { name: 'Avocado', emoji: '🥑' },
      { name: 'Berries', emoji: '🍓' },
    ],
  },
];
